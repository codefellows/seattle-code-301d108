'use strict';

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Pokemon = require('./model/pokemon.js');
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL)
.then(() => {
  let charizard = new Pokemon({ name: 'Charizard', type: 'fire', health: 100, attack: 100 });
  let snorlax = new Pokemon({ name: 'Snorlax', type: 'sleepy', health: 100, attack: 10 })
  let magikarp = new Pokemon({ name: 'Magikarp', type: 'normal', health: 20, attack: 0 })
  let hitmonlee = new Pokemon({ name: 'Hitmonlee', type: 'fighting', health: 70, attack: 80 });
  charizard.save();
  snorlax.save();
  magikarp.save();
  hitmonlee.save();
}).catch(e => console.error(e));
