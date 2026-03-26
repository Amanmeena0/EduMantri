from langchain_community.vectorstores import FAISS
from langchain_core.documents import Document
from typing import List, Dict, Any
import logging


logging.basicConfig(level=logging.info)
logger = logging.getLogger(__name__)


def create_vector_store(documents: List[Document]):
    """Create and persist vector store from documents"""
    
   # Create vector store
    vectorstore = FAISS.from_documents(
        documents=documents,
        embedding=embeddings
    )

    # Save locally (FAISS does not use persist_directory like Chroma)
    vectorstore.save_local("./vahei_db")

    logger.info(f"Created vector store with {len(documents)} document chunks")
    
    return vectorstore