from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "ClassVoice AI Backend Running"}

@app.get("/insights")
def insights():
    return {
        "engagement": 78,
        "silent_students": 12,
        "recommendation": "Increase collaborative learning sessions"
    }