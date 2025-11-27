const express = require('express');
const cors = require('cors');
const promBundle = require('express-prom-bundle');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Prometheus Metrics Middleware
const metricsMiddleware = promBundle({
    includeMethod: true,
    includePath: true,
    includeStatusCode: true,
    includeUp: true,
    customLabels: { project_name: 'todo_project_backend' },
    promClient: {
        collectDefaultMetrics: {
        }
    }
});
app.use(metricsMiddleware);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

module.exports = app;
