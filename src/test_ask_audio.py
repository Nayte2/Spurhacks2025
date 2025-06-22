import requests

# Replace with your FastAPI backend URL
URL = "http://127.0.0.1:8000/ask-audio"

# Define the payload
payload = {
    "user_id": "user_auditory",  # This should be one of your seeded users
    "question": "What is machine learning?"
}

# Make POST request to /ask-audio
response = requests.post(URL, json=payload)

# Check content type
if response.status_code == 200 and "audio/mpeg" in response.headers.get("Content-Type", ""):
    # Save response as mp3
    with open("test_output.mp3", "wb") as f:
        f.write(response.content)
    print("✅ MP3 file saved as 'test_output.mp3'")
else:
    print(f"❌ Request failed: {response.status_code}")
    print("Response:", response.text)