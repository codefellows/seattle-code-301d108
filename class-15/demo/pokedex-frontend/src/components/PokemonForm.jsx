import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Toast from 'react-bootstrap/Toast';
// import ToastContainer from 'react-bootstrap/ToastContainer';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function PokemonForm({ pokemonId }) {
  let [name, setName] = useState('');
  let [type, setType] = useState('');
  let [health, setHealth] = useState('');
  let [attack, setAttack] = useState('');
  let [error, setError] = useState(null);
  let { getIdTokenClaims, user } = useAuth0();

  const fetchToken = async () => {
    let response = await getIdTokenClaims();
    return response.__raw;
  } 

  // update
  const updatePokemon = async(values) => {
    // grab token from Auth0
    let token = await fetchToken();
    let headers = {
      'Authorization': `Bearer ${token}`
    }

    let response = await axios.put(
      SERVER_URL + `/pokemon/${pokemonId}`,
      values,
      { headers }
    );
    console.log(response.data);
  }

  // create
  const createPokemon = async (values) => {
    let token = await fetchToken();
    let headers = {
      'Authorization': `Bearer ${token}`
    }

    let response = await axios.post(
      SERVER_URL + '/pokemon',
      { ...values,  user_id: user.email },
      { headers }
    );
    alert('POKEMON CREATED!', response.data.name, response.data.user_id);
  }
  const handleInput = (e) =>  {
    let { name, value } = e.target;

    switch(name) {
      case 'name':
        setName(value);
        break;
      case 'type':
        setType(value);
        break
      case 'attack':
        setAttack(value);
        break;
      case 'health':
        setHealth(value);
        break;
      default:
        setError('Invalid input value');
    }
  }
  const handleSubmit= (e) => {
    try {
      e.preventDefault();
      if (pokemonId) {
        updatePokemon({ name, type, health, attack });
      } else {
        createPokemon({ name, type, health, attack });
      }
    } catch (e) {
      setError('Error sending request :(');
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>{pokemonId ? 'Update' : 'Add'} a Pokemon to your pokedex!!</h2>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Pokemon Name</Form.Label>
        <Form.Control onChange={handleInput} name="name" id="name" placeholder="Pikachu" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="type">Pokemon Type</Form.Label>
        <Form.Control onChange={handleInput} name="type" id="type" placeholder="electric" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="health">Health Points</Form.Label>
        <Form.Control onChange={handleInput} name="health" id="health" placeholder="100" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="attack">Attack Points</Form.Label>
        <Form.Control onChange={handleInput} name="attack" id="attack" placeholder="50" />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default PokemonForm;