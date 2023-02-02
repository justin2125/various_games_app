const Genre = (props) => {
  let colorVariable
  // console.log(props.genre)
  switch (props.title) {
    case 'something':
      colorVariable = '2CDFE7'
      break
    default:
      colorVariable = 'E237DF'
  }

  return (
    <div>
      <p style={{ backgroundColor: 'pink' }}>{props.genre}</p>
      <p style={{ backgroundColor: colorVariable, color: '52E922' }}>
        {props.title}
      </p>
    </div>
  )
}
export default Genre
