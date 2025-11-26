# MERN Stack Todo App with CI/CD & Docker

A full-stack Todo application built with the MERN stack (MongoDB, Express, React, Node.js), featuring a complete CI/CD pipeline using GitHub Actions and containerization with Docker.

## 🚀 Features

- **Full Stack**: React frontend + Node.js/Express backend + MongoDB database.
- **Modern UI**: "Rich Aesthetics" design with dark mode and animations.
- **Containerized**: Fully Dockerized with `docker-compose` for easy orchestration.
- **CI/CD**: Automated pipeline for Linting, Testing, Building, and Security Scanning.
- **Code Quality**: Enforced via ESLint and Prettier.
- **Security**: Vulnerability scanning with Trivy.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Axios, CSS3
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **DevOps**: Docker, Docker Compose, GitHub Actions

## 📋 Prerequisites

- Node.js (v18+)
- Docker & Docker Compose
- Git

## 🏃‍♂️ Getting Started

### Option 1: Using Docker (Recommended)

The easiest way to run the application is using Docker Compose.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Build and Run:**
    ```bash
    docker-compose up --build
    ```

3.  **Access the App:**
    - Frontend: `http://localhost`
    - Backend API: `http://localhost:5000`

### Option 2: Running Locally

If you want to run the services individually without Docker.

1.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    # Ensure you have a local MongoDB instance running or update .env
    npm run dev
    ```

2.  **Frontend Setup:**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

3.  **Access the App:**
    - Frontend: `http://localhost:5173`
    - Backend: `http://localhost:5000`

## 🧪 Running Tests

### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm test
```

## 🔄 CI/CD Pipeline

This project uses **GitHub Actions** for Continuous Integration and Deployment. The workflow is defined in `.github/workflows/ci.yml`.

**Pipeline Stages:**
1.  **Code Quality**: Runs ESLint and Prettier to ensure code style.
2.  **Testing**: Runs unit and integration tests for both Frontend and Backend.
    - *Note: Uses a temporary MongoDB service container for backend tests.*
3.  **Build & Containerize**: Builds Docker images for the application.
4.  **Security Scan**: Scans the built Docker images for vulnerabilities using **Trivy**.

## 📂 Project Structure

```
├── backend/                # Node.js/Express Backend
│   ├── controllers/        # Request handlers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── tests/              # Jest tests
│   ├── Dockerfile          # Backend Docker config
│   └── server.js           # Entry point
│
├── frontend/               # React/Vite Frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   └── App.jsx         # Main component
│   ├── Dockerfile          # Frontend Docker config
│   └── vite.config.js      # Vite config
│
├── .github/workflows/      # CI/CD Configuration
│   └── ci.yml              # GitHub Actions Workflow
│
└── docker-compose.yml      # Docker Orchestration
```
