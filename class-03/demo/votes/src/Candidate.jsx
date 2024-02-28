import { useState } from 'react';
import { Card, Button } from 'react-bootstrap'


function Candidate({ name, onWin }) {
  let [votes, setVotes] = useState(0);

  const handleVote = () => {
    if (votes < 10) {
      if (votes === 9) {
        onWin(name);
      }
      setVotes(votes + 1);
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button onClick={handleVote}>vote for {name}</Button>
        <Card.Text>{votes}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Candidate;
