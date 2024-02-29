import { useState } from 'react';
import { ListGroup, Form } from 'react-bootstrap';

function Pokedex({ list }) {
  let [search, setSearch] = useState('');
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const displayList = () => {
    return list.filter(pokemon => {
      if (!search) {
        return true;
      }
      if (pokemon.name.includes(search)) {
        return true
      } else {
        return false;
      }
    });
  }
  console.log('HERE IS THE SEARCH KEY', search);
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="search">Search for a Pokemon!</Form.Label>
          <Form.Control onChange={handleChange} name="search" type="text" />
        </Form.Group>
      </Form>
      <ListGroup>
        {displayList().map((pokemon, idx) => <ListGroup.Item key={idx}>{pokemon.name}</ListGroup.Item>)}
      </ListGroup>
    </>
  )
}

export default Pokedex;
