const Games = (props) => {
  return (
    <div class="game">
      <img src={props.image} alt="game pics"></img>
      <h3>Title: {props.title}</h3>
      <h3>Year: {props.year}</h3>
      <h3>Genre: {props.genre}</h3>
      <h3>
        Creator: {props.gender}/{props.firstname}/{props.lastname}
      </h3>
      <h3>Home: {props.homenumber}</h3>
      <h3>Personal: {props.personalnumber}</h3>

      <h3>Age: {props.age}</h3>
    </div>
  )
}
export default Games
