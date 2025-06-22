# src/api.py or src/server.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from Quizscorer import score_quiz

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/submit-quiz")
async def submit_quiz(req: Request):
    data = await req.json()
    answers = data.get("answers", [])  # frontend sends: { "answers": ["A", "B", ..., "F"] }
    result = score_quiz(answers)
    return result