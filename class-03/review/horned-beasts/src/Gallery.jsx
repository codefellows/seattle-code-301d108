
import HornedBeast from "./HornedBeast";
import beastData from "./assets/data.json"
import { Container, Row } from 'react-bootstrap';

function Gallery() {
  return (
    <>
      <Container>
        <Row xs={2} sm={3} md={4} lg={5}>
            {beastData.map(obj => {
              return (
                <HornedBeast 
                key={obj._id}
                title={obj.title} 
                description={obj.description} 
                imageUrl={obj.image_url} />  
              )
            })}
        </Row>
      </Container>
    </>
  );
}

export default Gallery