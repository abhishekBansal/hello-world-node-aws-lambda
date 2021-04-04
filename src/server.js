const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
const baseUrl = `http://localhost:${port}`;


app.get('/', (req, res) => {
   res.status(200).send('hello world!');
});

app.get('/loop', (req, res) => {
   var index = 0
   for(var i = 0; i <= 300000; i++) {
      index = i
   }

   res.status(200).send(`hello world loop! ${index}`);
});

// Server
module.exports = app;

