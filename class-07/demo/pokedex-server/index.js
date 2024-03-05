'use strict'; // strict error handling, forces us to use valid keywords

const express = require('express'); // requires is a build in node function for loading dependencies.
const cors = require('cors'); // cross origin resource sharing tool
const pokemonData = require('./pokedex.json');

// invoke express to create our "app"
const app = express();
app.use(cors());

class Pokemon {
  constructor(name, type, hp, abilities) {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.abilities = abilities;
  }
}

// define our endpoints
app.get('/pokemon', (request, response) => {
  console.log('Endpoint hit!'); // terminal should log this

  let pokedex = pokemonData.records.map((values) => {
    return new Pokemon(values.name, values.type, values["health-points"], values.abilities);
  });

  response.send(pokedex); // client should receive this
});
app.get('/pokemon/:name', (request, response) => {
  let pokemonName = request.params.name;
  let result;
  pokemonData.records.forEach(pokemon => {
    if (pokemon.name === pokemonName) {
      result = new Pokemon(pokemon.name, pokemon.type, pokemon["health-points"], pokemon.abilities)
    }
  })
  response.send(result);
});

// method for starting our server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});