# Docker ToDo Project

## 📌 Project Overview
This project is a **Full-Stack ToDo Application** built with:
- **Backend**: Flask (Python)
- **Frontend**: Vite + React (JavaScript)
- **Database**: (If any, mention here)
- **Docker** for containerization

Both the frontend and backend are containerized using **Docker**, making it easy to deploy and run.

---

## 📁 Project Structure
```
.
├── backend          # Backend (Flask API)
│   ├── app         # Application logic (routes, models, etc.)
│   ├── dist        # Compiled frontend (if applicable)
│   ├── requirements.txt  # Python dependencies
│   └── run.py      # Main Flask application entry point
├── Dockerfile      # Dockerfile for the backend
└── frontend        # Frontend (Vite + React)
    ├── dist       # Compiled frontend (Do not copy to container)
    ├── src        # Source code for React frontend
    ├── package.json   # Frontend dependencies
    ├── vite.config.js # Vite configuration
    └── public     # Static assets
```
## 🐳 Public Docker Image

A public Docker image for this project is available on Docker Hub. You can pull the image using the following command:

```sh
docker pull thefastest599/todo-app:latest
```

To run the container using the pulled image:

```sh
docker run -p 5000:5000 --env-file backend/.env thefastest599/todo-app:latest
```
---

## 🚀 Getting Started

### **1️⃣ Prerequisites**
- Install **Docker**
  ```sh
  sudo apt update && sudo apt install docker.io -y
  ```
- Verify installation:
  ```sh
  docker --version
  ```

---

### **2️⃣ Build and Run with Docker**

#### **Step 1: Build the Docker Image**
```sh
docker build -t todo-app .
```

#### **Step 2: Run the Docker Container**
```sh
docker run -p 5000:5000 --env-file backend/.env todo-app
```

#### **Step 3: Access the Application**
- Backend API: [http://127.0.0.1:5000](http://127.0.0.1:5000)
- Frontend (if running separately): [http://localhost:3000](http://localhost:3000)

---

## 📦 Docker Commands

### **Stop and Remove Containers**
```sh
docker ps -a          # List all containers
docker stop <container_id>
docker rm <container_id>
```

### **Remove Unused Images**
```sh
docker rmi <image_id>
```

### **Push to Docker Hub**
```sh
docker tag todo-app your-docker-username/todo-app:latest
docker push your-docker-username/todo-app:latest
```

### **Pull from Docker Hub**
```sh
docker pull your-docker-username/todo-app:latest
docker run -p 5000:5000 your-docker-username/todo-app
```

---

## 🛠️ Troubleshooting
- **Port Already in Use**: Run `sudo lsof -i :5000` and `kill <PID>`
- **Permission Denied for Docker**: Use `sudo` or add your user to the Docker group:
  ```sh
  sudo usermod -aG docker $USER
  ```

---

## 📜 License
This project is open-source and free to use. Contributions are welcome! 🚀

