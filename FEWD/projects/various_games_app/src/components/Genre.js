import './Genre.css'
const Genre = (props) => {
  // let colorVariable
  // // console.log(props.genre)
  // switch (props.title) {
  //   case 'something':
  //     colorVariable = '2CDFE7'
  //     break
  //   default:
  //     colorVariable = 'E237DF'
  // }

  return (
    <div>
      <p className="genre" style={{ color: 'white' }}>
        {props.title}
      </p>
    </div>
  )
}
export default Genre
