"""
Tests for SemanticChunker and process_documents_with_chunking in Chunking.py.

AutoTokenizer.from_pretrained is mocked throughout to avoid network calls.
A character-level mock tokenizer is used so token counts are predictable.
"""

import pytest
from unittest.mock import patch, MagicMock
from langchain_core.documents import Document


# ---------------------------------------------------------------------------
# Mock tokenizer helpers
# ---------------------------------------------------------------------------

class _MockEncoding:
    """Mimics the dict-like BatchEncoding returned by HuggingFace tokenizers."""

    def __init__(self, token_ids, offsets):
        self._data = {"input_ids": token_ids, "offset_mapping": offsets}

    def get(self, key, default=None):
        return self._data.get(key, default)


class _MockTokenizer:
    """Character-level tokenizer: each character → one token.

    token_id  = ord(character)
    decode    = chr(token_id) per token → joins to original string
    """

    def __call__(self, text, add_special_tokens=False, return_offsets_mapping=False):
        token_ids = [ord(c) for c in text]
        offsets = [(i, i + 1) for i in range(len(text))]
        return _MockEncoding(token_ids, offsets)

    def decode(self, token_ids, skip_special_tokens=True):
        return "".join(chr(t) for t in token_ids).strip()


@pytest.fixture()
def mock_tokenizer():
    """Patch AutoTokenizer.from_pretrained for the duration of a test."""
    with patch(
        "Processes.OperationalFiles.Chunking.AutoTokenizer.from_pretrained",
        return_value=_MockTokenizer(),
    ):
        yield


# ---------------------------------------------------------------------------
# Import under test (after patching is in place for each test via fixture)
# ---------------------------------------------------------------------------
from Processes.OperationalFiles.Chunking import (  # noqa: E402
    Chunk,
    SemanticChunker,
    process_documents_with_chunking,
)


# ---------------------------------------------------------------------------
# SemanticChunker – constructor validation
# ---------------------------------------------------------------------------


class TestSemanticChunkerInit:
    def test_valid_defaults(self, mock_tokenizer):
        chunker = SemanticChunker()
        assert chunker.chunk_size == 800
        assert chunker.overlap == 100

    def test_valid_custom_params(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=200, overlap=50)
        assert chunker.chunk_size == 200
        assert chunker.overlap == 50

    def test_chunk_size_zero_raises(self, mock_tokenizer):
        with pytest.raises(ValueError, match="chunk_size must be greater than 0"):
            SemanticChunker(chunk_size=0)

    def test_chunk_size_negative_raises(self, mock_tokenizer):
        with pytest.raises(ValueError, match="chunk_size must be greater than 0"):
            SemanticChunker(chunk_size=-10)

    def test_overlap_negative_raises(self, mock_tokenizer):
        with pytest.raises(ValueError, match="overlap must be greater than or equal to 0"):
            SemanticChunker(chunk_size=100, overlap=-1)

    def test_overlap_equals_chunk_size_raises(self, mock_tokenizer):
        with pytest.raises(ValueError, match="overlap must be smaller than chunk_size"):
            SemanticChunker(chunk_size=100, overlap=100)

    def test_overlap_greater_than_chunk_size_raises(self, mock_tokenizer):
        with pytest.raises(ValueError, match="overlap must be smaller than chunk_size"):
            SemanticChunker(chunk_size=100, overlap=150)

    def test_overlap_zero_is_valid(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=50, overlap=0)
        assert chunker.overlap == 0


# ---------------------------------------------------------------------------
# SemanticChunker – _semantic_chunk
# ---------------------------------------------------------------------------


