const request = require('supertest');
const app = require('../app');

describe('Metrics API', () => {
    it('should return prometheus metrics', async () => {
        const res = await request(app).get('/metrics');
        expect(res.statusCode).toEqual(200);
        expect(res.headers['content-type']).toMatch(/text\/plain/);
        expect(res.text).toContain('nodejs_version_info');
    });
});
