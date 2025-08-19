# 📌 Task Tracker

A simple **Task Tracker** application built with **Flask (backend)**, **React (frontend with Vite)**, and **PostgreSQL (database)**. The project is fully containerized using **Docker Compose**.

---

## 🚀 Tech Stack

* **Backend**: Flask, SQLAlchemy, Flask-CORS
* **Frontend**: React + Vite
* **Database**: PostgreSQL
* **Containerization**: Docker & Docker Compose

---

## ⚙️ Features

* Create, read, update, and delete tasks
* Mark tasks as completed
* Persistent storage with PostgreSQL
* Default seed tasks are loaded automatically
* Fully containerized (works out of the box with Docker Compose)

---

## 📂 Project Structure

```
/task-tracker
│── backend/           # Flask backend
│   ├── app.py         # Main Flask application
│   ├── requirements.txt
│
│── frontend/          # React frontend (Vite)
│   ├── src/
│   ├── package.json
│
│── init.sql           # Default seed data for database
│── docker-compose.yml # Docker services definition
│── .gitignore
│── README.md
```

---

## 🐳 Running with Docker

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/task-tracker.git
cd task-tracker
```

### 2️⃣ Build and start containers

```bash
docker compose up --build
```

This will start three services:

* **db** → PostgreSQL (on port `5433` locally, `5432` inside container)
* **backend** → Flask API ([http://localhost:5000](http://localhost:5000))
* **frontend** → React UI ([http://localhost:3000](http://localhost:3000))

### 3️⃣ Access the app

* Open **[http://localhost:3000](http://localhost:3000)** in your browser to use the frontend.
* Backend API is available at **[http://localhost:5000](http://localhost:5000)**.

---

## 🗄️ Database Setup

* On first startup, SQLAlchemy (`db.create_all()`) will create the required tables.
* The `init.sql` file will insert **default tasks** if they don’t already exist:

  * ✅ Learn Docker
  * ✅ Build Task Tracker
  * ✅ Test Application

---

## 🧑‍💻 Development Setup (without Docker)

### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
export DATABASE_URL=postgresql://task_user:taskpass@localhost:5432/task_tracker_db
python app.py
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Default Credentials

* **Postgres User**: `task_user`
* **Password**: `taskpass`
* **Database**: `task_tracker_db`

(These are defined in `docker-compose.yml`)

---

## 📝 API Endpoints

### Base URL: `http://localhost:5000`

* `GET /tasks` → Fetch all tasks
* `POST /tasks` → Create a new task
* `PUT /tasks/<id>` → Update a task
* `DELETE /tasks/<id>` → Delete a task

Example request:

```json
POST /tasks
{
  "title": "Write docs",
  "description": "Prepare README for Task Tracker"
}
```

---

## 🧹 Cleaning Up

To stop and remove containers, networks, and volumes:

```bash
docker compose down -v
```

---

## 📌 Notes

* `init.sql` is used **only for inserting default tasks**, not for schema creation (tables are created by SQLAlchemy).
* Data is stored in a **named Docker volume** (`db_data`), so it persists across container restarts.

---

## 📜 License

MIT License © 2025 Spheriverse

