
import HornedBeast from "./HornedBeast";

import { Container, Row } from 'react-bootstrap';

function Gallery(props) {
  return (
    <Container>
      <Row xs={2} sm={3} md={4} lg={5}>
          {props.beastData.map(obj => {
            return (
              <HornedBeast 
              key={obj._id}
              hb_object={obj} 
              onClick={props.onClick}/>  
            )
          })}
      </Row>
    </Container>
  );
}

export default Gallery