'use strict';

const mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
  name: String,
  type: String,
  health: Number,
  attack: Number,
});

module.exports = mongoose.model('pokemon', pokemonSchema);
