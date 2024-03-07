'use strict';

const express = require('express');
const cors = require('cors');
const weatherData = require('./weather.json');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');


dotenv.config(); //loads our environment variables from our .env file

const PORT = process.env.PORT;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
//server side we read environment variables using the process.env object

class Forecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}

app.use(cors());
app.use(express.json());

const getWeather = async (lat, lon) => {
  console.log('HELLO!');
  let weatherResponse = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}`);
  console.log(weatherResponse.data);
  return weatherResponse.data.data.map(day => {
    return new Forecast (day.datetime, day.weather.description);
  });
}; 

const getMovies = async (city) => {
  let movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${city}&api_key=dcb6acb50e45e4d4dfc8ed9f119c8abd`);
  return movieResponse.data;
};


app.get('/weather/:lat_lon', async (request, response) => {
  const lat = Number(parseFloat(request.params.lat_lon.split('_')[0]).toFixed(4));
  const lon = Number(parseFloat(request.params.lat_lon.split('_')[1]).toFixed(4));
  console.log(lat, lon);
  // Find the city based on lat, lon, or searchQuery
  const weatherData = await getWeather(lat, lon);
  // console.log(weatherData);

  // Send the processed data back to the client
  response.send(weatherData);
});

app.get('/movies/:city', async (request, response) => {
  const moviesData = await getMovies(request.params.city);
  console.log(moviesData);
  response.send(moviesData);
});

app.listen(PORT, () => {
  console.log('Server running on port 3000');
});
