import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonList from './components/PokemonList';
import PokemonForm from './components/PokemonForm';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <h1>My Pokedex</h1>  
        {/* <Link to='/form'>Form</Link> */}
        {/* <Link to='/'>Home</Link> */}
      </header>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PokemonList />}/>
          <Route path='/form' element={<PokemonForm />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <p>Made By Code 301d108</p>
      </footer>
    </>
  )
}

export default App
