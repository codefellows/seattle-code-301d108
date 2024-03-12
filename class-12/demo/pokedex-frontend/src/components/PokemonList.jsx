import { useState, useEffect } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  // functions from React, allows us to run code before HTML is rendered to the DOM
  useEffect(() => {
    console.log("this will run before my app render");
    // you can set state here! without triggering an infinite re-render.
    axios.get(SERVER_URL + '/pokemon')
      .then(response => setPokemon(response.data));
  }, []);
  
  // delete
  const handleDelete = async (id) => {
    await axios.delete(SERVER_URL + `/pokemon/${id}`);
  }

  return (
    <>
    { pokemon.length
        ? pokemon.map((values, idx) =>
          <div key={idx}>
            <p>Name: {values.name}</p>
            <p>Type: {values.type}</p>
            <Button onClick={() => handleDelete(values._id)}>X</Button>
          </div>
        )
        : <p>No Pokemon :(</p>
    } 
    </>
  )
}

export default PokemonList;
