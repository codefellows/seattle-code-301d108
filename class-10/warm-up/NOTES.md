# Overview of the warm-up challenge

> Break students out into groups of 2-4 for 10 minutes. After regrouping, lead a 5-minute discussion related to their findings, questions answers, and solutions.

ChatGPT will give you something like the code below, given a proper prompt.

Things you hope the students will discover:

1. Extract out the handlers as defined functions
2. Potentially create an "items" class to store/retrieve the items
3. This class can be in a separate file
4. This allows you to change it's implementation without changing the server

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// In-memory list of items
const items = [];

// GET route to list items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST route to add an item
app.post('/items', (req, res) => {
  const newItem = req.body.name;
  if (newItem) {
    items.push(newItem);
    res.status(201).json({message: 'Item added successfully', newItem});
  } else {
    res.status(400).json({message: 'Bad request. Please provide a valid item name.'});
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```
