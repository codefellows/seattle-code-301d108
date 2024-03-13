'use strict';

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Books = require('./model/books.js');

dotenv.config();

const PORT = process.env.PORT || 3001;
const DATABASE_URL=process.env.DATABASE_URL;

const app = express();
app.use(cors());

// tells express to expect json data attached to our request objects.
app.use(express.json());

// route for handling POST request to '/books'
app.get('/books', async(request,response)=>{
  // READ from the books model
  let documents = await Books.find(); // should return every model instance in the Data Base
  response.send(documents); // sends the retrieved docuemnts as a http response
});

// CREATE!! a books object by defining a route for handling POST requests
app.post('/books', async(request, response)=>{
  let json = request.body;
  console.log('Books values', json);
  let newBooks = await Books.create(json);
  response.send(newBooks);
});

// DELETE!! a books object by id
app.delete('/books/:id', async(request, response)=>{
  let id = request.params.id; // Retrieves the ID of the book to delete from the request parameters.
  console.log('Books ID to Remove', id); // logs id of the book to deleete to console
  let result = await Books.findByIdAndDelete(id); //deletes book with spec id
  if(result){
    response.status(204).send('OK');
  }else{
    response.status(400);
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
