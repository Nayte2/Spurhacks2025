from MangoDB import users_collection

test_users = [
    {
        "user_id": "user_visual",
        "email": "visual@example.com",
        "password_hash": "hashed_pw1",
        "learning_style_scores": {
            "Visual": 7, "Auditory": 2, "Reading/Writing": 1,
            "Logical": 1, "Social": 1, "Solitary": 1
        },
        "primary_style": "Visual"
    },
    {
        "user_id": "user_logical",
        "email": "logical@example.com",
        "password_hash": "hashed_pw2",
        "learning_style_scores": {
            "Visual": 2, "Auditory": 1, "Reading/Writing": 1,
            "Logical": 7, "Social": 2, "Solitary": 1
        },
        "primary_style": "Logical"
    }
]

for user in test_users:
    users_collection.update_one(
        {"user_id": user["user_id"]},
        {"$set": user},
        upsert=True
    )

print("✅ Test users inserted.")