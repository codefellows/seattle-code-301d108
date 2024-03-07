import { useState } from 'react'
import axios from 'axios';
import { Container, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [responseData, setResponseData] = useState({});
  const [weatherResponseData, setWeatherResponseData] = useState({});
  const [movieResponseData, setMovieResponseData] = useState({});
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
    try {
      let cityResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${city}&format=json`);
      console.log(cityResponse.data);
      let weatherResponse = await axios.get(`http://localhost:3000/weather/${cityResponse.data[0].lat}_${cityResponse.data[0].lon}`);
      getMovies(city);
      setResponseData(cityResponse.data[0]);
      setWeatherResponseData(weatherResponse);
      setError(null);
    } catch (error) {
      setError('Input invalid! Please check your city input.');
    }
  }

  const getMovies = async (city) => {
    try {
      // how do we send something to another computer???
      let movieResponse = await axios.get(`http://localhost:3000/movies/${city}`);
      console.log('MOVIE RESPONSE OBJECT', movieResponse);
      setMovieResponseData(movieResponse.data);
    } catch (e) {
      console.error('Couldnt fetch movie data :(');
    }
  }

  console.log('MOVIE VALUES IN STATE', movieResponseData);
  return (
    <>
      <Container>
        <header className="mt-5 mb-4">
          <h1>Search For a City</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="citySearch">
              <Form.Control type="text" placeholder="Enter a city name" onChange={handleInput} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </header>
        {error ? <p>{error}</p> : <br/>}
        <Card className="mt-3">
          <Card.Body>
            {responseData.display_name
            ? (
              <>
                <Card.Title>{responseData.display_name}</Card.Title>
                <Card.Text>
                  Latitude: {responseData.lat} / Longitude: {responseData.lon}
                </Card.Text>
                <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=9`} />
                {console.log(weatherResponseData)};
                {weatherResponseData.data?.map((weather, id) => {
                  return(
                  <div key={id}>
                    <p>{weather.date}</p>
                    <p>{weather.description}</p>
                  </div>
                )})}
              
              </>
            )
            : <Card.Text>No results found</Card.Text>
            }
          </Card.Body>
        </Card>
        <Card className="mt-3">
          <Card.Body>
            {movieResponseData.results 
              ? (
                <>
                  {movieResponseData.results?.map((movie, id) => {
                    return (
                      <div key={id}>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                          {movie.overview}
                        </Card.Text>
                      </div>
                    )
                  })}

                </>
              )
              : <Card.Text>No results found</Card.Text>
            }
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default App
