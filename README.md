# DevOps-Driven MERN Stack Project

A production-ready MERN stack application designed with a **DevOps-First** approach. This project demonstrates a complete software supply chain implementation, featuring automated CI/CD pipelines, container orchestration, security scanning, and real-time observability.

## 🚀 Key DevOps Features

### 1. 🔄 CI/CD Pipeline (GitHub Actions)
A robust pipeline defined in `.github/workflows/ci.yml` that ensures code reliability and security:
-   **Code Quality**: Automated linting with **ESLint** and formatting with **Prettier**.
-   **Automated Testing**: Runs Unit and Integration tests for Backend (Jest/Supertest) and Frontend (Jest/React Testing Library).
-   **Security Scanning**: Automated dependency vulnerability auditing using **npm audit**.
-   **Containerization**: Builds Docker images for both services.

### 2. 🐳 Containerization & Orchestration
-   **Docker**: Multi-stage builds for optimized image sizes.
-   **Docker Compose**: Orchestrates the entire stack including:
    -   **Backend**: Node.js/Express API.
    -   **Frontend**: React/Vite UI.
    -   **Database**: MongoDB with persistent volume storage.
    -   **Monitoring Stack**: Prometheus and Grafana.

### 3. 📊 Observability & Monitoring
Real-time insights into application performance:
-   **Prometheus**: Scrapes metrics from the backend API (via `express-prom-bundle`).
-   **Grafana**: Visualizes metrics with custom dashboards (accessible on port `3100`).
-   **Metrics Exposed**: Request duration, error rates, system memory, and CPU usage.

### 4. 🛡️ Security
-   **Dependency Auditing**: Automated checks for vulnerable packages during CI.
-   **Secure Configuration**: Environment variables management for sensitive data.
-   **Network Isolation**: Docker Compose bridge network isolates services.

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **CI/CD** | GitHub Actions |
| **Containerization** | Docker, Docker Compose |
| **Monitoring** | Prometheus, Grafana |
| **Backend** | Node.js, Express, Mongoose |
| **Frontend** | React, Vite, Tailwind-like CSS |
| **Database** | MongoDB |
| **Testing** | Jest, Supertest, React Testing Library |

## 🏃‍♂️ Quick Start (DevOps Mode)

The entire environment is containerized. You only need Docker and Docker Compose.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Spin up the Infrastructure:**
    ```bash
    docker-compose up --build
    ```

3.  **Access Services:**
    | Service | URL | Credentials |
    |---------|-----|-------------|
    | **Frontend App** | `http://localhost` | - |
    | **Backend API** | `http://localhost:5000` | - |
    | **Grafana** | `http://localhost:3100` | `admin` / `admin` |
    | **Prometheus** | `http://localhost:9090` | - |

## 🧪 Testing & Verification

### Run Tests Locally
```bash
# Backend Integration Tests
cd backend && npm test

# Frontend Unit Tests
cd frontend && npm test
```

### Verify Metrics
1.  Generate some traffic by using the Todo App.
2.  Visit `http://localhost:5000/metrics` to see raw Prometheus metrics.
3.  Open Grafana at `http://localhost:3100` to view visualizations.

## 📂 Project Structure

```
├── .github/workflows/  # CI/CD Pipeline Definition
├── monitoring/         # Prometheus Configuration
├── backend/            # Backend Source + Dockerfile
├── frontend/           # Frontend Source + Dockerfile
└── docker-compose.yml  # Infrastructure as Code
```
