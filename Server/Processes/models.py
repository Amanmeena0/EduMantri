from langchain_google_genai import GoogleGenerativeAIEmbeddings,ChatGoogleGenerativeAI
from langchain.embeddings import HuggingFaceEmbeddings
from dotenv import load_dotenv
import os


load_dotenv()

GOOGLE_KEY = os.getenv("GOOGLE_API_KEY") or os.getenv("+") 
os.environ["GOOGLE_API_KEY"] = GOOGLE_KEY


class Model:

    # --> local embeddings
    LocalEmbeddings = HuggingFaceEmbeddings(
        model_name="BAAI/bge-small-en",
        model_kwargs={"device": "cpu"}, 
        encode_kwargs={ "batch_size": 64,"normalize_embeddings": True}
    )

    ## query embeddings
    QueryEmbeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

    Model = ChatGoogleGenerativeAI(
        model="gemini-2.0-flash",
        temperature=0.2,
        top_p=0.9,
        google_api_key=GOOGLE_KEY
    )

