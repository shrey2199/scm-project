const request = require('supertest');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('../app');
const Todo = require('../models/Todo');

dotenv.config();

// Connect to a test database
beforeAll(async () => {
    const url = process.env.MONGO_URL_TEST || 'mongodb://localhost:27017/todo-app-test';
    await mongoose.connect(url, {});
});

// Clear database after each test
afterEach(async () => {
    await Todo.deleteMany();
});

// Close connection after all tests
afterAll(async () => {
    await mongoose.connection.close();
});

describe('Todo API', () => {
    it('should create a new todo', async () => {
        const res = await request(app)
            .post('/api/todos')
            .send({
                text: 'Test Todo',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.text).toEqual('Test Todo');
    });

    it('should fetch all todos', async () => {
        await Todo.create({ text: 'Todo 1' });
        await Todo.create({ text: 'Todo 2' });

        const res = await request(app).get('/api/todos');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
    });

    it('should update a todo', async () => {
        const todo = await Todo.create({ text: 'Old Text' });
        const res = await request(app)
            .put(`/api/todos/${todo._id}`)
            .send({
                text: 'New Text',
                completed: true,
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.text).toEqual('New Text');
        expect(res.body.completed).toEqual(true);
    });

    it('should delete a todo', async () => {
        const todo = await Todo.create({ text: 'To Delete' });
        const res = await request(app).delete(`/api/todos/${todo._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Todo deleted');
    });
});
