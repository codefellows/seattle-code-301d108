import { useState } from 'react';
import { Card } from 'react-bootstrap';

function HornedBeast(props) {
    const [likes, setLikes] = useState(0);
    return (
        <Card>
            <Card.Img style={{width:"50%"}} onClick={() => setLikes(likes + 1)} src={props.imageUrl} alt="" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text> {props.description} </Card.Text>
                <Card.Text> Favorites: {likes} </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default HornedBeast;