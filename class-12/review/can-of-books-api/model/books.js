'use strict';

const mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});

module.exports = mongoose.model('books', bookSchema);
