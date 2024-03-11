import { useState, useEffect } from 'react'
import './App.css'
import axios  from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([])

  // functions from React, allows us to run code before HTML is rendered to the DOM
  useEffect(() => {
    console.log("this will run before my app render");
    // you can set state here! without triggering an infinite re-render.
    axios.get('http://localhost:3000/pokemon')
    .then(response => setPokemon(response.data));
  }, []);

  return (
    <>
      <header>
        <h1>My Pokedex</h1>  
      </header>
      {pokemon.length
        ? pokemon.map((values, idx) =>
            <div key={idx}>
              <p>Name: {values.name}</p>
              <p>Type: {values.type}</p>
            </div>
          )
        : <p>No Pokemon :(</p>
      } 
    </>
  )
}

export default App
