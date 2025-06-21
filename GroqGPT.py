import os
import openai

def main():
    # Create a client using OpenAI's compatible interface for Groq
    client = openai.OpenAI(
        base_url="https://api.groq.com/openai/v1",
        api_key=os.environ.get("GROQ_API_KEY")
    )

    # Send a chat completion request
    response = client.chat.completions.create(
        model="llama3-8b-8192",  # Groq does not support "gpt-4.1", use LLaMA 3 instead
        messages=[
            {"role": "user", "content": "Write a one-sentence bedtime story about a unicorn."}
        ]
    )

    print(response.choices[0].message.content)

if __name__ == "__main__":
    main()
