# Warm-Up Exercise

Asynchronous code with Promises, Async, and Await

Consider the following JavaScript Promise

```javascript

function getPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(results => {
      results.json()
        .then(data => {
          console.log(data.abilities);
        })
        .catch(error => {
          console.error("Data Error: " + error.message)
        })
    })
    .catch(error => {
      console.error("Fetch occured: " + error.mesage);
    })
}
```

## Answer a few questions

1. What is the expected output when running getPokemon()?
2. What does getPokemon() return?
3. What would the expected output be if you changed the url to `https://pokeapi.co/api/v2/pokemon/johnsmith`?
4. What would the expected output be if you changed the url to `https://www.google.com`?

## Exercise: Convert this to an `async` function
