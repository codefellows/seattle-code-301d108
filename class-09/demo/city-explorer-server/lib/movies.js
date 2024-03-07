'use strict';

const axios = require('axios');

const getMovies = async (city) => {
  let movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${city}&api_key=dcb6acb50e45e4d4dfc8ed9f119c8abd`);
  return movieResponse.data;
};

const handleMovieRequest = async (request, response) => {
  const moviesData = await getMovies(request.params.city);
  console.log(moviesData);
  response.send(moviesData);
}

// export things to other files
module.exports = {
  getMovies,
  handleMovieRequest,
}
