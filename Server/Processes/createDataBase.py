import faiss
from langchain_core.documents import Document
from typing import List, Dict, Any
import logging


logging.basicConfig(level=logging.info)
logger = logging.getLogger(__name__)


def create_vector_store(documents: List[Document]) -> faiss:
    """Create and persist vector store from documents"""
    
    # Create vector store
    vectorstore = faiss.from_documents(
        documents=documents,  
        embedding=embeddings,
        persist_directory="./vahei_db",
        collection_name="dgft_collection"
    )
    
    # Persist the vector store
    vectorstore.persist()
    logger.info(f"Created vector store with {len(documents)} document chunks")
    
    return vectorstore