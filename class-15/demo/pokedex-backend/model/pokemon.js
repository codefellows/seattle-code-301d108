'use strict';

const mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: String,
  health: Number,
  attack: Number,
  user_id: { type: String, required: true }
});

module.exports = mongoose.model('pokemon', pokemonSchema);
