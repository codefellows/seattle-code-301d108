import { useState } from 'react'
import axios from 'axios';
import './App.css'

// credentials for locationIQ
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [responseData, setResponseData] = useState({});
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  const handleInput = (event) => {
    let value = event.target.value;
    setCity(value);
  }
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!city.trim()) {
    setError('Please enter a valid city name.');
    setResponseData({}); 
  } else {
    setError(null);
    await getLocation(city);
  }
  };
  
  const getLocation = async (city) => {
    try {
      let response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${city}&format=json`);
      console.log(response);
      setResponseData(response.data[0]);
    } catch (e) {
      setError('Not able to get location, please double check your city name.');
      console.log('Not able to get location', e);
    }
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
            Explore!
          </button>
        </form>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      </header>
      <div className="card">
        {responseData.display_name
          ? (
            <ol>
              <p>{responseData.display_name}</p>
              <img src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=9`} alt="Location Map"/>
            </ol>
          )
          : <p>Please Click the button</p>
        }
        <button onClick={() => handleNext(responseData?.next)}>Next</button>
      </div>
    </>
  );
}

export default App
