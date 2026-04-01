
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express(); 
const cors = require('cors');


 
  app.use(cors());


app.get('/', (reg, res) => {
    res.send('hello world');
})


module.exports = app;