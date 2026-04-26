#main
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# This is the "app" variable uvicorn is looking for!
app = FastAPI()

# This is the security gate for your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Edu-Sync Backend is Live", "status": "Ready"}