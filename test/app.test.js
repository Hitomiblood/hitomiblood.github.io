const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return HTML', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Miguel Gómez Page 2');
  });
});
