'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config(); //loads our environment variables from our .env file

const { handleMovieRequest } = require('./lib/movies.js');
const { handleWeatherRequest } = require('./lib/weather.js');


const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// read the params, call the getWeather
app.get('/weather/:lat_lon', handleWeatherRequest);
app.get('/movies/:city', handleMovieRequest);

app.listen(PORT, () => {
  console.log('Server running on port 3000');
});
