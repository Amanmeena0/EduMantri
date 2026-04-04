"""
Tests for WebDocument.web_documents() in mcp_tools/webTools/scraper.py.

All network I/O is mocked via unittest.mock so no real HTTP requests are made.
"""

import pytest
from unittest.mock import patch, MagicMock, call
from langchain_core.documents import Document


# ---------------------------------------------------------------------------
# Import under test
# ---------------------------------------------------------------------------
from mcp_tools.webTools.scraper import WebDocument


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

_EXPECTED_URLS = [
    "https://www.dgft.gov.in/CP/?opt=dgft-ra-details",
    "https://www.dgft.gov.in/CP/?opt=dgft-hq-details",
]


def _make_mock_loader(docs):
    """Return a mock WebBaseLoader instance whose .load() returns *docs*."""
    loader = MagicMock()
    loader.load.return_value = docs
    return loader


# ---------------------------------------------------------------------------
# Tests
# ---------------------------------------------------------------------------


class TestWebDocumentWebDocuments:
    def test_returns_list(self):
        mock_loader = _make_mock_loader([])
        with patch("mcp_tools.webTools.scraper.WebBaseLoader", return_value=mock_loader):
            result = WebDocument.web_documents()
        assert isinstance(result, list)

    def test_loader_called_for_each_url(self):
        mock_loader = _make_mock_loader([])
        loader_cls = MagicMock(return_value=mock_loader)

        with patch("mcp_tools.webTools.scraper.WebBaseLoader", loader_cls):
            WebDocument.web_documents()

        # Should be called once per URL
        assert loader_cls.call_count == len(_EXPECTED_URLS)
        loader_cls.assert_any_call(_EXPECTED_URLS[0])
        loader_cls.assert_any_call(_EXPECTED_URLS[1])

    def test_documents_returned_from_loaders(self):
        doc1 = Document(page_content="DGFT RA info", metadata={})
        doc2 = Document(page_content="DGFT HQ info", metadata={})

        loaders = [_make_mock_loader([doc1]), _make_mock_loader([doc2])]
        loader_cls = MagicMock(side_effect=loaders)

        with patch("mcp_tools.webTools.scraper.WebBaseLoader", loader_cls):
            result = WebDocument.web_documents()

        assert len(result) == 2

    def test_empty_page_content_filtered_out(self):
        empty_doc = Document(page_content="   ", metadata={})
        valid_doc = Document(page_content="Real content", metadata={})

        loader = _make_mock_loader([empty_doc, valid_doc])
        loader_cls = MagicMock(return_value=loader)

        with patch("mcp_tools.webTools.scraper.WebBaseLoader", loader_cls):
            result = WebDocument.web_documents()

        # Only the valid_doc should survive the filtering step
        assert all(d.page_content.strip() != "" for d in result)

    def test_source_url_metadata_added(self):
        doc = Document(page_content="content", metadata={})
        loader = _make_mock_loader([doc])
        loader_cls = MagicMock(return_value=loader)

        with patch("mcp_tools.webTools.scraper.WebBaseLoader", loader_cls):
            result = WebDocument.web_documents()

        for d in result:
            assert "source_url" in d.metadata
            assert d.metadata["source_url"] in _EXPECTED_URLS

    def test_source_type_metadata_is_web(self):
        doc = Document(page_content="content", metadata={})
        loader = _make_mock_loader([doc])
        loader_cls = MagicMock(return_value=loader)

        with patch("mcp_tools.webTools.scraper.WebBaseLoader", loader_cls):
            result = WebDocument.web_documents()

        for d in result:
            assert d.metadata.get("source_type") == "web"

    def test_url_exception_is_handled_gracefully(self):
        """If one URL fails, the others should still be processed."""
        failing_loader = MagicMock()
        failing_loader.load.side_effect = ConnectionError("timeout")

        good_doc = Document(page_content="Good content", metadata={})
        good_loader = _make_mock_loader([good_doc])

        loader_cls = MagicMock(side_effect=[failing_loader, good_loader])

        with patch("mcp_tools.webTools.scraper.WebBaseLoader", loader_cls):
            result = WebDocument.web_documents()

        # Should have at least the good document
        assert len(result) >= 1

    def test_all_urls_fail_returns_empty(self):
        failing_loader = MagicMock()
        failing_loader.load.side_effect = ConnectionError("timeout")

        loader_cls = MagicMock(return_value=failing_loader)

        with patch("mcp_tools.webTools.scraper.WebBaseLoader", loader_cls):
            result = WebDocument.web_documents()

        assert result == []

    def test_document_count_matches_loaded(self):
        docs_a = [Document(page_content=f"doc {i}", metadata={}) for i in range(3)]
        docs_b = [Document(page_content=f"doc {i+3}", metadata={}) for i in range(2)]

        loaders = [_make_mock_loader(docs_a), _make_mock_loader(docs_b)]
        loader_cls = MagicMock(side_effect=loaders)

        with patch("mcp_tools.webTools.scraper.WebBaseLoader", loader_cls):
            result = WebDocument.web_documents()

        assert len(result) == 5

    def test_metadata_url_matches_correct_source(self):
        """Each document's source_url should correspond to the URL it was loaded from."""
        doc_ra = Document(page_content="RA details", metadata={})
        doc_hq = Document(page_content="HQ details", metadata={})

        loaders = [_make_mock_loader([doc_ra]), _make_mock_loader([doc_hq])]
        loader_cls = MagicMock(side_effect=loaders)

        with patch("mcp_tools.webTools.scraper.WebBaseLoader", loader_cls):
            result = WebDocument.web_documents()

        ra_docs = [d for d in result if "ra-details" in d.metadata.get("source_url", "")]
        hq_docs = [d for d in result if "hq-details" in d.metadata.get("source_url", "")]
        assert len(ra_docs) == 1
        assert len(hq_docs) == 1
