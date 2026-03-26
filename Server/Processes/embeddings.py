from langchain_google_genai import GoogleGenerativeAIEmbeddings



# --> local embeddings




## query embeddings
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")