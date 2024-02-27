import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button } from 'react-bootstrap';
import Pokemon from './Pokemon.jsx';
import data from './assets/data.json';

function App() {
  
  console.log("HERE IS OUR JSON DATA", data);
  const pokemonNames = ["Eevee", "Mew", "Espeon"];
  const pokemonImages = ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png"];

  let [state, setState] = useState(0);
  console.log('HERE IS APP STATE!', state);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button onClick={() => {
        setState(state+ 1)
      }}>+</Button>
      <p>Current count :{state}</p>
      <Button onClick={() => {
        setState(state - 1)
      }}>-</Button>
      <Accordion defaultActiveKey="0">
      {data.map((hornedBeast, index) => {
        return <Accordion.Item key={index} eventKey={index}>
          <Accordion.Header>
            {hornedBeast.title}
          </Accordion.Header>
          <Accordion.Body>
            <Pokemon name={hornedBeast.title} imageUrl={hornedBeast.image_url}/>
          </Accordion.Body>
        </Accordion.Item>
      })}
      </Accordion>
    </>
  )
}

export default App
