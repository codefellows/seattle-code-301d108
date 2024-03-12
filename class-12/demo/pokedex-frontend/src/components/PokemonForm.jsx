import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Toast from 'react-bootstrap/Toast';
// import ToastContainer from 'react-bootstrap/ToastContainer';
import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function PokemonForm() {
  let [name, setName] = useState('');
  let [type, setType] = useState('');
  let [health, setHealth] = useState('');
  let [attack, setAttack] = useState('');
  let [error, setError] = useState(null);

  // create
  const createPokemon = async (values) => {
    let response = await axios.post(SERVER_URL + '/pokemon', values);
    console.log(response.data);
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
      createPokemon({ name, type, health, attack });
    } catch (e) {
      setError('Error sending request :(');
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add a Pokemon to your pokedex!!</h2>
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