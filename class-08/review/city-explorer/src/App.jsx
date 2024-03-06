import { useState } from 'react'
import axios from 'axios';
import {Container, Row, Card} from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const LOCATION_IQ_API_KEY = import.meta.env.VITE_LOC_IQ_API_KEY;

function App() {
  const [cityResponseData, setCityResponseData] = useState({});
  const [weatherResponseData, setWeatherResponseData] = useState({});
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const handleInput = (event) => {
    let value = event.target.value;
    setCity(value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    getLocation(city);
  }
  const getLocation = async (cityName) => {
    try {
      let cityResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${LOCATION_IQ_API_KEY}&q=${cityName}&format=json`);
      let weatherResponse = await axios.get(`http://localhost:3000/weather/${cityResponse.data[0].lat}_${cityResponse.data[0].lon}`);
      setCityResponseData(cityResponse.data[0]);
      setWeatherResponseData(weatherResponse);
      setError(null)
    } catch(error) {
      console.log(error)
      setError('Unable to get city data. Please check your city input.')
    }
  }


  return (
    <>
      <header>
        <h1>City Geolocator !!</h1>
        <form id='city-input-form'>
          <input id='city-input' type="text" placeholder="Enter a city name" onChange={handleInput} />
          <button onClick={handleSubmit}>
            Explore!
          </button>
        </form>
      </header>
      {error ? <p id='error-display'> {error} </p> : <br/>}
      <div className="display-city">
        {cityResponseData.display_name
        ? <div>
          <div>
            <h3>{cityResponseData.display_name}</h3>
            <p>{`Latitude: ${cityResponseData.lat}, Longitude: ${cityResponseData.lon}`}</p>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${LOCATION_IQ_API_KEY}&center=${cityResponseData.lat},${cityResponseData.lon}&zoom=12`}/>
          </div>
          <div>
            <h3 style={{ padding: '20px' }}> Weather </h3>
            <Container>
              <Row xs={1} sm={2} md={3} lg={3}>
                {weatherResponseData.data.map((day, idx) => {
                  // {console.log(day)}
                  return (
                    <Card key={idx} style={{ padding: '20px' }}>
                      <Card.Body>
                        <Card.Title>{day.date}</Card.Title>
                        <Card.Text>High: {day.high}</Card.Text>
                        <Card.Text>Low: {day.low}</Card.Text>
                        <Card.Text>{day.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  );     
                })}
              </Row>
            </Container>
          </div>
        </div>
        : <p> Please Click the Explore Button </p>
        }
      </div>
    </>
  )
}

export default App;
