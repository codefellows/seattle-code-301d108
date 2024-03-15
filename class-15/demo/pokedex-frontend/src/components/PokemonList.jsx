import { useState, useEffect } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function PokemonList({ setPokemonId }) {
  const [pokemon, setPokemon] = useState([]);

  let { getIdTokenClaims, isAuthenticated, user } = useAuth0();
  
  const fetchToken = async () => {
    let response = await getIdTokenClaims();
    return response.__raw;
  } 

  // functions from React, allows us to run code before HTML is rendered to the DOM
  useEffect(() => {
    console.log("this will run before my app render");
    if (isAuthenticated) {
      console.log('THIS IS THE CURRENT USER', user);
      // you can set state here! without triggering an infinite re-render.
      fetchToken()
        .then(token => {
          console.log('TOKEN FROM AUTH0', token);
          axios.get(SERVER_URL + '/pokemon', { headers: { "Authorization": `Bearer ${token}` }})
            .then(response => setPokemon(response.data));
        });
    } else {
      console.log('User not authenticated');
    }
  }, [isAuthenticated]);
  
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
