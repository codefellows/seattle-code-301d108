import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Card } from 'react-bootstrap'
import axios from 'axios'

function App() {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState(null);

  const handleCity = (event) => {
    setCity(event.target.value);
  }
  const handleQuery = (event) => {
    setQuery(event.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await axios.get(`http://localhost:3000/chat?city=${city}&ask=${query}`)
    console.log(response);
    setAiResponse(response.data);
  }

  return (
    <>
      <header>
        <h1>Ask AI!</h1>
      </header>    
      <main>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Enter a City</Form.Label>
            <Form.Control onChange={handleCity} type="text" placeholder="Timbuktu" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter a Query</Form.Label>
            <Form.Control onChange={handleQuery} type="text" placeholder="What's poppin?" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        {
          aiResponse
          ? <Card>
            <Card.Title>Ai Says</Card.Title>
            <Card.Text>{aiResponse}</Card.Text>
          </Card>
          : <p>Please enter a query!</p>
        } 
      </main>
    </>
  )
}

export default App
