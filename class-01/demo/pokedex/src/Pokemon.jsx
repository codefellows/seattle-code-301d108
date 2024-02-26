// Recieves 2 props, name, type
function Pokemon(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.type}</p>
    </>
  )
}

export default Pokemon;
