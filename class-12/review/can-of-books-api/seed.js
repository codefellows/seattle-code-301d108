'use strict';

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./model/books.js');
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL)
  .then(() => {
    let artOfWar = new Book({ title: 'The Art of War', description: 'An ancient Chinese military treatise that explores strategies and tactics for warfare, often applied metaphorically to business and leadership.', status: 'Available'});
    let thinkGrowRich = new Book({ title: 'Think and Grow Rich', description: 'A personal development and self-help book that outlines principles for achieving success and wealth through mindset, visualization, and persistence.', status: 'Available'});
    let richDadPoorDad = new Book({ title: 'Rich Dad Poor Dad', description: 'A personal finance classic that contrasts the financial philosophies of the authors rich dad and poor dad, offering insights into wealth-building strategies and financial literacy.', status: 'Available'});
    artOfWar.save();
    thinkGrowRich.save();
    richDadPoorDad.save();
    console.log(`
      Books create!!!
      ${artOfWar} ::
      ${thinkGrowRich} ::
      ${richDadPoorDad} ::  
    `);
  }).catch(e => console.error(e));
