import { useState } from 'react'
import './App.css'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    // when talking to another computer we must wait for that computer to finish.
    let response = await axios.get('http://localhost:3000/pokemon');
    setPokemon(response.data);
  }
  const fetchOne = async(name) => {
    let response = await axios.get('http://localhost:3000/pokemon/' + name);
    console.log(response.data);
    setPokemon(response.data);
  }

  return (
    <>
      <header>
        <h1>My Pokedex</h1>
        <Button onClick={fetchPokemon}>Fetch Pokemon!</Button>
        <Button onClick={() => fetchOne('Mew')}>Fetch Mew!</Button>
      </header>
      {pokemon.length 
        ? pokemon.map((values, idx) => (
        <Card key={idx}>
          <Card.Title>{values.name}</Card.Title>
          <Card.Body>
            <Card.Text>type: {values.type}</Card.Text>
            <Card.Text>hp: {values.hp}</Card.Text>
          </Card.Body>
        </Card>
      ))
          : <Card>
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Body>
              <Card.Text>type: {pokemon.type}</Card.Text>
              <Card.Text>hp: {pokemon.hp}</Card.Text>
            </Card.Body>
          </Card>
      }
    </>
  )
}

export default App
