# Overview of the warm-up challenge

> Break students out into groups of 2-4 for 10 minutes. After regrouping, lead a 5-minute discussion related to their findings, questions answers, and solutions.

## Questions

1. Logs an object showing Pokemon's abilities
2. A promise object
3. Data Error
4. Fetch Error

## Exercise: Convert this to an `async` function

Note, we have a single catch here. You could nest the try/catch blocks.

```javascript

async function getPokemon() {
  try {
    const results = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = results.json();
    console.log(data.abilities);
  } catch (error) {
    console.error("Error: " + error.mesage);
  }
}
```
