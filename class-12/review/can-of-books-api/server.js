'use strict';

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const Books = require('./model/books.js');

dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 3001;
const DATABASE_URL=process.env.DATABASE_URL;

app.get('/books', async (request, response) => {
  try {
    const books = await Books.find();
    console.log('BOOKS FROM MONGODB', books);
    response.json(books);
  } catch (error) {
    response.status(500).send({ error: 'Error fetching books' });
  }
});

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
}).catch(e => {
  console.log('DB CONNECTION ISSUES!!', e);
});
