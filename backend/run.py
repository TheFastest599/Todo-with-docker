from app import app, db
from flask_cors import CORS

if __name__ == "__main__":
    with app.app_context():
        print("Creating database...")
        db.create_all()
        print("Database created.")
        app.run(host="0.0.0.0", port=5000, debug=True)


