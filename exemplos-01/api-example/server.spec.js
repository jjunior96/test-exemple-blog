const { response } = require('express');
const supertest = require('supertest');

const request = supertest('http://localhost:3001');

test('should must be response on port 3001', async () => {
  const response = await request.get('/');
  
  return expect(response.status).toBe(200);
});