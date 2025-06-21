import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = myclient["mydatabase"]



user_data = {"username": "new_user", "email": "new_user@example.com", "password_hash": "hashed_password", "profile" : []}
users_collection.insert_one(user_data)
