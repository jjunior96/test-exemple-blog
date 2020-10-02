const { request } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.status(200).send();
}); 

app.listen(3001);