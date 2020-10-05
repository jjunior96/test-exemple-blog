const request = require('supertest');

const app = require('../src/app');

test('should must be able list all users', () => {
  return request(app).get('/users')
    .then((response) => {
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
      expect(response.body[0]).toHaveProperty('name', 'John Doe');
    });
});

test('should must be add user', () => {
  return request(app).post('/users')
    .send({ name: 'Junior', mail: 'junior@email.com' })
    .then((response) => {
      expect(response.status).toBe(201);
      expect(response.body.name).toBe('Junior')
    })
})