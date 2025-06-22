# MangoDB.py
import pymongo

# MongoDB setup
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]
users_collection = db["users"]  # Fix: define this collection

# Insert a new user (only if needed)
def insert_user(username, email, password_hash):
    user_data = {
        "user_id": username,
        "email": email,
        "password_hash": password_hash,
        "learning_style_scores": {},  # e.g. {"Visual": 5, "Logical": 3, ...}
        "primary_style": ""
    }
    users_collection.insert_one(user_data)

# Fetch a user's primary learning style
def get_user_learning_style(user_id):
    user = users_collection.find_one({"user_id": user_id})
    if user and "primary_style" in user:
        return user["primary_style"]
    return ""

# Store a user's quiz results
def save_quiz_result(user_id, scores, primary_style):
    users_collection.update_one(
        {"user_id": user_id},
        {"$set": {
            "learning_style_scores": scores,
            "primary_style": primary_style
        }},
        upsert=True
    )