'use strict';

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');
dotenv.config();

const PORT = process.env.PORT;
const API_KEY = process.env.OPENAI_API_KEY;

const app = express();
app.use(cors());

const openai = new OpenAI({
  apiKey: API_KEY
});

const askAi = async (city, query) => {
  return await openai.chat.completions.create({
    messages: [
      {role: 'system', content: `You are a helpful assistant for a travel app, answer in a way that mentions anything notable about ${city} please.`},
      { role: 'user', content: query }
    ],
    model: "gpt-3.5-turbo",
  })
}

// key value pair list of city:query -> aiResponse 
const cache = {}

app.get('/chat', async (request, response) => {
  try {
    let { city, ask } = request.query;
    let key = `${city.toLowerCase().trim()}:${ask.toLowerCase().trim()}`
    let payload = null;
    console.log('REQUEST VALUES', city, ask);
    if (cache[key]) {
      console.log('cache hit!', cache);
      payload = cache[key].content;
    } else {
      console.log('cache miss!');
      let aiResponse = await askAi(city, ask);
      let content = aiResponse.choices[0].message.content
      payload = content;
      cache[key] = {
        content,
        timestamp: Date.now()
      }
    }

    // prompt the ai;
    response.send(payload);
  } catch (e) {
    response.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log('Server is listening on port ::', PORT);
});