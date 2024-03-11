'use strict';

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

// modeling our Problem Domain?

// figure out how to implement our idea
// what properties or keys are being stored, what types of data will do those values map to.
let pokemonSchema = new mongoose.Schema({
  name: String,
  type: String,
  health: Number,
  attack: Number,
});

mongoose.connect(DATABASE_URL)
.then(connection => {
  console.log("CONNECTION ESTABLISHED!!");
  
  // mongoose wants to feed schemas into model constructors
  let Pokemon = mongoose.model('pokemon', pokemonSchema);

  const pikachu = new Pokemon({ name: 'Pikachu' });
  pikachu.save();
  console.log(pikachu);
})
.catch(e => {
  console.error('CONNECTION ERROR', e);
});