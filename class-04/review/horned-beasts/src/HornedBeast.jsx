import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function HornedBeast(props) {
    const [likes, setLikes] = useState(0);
    return (
        <Card>
            <Card.Img onClick={() => setLikes(likes + 1)} src={props.hb_object.image_url} alt="" />
            <Card.Body>
                <Card.Title>{props.hb_object.title}</Card.Title>
                {/* <Card.Text> {props.description} </Card.Text> */}
                <Card.Text > Favorites: {likes} </Card.Text>
                <Button onClick={() => props.onClick(props.hb_object)}> Details </Button>
            </Card.Body>
        </Card>
    )
}

export default HornedBeast;