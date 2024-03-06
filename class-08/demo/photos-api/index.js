'use strict';

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config(); // loads our environement variables from our .env file.

// server side, we read environment variables using the process.env object
const PORT = process.env.PORT;
const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

const app = express();
app.use(cors());

app.get('/photos', async (request, response) => {
  let searchQuery = request.query.search;
  console.log('REQUEST QUERY STRING', request.query.search);// request query string using express :)
  let photoResponse = await axios.get(`https://api.unsplash.com/search/photos?page=1&client_id=${UNSPLASH_API_KEY}&query=` + searchQuery);
  console.log('RESPONSE from unsplash', photoResponse);
  response.json(photoResponse.data);
});

app.listen(PORT, () => {
  console.log('Server is listening on port ::', PORT);  
});
