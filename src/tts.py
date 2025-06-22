# src/tts.py
import os
from dotenv import load_dotenv
from elevenlabs.client import ElevenLabs
import io

# Load API key from .env
load_dotenv()
client = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))

def text_to_speech(text: str, voice_id: str = "21m00tcm4tlvdq8ikwam", model_id: str = "flash_v2.5"):
    audio = client.text_to_speech.convert(
        text=text,
        voice_id=voice_id,
        model_id=model_id,
        output_format="mp3_44100_128"
    )
    return io.BytesIO(audio)