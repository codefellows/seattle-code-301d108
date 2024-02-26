import Pokemon from '../../Pokemon.jsx'
import './pokedex.css'

function Pokedex() {
  return (
    <div id="pokedex">
      <Pokemon name="Pikachu" type="electric" />
      <Pokemon name="Bulbasuar" type="grass" />
    </div>
  )
}

export default Pokedex;
