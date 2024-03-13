import { useState, useEffect } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function PokemonList({setPokemonId}) {
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
            <p>AP: {values.attack}</p>
            <p>HP: {values.health}</p>
            <Button onClick={() => handleDelete(values._id)}>X</Button>
            <Button onClick={() => setPokemonId(values._id)}>
              <Link style={{ color: 'white' }} to={`/form`}>Update {values.name}</Link>
            </Button>
          </div>
        )
        : <p>No Pokemon :(</p>
    } 
    </>
  )
}

export default PokemonList;
