import { useState } from 'react'
import './App.css'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokedex from './Pokedex.jsx';
import DropForm from './DropForm.jsx';

function App() {

  const [pokedex, setPokedex] = useState([]);

  class Pokemon {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let { name, type } = event.target;
    setPokedex([...pokedex, new Pokemon(name.value, type.value)]);
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control name="name" type="text"/>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="type">Type</Form.Label>
          <Form.Control name="type" type="text" />
        </Form.Group>
        <Button type="submit">Submit Me!</Button>
      </Form>
      <Pokedex list={pokedex} />
      <DropForm />
    </>
  )
}

export default App