class TestSemanticChunk:
    def _make_chunker(self, chunk_size=20, overlap=5):
        with patch(
            "Processes.OperationalFiles.Chunking.AutoTokenizer.from_pretrained",
            return_value=_MockTokenizer(),
        ):
            return SemanticChunker(chunk_size=chunk_size, overlap=overlap)

    def test_empty_text_returns_empty(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=20, overlap=5)
        result = chunker._semantic_chunk("", "src")
        assert result == []

    def test_whitespace_only_returns_empty(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=20, overlap=5)
        result = chunker._semantic_chunk("   \n\t  ", "src")
        assert result == []

    def test_short_text_single_chunk(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        text = "Hello World"
        result = chunker._semantic_chunk(text, "test_src")
        assert len(result) == 1
        assert result[0].content == text
        assert result[0].metadata["source_id"] == "test_src"
        assert result[0].metadata["chunk_index"] == 0

    def test_long_text_multiple_chunks(self, mock_tokenizer):
        # 50 chars → chunk_size=20, overlap=5 → step=15 → ~4 chunks
        chunker = SemanticChunker(chunk_size=20, overlap=5)
        text = "a" * 50
        result = chunker._semantic_chunk(text, "doc1")
        assert len(result) > 1

    def test_chunk_ids_are_unique(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=20, overlap=5)
        text = "b" * 60
        result = chunker._semantic_chunk(text, "doc_x")
        ids = [c.chunk_id for c in result]
        assert len(ids) == len(set(ids))

    def test_chunk_id_format(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        text = "some content"
        result = chunker._semantic_chunk(text, "mysource")
        assert result[0].chunk_id == "mysource_chunk_0"

    def test_char_positions_are_non_negative(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=30, overlap=5)
        text = "The quick brown fox jumps over the lazy dog"
        result = chunker._semantic_chunk(text, "test")
        for chunk in result:
            assert chunk.start_index >= 0
            assert chunk.end_index > chunk.start_index

    def test_metadata_word_count(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        text = "one two three"
        result = chunker._semantic_chunk(text, "src")
        assert len(result) == 1
        assert result[0].metadata["word_count"] == 3

    def test_metadata_char_count(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        text = "hello"
        result = chunker._semantic_chunk(text, "src")
        assert result[0].metadata["char_count"] == len(text)

    def test_metadata_token_counts(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        text = "hello"
        result = chunker._semantic_chunk(text, "src")
        assert result[0].metadata["token_count"] == len(text)
        assert result[0].metadata["token_start"] == 0
        assert result[0].metadata["token_end"] == len(text)


# ---------------------------------------------------------------------------
# SemanticChunker – _create_chunk
# ---------------------------------------------------------------------------


class TestCreateChunk:
    def test_returns_chunk_dataclass(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        chunk = chunker._create_chunk("text", 0, 4, "s1", 0, 0, 4)
        assert isinstance(chunk, Chunk)

    def test_metadata_fields_present(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        chunk = chunker._create_chunk("hello world", 5, 16, "src", 2, 10, 12)
        meta = chunk.metadata
        assert meta["source_id"] == "src"
        assert meta["chunk_index"] == 2
        assert meta["char_count"] == len("hello world")
        assert meta["word_count"] == 2
        assert meta["token_count"] == 2  # token_end - token_start
        assert meta["token_start"] == 10
        assert meta["token_end"] == 12
        assert meta["chunk_start"] == 5
        assert meta["chunk_end"] == 16

    def test_chunk_id_format(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        chunk = chunker._create_chunk("data", 0, 4, "file_a", 3, 0, 4)
        assert chunk.chunk_id == "file_a_chunk_3"

    def test_start_end_indices(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        chunk = chunker._create_chunk("text", 7, 11, "src", 0, 0, 4)
        assert chunk.start_index == 7
        assert chunk.end_index == 11


# ---------------------------------------------------------------------------
# SemanticChunker – chunk_document
# ---------------------------------------------------------------------------


class TestChunkDocument:
    def test_returns_list_of_documents(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        doc = Document(page_content="Hello world", metadata={"source": "test.pdf"})
        result = chunker.chunk_document(doc)
        assert isinstance(result, list)
        assert all(isinstance(d, Document) for d in result)

    def test_metadata_merged(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        doc = Document(
            page_content="Test content",
            metadata={"source": "doc.pdf", "page": 1},
        )
        result = chunker.chunk_document(doc)
        assert len(result) >= 1
        assert result[0].metadata["source"] == "doc.pdf"
        assert result[0].metadata["page"] == 1
        assert "chunk_index" in result[0].metadata

    def test_empty_document_returns_empty(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        doc = Document(page_content="", metadata={"source": "empty.pdf"})
        result = chunker.chunk_document(doc)
        assert result == []

    def test_uses_source_from_metadata(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        doc = Document(
            page_content="content",
            metadata={"source": "policy.pdf"},
        )
        result = chunker.chunk_document(doc)
        assert result[0].metadata["source_id"] == "policy.pdf"

    def test_missing_source_uses_unknown(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=100, overlap=10)
        doc = Document(page_content="content", metadata={})
        result = chunker.chunk_document(doc)
        assert result[0].metadata["source_id"] == "unknown"

    def test_chunk_content_is_non_empty(self, mock_tokenizer):
        chunker = SemanticChunker(chunk_size=30, overlap=5)
        text = "x" * 80
        doc = Document(page_content=text, metadata={"source": "big.pdf"})
        result = chunker.chunk_document(doc)
        for d in result:
            assert d.page_content.strip() != ""


# ---------------------------------------------------------------------------
# process_documents_with_chunking
# ---------------------------------------------------------------------------


class TestProcessDocumentsWithChunking:
    def test_empty_list_returns_empty(self, mock_tokenizer):
        result = process_documents_with_chunking([])
        assert result == []

    def test_single_document_produces_chunks(self, mock_tokenizer):
        doc = Document(page_content="Hello world", metadata={"source": "a.pdf"})
        result = process_documents_with_chunking([doc])
        assert len(result) >= 1

    def test_multiple_documents_aggregated(self, mock_tokenizer):
        docs = [
            Document(page_content="Doc one content", metadata={"source": "one.pdf"}),
            Document(page_content="Doc two content", metadata={"source": "two.pdf"}),
        ]
        result = process_documents_with_chunking(docs)
        assert len(result) >= 2

    def test_failed_chunk_is_skipped(self, mock_tokenizer):
        """A document that causes chunk_document to raise should be skipped."""
        good_doc = Document(page_content="Good content", metadata={"source": "ok.pdf"})
        bad_doc = Document(page_content="Bad content", metadata={"source": "bad.pdf"})

        original_chunk_document = SemanticChunker.chunk_document

        def _side_effect(self, doc):
            if doc.metadata.get("source") == "bad.pdf":
                raise RuntimeError("simulated failure")
            return original_chunk_document(self, doc)

        with patch.object(SemanticChunker, "chunk_document", _side_effect):
            result = process_documents_with_chunking([good_doc, bad_doc])

        # Only chunks from good_doc should be present
        assert len(result) >= 1
        for d in result:
            assert d.metadata.get("source") != "bad.pdf"

    def test_output_elements_are_documents(self, mock_tokenizer):
        docs = [Document(page_content="some text", metadata={"source": "x.pdf"})]
        result = process_documents_with_chunking(docs)
        for item in result:
            assert isinstance(item, Document)
