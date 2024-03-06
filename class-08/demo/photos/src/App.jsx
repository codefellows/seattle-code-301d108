import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleInput = (event) => {
    let searchInput = event.target.value;
    setSearch(searchInput);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await axios.get('http://localhost:3000/photos?search=' + search);
    setPhotos(response.data.results);
  }

  return (
    <>
      <header>
        <h1>Search for Photos!</h1>
      </header>
      <main>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Enter a search term</Form.Label>
            <Form.Control type="text" placeholder="type here" onChange={handleInput} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {photos.length
          ? photos.map((photo, idx) => (
              <Card key={idx}>
                <Card.Title>{photo.slug}</Card.Title>
                <Card.Img src={photo.urls.thumb}/>
              </Card>
            ))
          : <p>Please search for something</p>
        }
      </main>
    </>
  )
}

export default App
