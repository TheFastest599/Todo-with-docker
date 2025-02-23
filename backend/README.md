# Backend for ToDo App 🚀

This is the backend service for the **ToDo App**, built with Flask.

## 💁️ Project Structure

```
.
├── app
│   ├── __init__.py         # Initializes the Flask app
│   ├── models.py           # Database models
│   ├── __pycache__         # Compiled Python files (ignored in Git)
│   ├── routes.py           # API routes
│   ├── routes copy.py      # (Backup or duplicate file)
├── dist
│   ├── assets              # Static assets
│   ├── index.html          # Main frontend file
│   ├── vite.svg            # Vite logo (if using Vite)
├── requirements.txt        # Dependencies list
└── run.py                  # Entry point for running the app
```

## 🚀 Getting Started

### 1️⃣ Install Dependencies
Make sure you have Python installed, then run:

```sh
pip install -r requirements.txt
```

### 2️⃣ Set Up Environment Variables
Create a `.env` file (if required) to store configuration settings like database credentials.

### 3️⃣ Run the Flask Server
```sh
python run.py
```

### 4️⃣ API Endpoints
| Method | Endpoint        | Description               |
|--------|---------------|---------------------------|
| GET    | `/`           | Check server status       |
| POST   | `/tasks`      | Create a new task        |
| GET    | `/tasks`      | Get all tasks            |
| PUT    | `/tasks/<id>` | Update a task            |
| DELETE | `/tasks/<id>` | Delete a task            |

## 🐳 Running with Docker

### Build Docker Image
```sh
docker build -t flask-todo-backend .
```

### Run the Container
```sh
docker run -p 5000:5000 flask-todo-backend
```

## 🐜 License
This project is licensed under the MIT License.

---

Happy coding! 🚀🔥

