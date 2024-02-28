import { useState } from 'react'
import Candidate from './Candidate.jsx';
import './App.css'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [show, setShow] = useState(false);
  let [winner, setWinner] = useState(null);

  const onWin = (candidate) => {
    setWinner(candidate);
    setShow(true);
  }

  const closeModal = () => {
    setShow(false);
  }
  
  return (
    <>
      <header>
        <h1>Voting App!!</h1>
      </header>
      <div id="candidates">
        <Candidate onWin={onWin} name="Jacob"/>
        <Candidate onWin={onWin} name="Brook" />
        <Candidate onWin={onWin} name="JB" />
      </div>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Winner!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {winner}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default App
