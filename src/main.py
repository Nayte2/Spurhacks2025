from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from .MangoDB import get_user_learning_style
from .GroqGPT import get_styled_response
from .tts import text_to_speech
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

# Personalized Groq response endpoint (text only)
@app.post("/ask")
def ask_question(payload: AskRequest):
    answer = get_styled_response(payload.user_id, payload.question)
    return {"answer": answer}

# Audio version for auditory learners
@app.post("/ask-audio")
def ask_audio(payload: AskRequest):
    primary_style = get_user_learning_style(payload.user_id)
    answer = get_styled_response(payload.user_id, payload.question)

    if primary_style == "Auditory":
        audio_stream = text_to_speech(answer)
        return StreamingResponse(audio_stream, media_type="audio/mpeg")
    else:
        return {"error": "User is not an auditory learner", "answer": answer}

# Optional test case (can be removed in production)
if __name__ == "__main__":
    print("\n--- TEST: VISUAL LEARNER ---")
    print(get_styled_response("user_visual", "What is recursion in programming?"))

    print("\n--- TEST: LOGICAL LEARNER ---")
    print(get_styled_response("user_logical", "What is recursion in programming?"))