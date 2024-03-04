import { useState } from 'react'
import axios from 'axios';
import './App.css'

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [responseData, setResponseData] = useState({});
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  const handleInput = (event) => {
    let value = event.target.value;
    setCity(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getLocation(city);
  }
  const getLocation = async (city) => {
    let response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${city}&format=json`);
    console.log(response);
    setResponseData(response.data[0]);
  }

  const getPokemon = async () => {
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    setResponseData(response.data);
  }
  const handleNext = async (url) => {
    let response = await axios.get(url);
    setResponseData(response.data);
  }

  console.log(responseData);
  return (
    <>
      <header>
        <h1>Geolocation</h1>
        <form>
          <input type="text" placeholder="Enter a city name" onChange={handleInput} />
          <button onClick={handleSubmit}>
            Search
          </button>
        </form>
      </header>
      <div className="card">
        {responseData.display_name
        ? <ol>
            <p>{responseData.display_name}</p>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=9`}/>
          </ol>
        : <p>Please Click the button</p>
        }
        <button onClick={() => handleNext(responseData?.next)}>Next</button>
      </div>
    </>
  )
}

export default App
