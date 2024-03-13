'use strict';

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./model/books.js');
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL)
  .then(() => {
    let zeroToOne = new Book({ title: 'Zero to One', description: 'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters. It is a condensed and updated version of a highly popular set of online notes taken by Masters for the CS183 class on startups, as taught by Thiel at Stanford University in Spring 2012.', status: 'Available'});
    let humanCompatible = new Book({ title: 'Human Compatible: Artificial Intelligence and the Problem of Control', description: 'Human Compatible: Artificial Intelligence and the Problem of Control is a 2019 non-fiction book by computer scientist Stuart J. Russell. It asserts that the risk to humanity from advanced artificial intelligence (AI) is a serious concern despite the uncertainty surrounding future progress in AI. It also proposes an approach to the AI control problem.', status: 'Available'});
    let theFourthAge = new Book({ title: 'The Fourth Age', description: 'In The Fourth Age, Byron Reese makes the case that technology has reshaped humanity just three times in history: 100,000 years ago, we harnessed fire, which led to language; 10,000 years ago, we developed agriculture, which led to cities and warfare; 5,000 years ago, we invented the wheel and writing, which lead to the nation state.', status: 'Available'});
    zeroToOne.save();
    humanCompatible.save();
    theFourthAge.save();
  }).catch(e => console.error(e));
