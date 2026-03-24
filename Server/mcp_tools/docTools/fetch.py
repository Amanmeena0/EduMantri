import os 
from pathlib import Path
from langchain_community.document_loaders import PyPDFLoader, TextLoader
import logging
from typing import List, Dict, Any


def load_documents() -> List[Document]:
    """Load all documents from specified directories"""

    base_dirs = [
        "./dat/FAQ",
        "./data/Hand_of_Procedure", 
        "./data/Foregin_Trade_Policy",
        "./data/Txt_files/"
    ]

    all_documents = []

    for folder in base_dirs:
        for file_path in Path(folder).rglob("*"):
            if file_path.suffix.lower() in ['.pdf','.txt']:
                try:
                    loader = PyPDFLoader(str(file_path)) if file_path.suffix = ".pdf"  else TextLoader(str(file_path))
                    docs = loader.load()

                    for doc in docs:
                        doc.metadata['file_path'] = str(file_path)
                        doc.metadata['file_path'] = file_path.suffix


                    all_documents.extend(docs)

                except Exception as e:
                    logger.warning(f"Failed ot load {file_path}: {e}")

 