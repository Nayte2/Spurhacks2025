# GroqGPT.py
import os
import openai
from .MangoDB import get_user_learning_style

# Configure API key and endpoint
openai.api_key = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

# Prompts per learning style
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

    messages = [
        {"role": "system", "content": style_instruction},
        {"role": "user", "content": user_question}
    ]

    response = openai.ChatCompletion.create(
        model="llama3-8b-8192",
        messages=messages,
        api_base=GROQ_API_URL
    )

    return response["choices"][0]["message"]["content"]