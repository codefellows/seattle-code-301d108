import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Pokemon({ name, imageUrl }) {

  const [likes, setLikes] = useState(0);

  return (
    <>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <Button onClick={() => {
        setLikes(likes + 1)
      }}>{"<3"}</Button>
      <p>Current Likes for {name} : {likes}</p>
    </>
  )
}

export default Pokemon;