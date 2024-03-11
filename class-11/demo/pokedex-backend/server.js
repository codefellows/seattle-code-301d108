'use strict';

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Pokemon = require('./model/pokemon.js');

dotenv.config();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

const app = express();
app.use(cors());

app.get('/pokemon', async (request, response) => {
  // READ from the pokemon model
  let documents = await Pokemon.find(); // should return every model instance in the DB
  response.send(documents);
});

mongoose.connect(DATABASE_URL)
.then(() => {
  app.listen(PORT, () => {
    console.log('Server is listening!', PORT);
  });
})
.catch(e => {
  console.log('DB Connection issue', e);
});
