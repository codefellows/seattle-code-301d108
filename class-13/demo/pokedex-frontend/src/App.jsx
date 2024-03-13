import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonList from './components/PokemonList';
import PokemonForm from './components/PokemonForm';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  let [pokemonId, setPokemonId] = useState(null);
  
  return (
    <>
      <BrowserRouter>
        <header>
          <h1>My Pokedex</h1>
          <Link to='/form'>Create Form</Link>
          <Link to='/'>Home Page</Link>
        </header>
        <Routes>
          <Route exact path='/' element={<PokemonList setPokemonId={setPokemonId} />}/>
          <Route path='/form' element={<PokemonForm pokemonId={pokemonId} />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <p>Made By Code 301d108</p>
      </footer>
    </>
  )
}

export default App
