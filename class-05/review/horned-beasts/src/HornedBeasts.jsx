import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const HornedBeasts = (props) => {
  console.log(props);
    const [likes, setLikes] = useState(0);
  
    const handleLike = () => {
      if (likes < 10) {
        if (likes === 9) {
          props.onWin(props.imageUrl, props.title, props.description, likes + 1);
        }
        setLikes(likes + 1);
      }
    }
    
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img onClick={props.openModal} variant="top" src={props.imageUrl} alt="horned beast image" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <p>Number of Horns: {props.horns}</p>
            <Button onClick= {(handleLike)} variant="primary">💖 Like</Button>
            <span style={{ marginLeft: "10px"}}>{likes} Likes</span>
          </Card.Body>
        </Card>
      );
    }
  

export default HornedBeasts;