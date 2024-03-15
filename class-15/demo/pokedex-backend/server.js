'use strict';

const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Pokemon = require('./model/pokemon.js');
const authorize = require('./authorize.js');

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

const app = express();
app.use(cors());
// tells express to expect JSON data attached to our request objects.
app.use(express.json());
app.use(authorize);

app.get('/pokemon', async (request, response) => {
  // READ from the pokemon model
  let documents = await Pokemon.find(); // should return every model instance in the DB
  response.send(documents);
});

// create a pokemon object
app.post('/pokemon', async (request, response) => {
  let json = request.body;
  console.log('HERE ARE THE POKEMON VALUES', json);
  let newPokemon = await Pokemon.create(json);
  response.send(newPokemon);
});
// remove a pokemon object by id
app.delete('/pokemon/:id', async (request, response) => {
  let id = request.params.id;
  console.log('POKEMON ID TO REMOVE', id);
  let result = await Pokemon.findByIdAndDelete(id);
  if (result) {
    response.status(204).send('OK');
  } else {
    response.status(400)
  }
});

app.put('/pokemon/:id', async (request, response) => {
  try {
    let json = request.body;
    let id = request.params.id;
  
    let document = await Pokemon.findByIdAndUpdate({ _id: id }, json, {new: true});
    response.send(document);
  } catch(e) {
    response.status(400).send('bad request');
  }
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
