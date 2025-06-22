import os
import requests
from .MangoDB import get_user_learning_style

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

style_prompts = {
    "Visual": "Explain this using diagrams, visual metaphors, or structure.",
    "Auditory": "Explain this conversationally, like you're speaking to the user.",
    "Reading/Writing": "Use written explanations, definitions, and summaries.",
    "Logical": "Use step-by-step reasoning, analysis, and structure.",
    "Social": "Frame this as a dialogue or collaborative discussion.",
    "Solitary": "Encourage introspection and independent thinking in your explanation."
}

def get_styled_response(user_id, user_question):
    user_style = get_user_learning_style(user_id)
    style_instruction = style_prompts.get(user_style, "Respond clearly and helpfully.")

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": "llama3-8b-8192",
        "messages": [
            {"role": "system", "content": style_instruction},
            {"role": "user", "content": user_question}
        ]
    }

    response = requests.post(GROQ_API_URL, headers=headers, json=data)

    if response.status_code == 200:
        return response.json()["choices"][0]["message"]["content"]
    else:
        raise Exception(f"Groq API failed: {response.status_code} {response.text}")