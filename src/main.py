from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .MangoDB import get_user_learning_style
from .GroqGPT import get_styled_response
import sys
import os
sys.path.append(os.path.dirname(__file__))
app = FastAPI()

# Allow frontend to access backend (adjust origin in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Get user's learning style from MongoDB
@app.get("/get-style")
def get_style(user_id: str):
    primary_style = get_user_learning_style(user_id)
    return {"primary_style": primary_style or "Unknown"}

# Request model for /ask
class AskRequest(BaseModel):
    user_id: str
    question: str

# Personalized Groq response endpoint
@app.post("/ask")
def ask_question(payload: AskRequest):
    answer = get_styled_response(payload.user_id, payload.question)
    return {"answer": answer}

# Optional test case (can be removed in production)
if __name__ == "__main__":
    print("\n--- TEST: VISUAL LEARNER ---")
    print(get_styled_response("user_visual", "What is recursion in programming?"))

    print("\n--- TEST: LOGICAL LEARNER ---")
    print(get_styled_response("user_logical", "What is recursion in programming?"))