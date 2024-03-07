'use strict';

const axios = require('axios');

//server side we read environment
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

class Forecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}

const getWeather = async (lat, lon) => {
  console.log('HELLO!');
  let weatherResponse = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}`);
  console.log(weatherResponse.data);
  return weatherResponse.data.data.map(day => {
    return new Forecast(day.datetime, day.weather.description);
  });
}; 

const parseLatLon = (params) => {
  let [item1, item2] = params.lat_lon.split('_');
  return [Number(parseFloat(item1).toFixed(4)), Number(parseFloat(item2).toFixed(4))];
}

const handleWeatherRequest = async (request, response) => {
  let [lat, lon] = parseLatLon(request.params);
  console.log(lat, lon);
  // Find the city based on lat, lon, or searchQuery
  const weatherData = await getWeather(lat, lon);
  // console.log(weatherData);

  // Send the processed data back to the client
  response.send(weatherData);
}

module.exports = {
  parseLatLon,
  Forecast,
  getWeather,
  handleWeatherRequest
}
