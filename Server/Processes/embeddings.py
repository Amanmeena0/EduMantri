from langchain_google_genai import GoogleGenerativeAIEmbeddings
from sentence_transformers import SentenceTransformer

class Model:

    # --> local embeddings
    LocalEmbeddings = model = SentenceTransformer('all-MiniLM-L6-v2')

    ## query embeddings
    QueryEmbeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")