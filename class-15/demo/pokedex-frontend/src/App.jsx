import { useState, useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonList from './components/PokemonList';
import PokemonForm from './components/PokemonForm';
import AuthButtons from './components/auth/AuthButtons';
import Button from 'react-bootstrap/Button'
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  let [pokemonId, setPokemonId] = useState(null);

  let { isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
   console.log('LOADING FROM AUTH0', isLoading);
  });

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>My Pokedex</h1>
          <Button style={{color: 'white'}}>
            <Link to='/form'>Create Form</Link>
          </Button>
          <Button style={{ color: 'white' }}>
            <Link to='/'>Home Page</Link>
          </Button>
          <AuthButtons />
        </header>
        <Routes>
          <Route exact path='/' element={!isAuthenticated ? <p>Welcome!  Please Log In!</p> : <PokemonList setPokemonId={setPokemonId} />}/>
          <Route path='/form' element={<PokemonForm pokemonId={pokemonId} />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <p>Made By Code 301d108</p>
      </footer>
    </>
  )
}

export default App
