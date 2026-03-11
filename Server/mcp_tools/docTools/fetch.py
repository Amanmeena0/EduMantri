import os 
from pathlib import Path
from langchain_community.document_loaders import PyPDFLoader, TextLoader

def load_documents() -> List[Documents]:
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
                    loader = PyPDFLoader(str(file_path)) if file_path