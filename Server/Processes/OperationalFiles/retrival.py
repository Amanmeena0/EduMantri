import os 
import logging 

from langchain_community.vectorstores import FAISS
from Processes.models.models import get_embedding

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class EnhancedRetriever:
    """Enhanced Retriever"""

    def __init__(self, persist_directory: str= "./faiss_index"):
        self.presist_directory = persist_directory
        self.embeddings = get_embedding
        self.vector_store = None
        self.retriver = None
        self.retriver()


    def initilize_retriver_mmr(self):
        """Initialize the FAISS vector store and retriever"""

        try:
            logger.info(
                f"Initializing FAISS vector store from: {self.persist_directory}"
            )

            # 🔹 Load FAISS index
            self.vector_store = FAISS.load_local(
                self.persist_directory,
                self.embeddings,
                allow_dangerous_deserialization=True
            )

            # 🔹 Create retriever
            self.retriever = self.vector_store.as_retriever(
                search_type="mmr",
                search_kwargs={
                    "k": 5,
                    "fetch_k": 10,
                    "lambda_mult": 0.7,
                }
            )

            logger.info("Vector store and retriever initialized successfully")

        except Exception as e:
            logger.error(f"Failed to initialize vector store: {e}")
            raise

enhanced_retriver = EnhancedRetriever()
retriver = enhanced_retriver.retriever