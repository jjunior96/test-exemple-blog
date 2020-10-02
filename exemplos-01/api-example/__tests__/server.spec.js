const request = require('supertest');

const app = require('../src/app');

test('should must be response on port 3001', () => {
  return request(app).get('/').then(response => {
    expect(response.status).toBe(200);
  })
});