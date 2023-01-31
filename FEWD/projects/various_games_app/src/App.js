import './App.css'
import Games from './components/Games'
import Genre from './components/Genre'
import gameArray from './games.json'

const App = (props) => {
  console.log(gameArray.title)
  return (
    <div>
      {gameArray.map((game) => (
        <div>
          <Games
            key={game.phone.personal}
            title={game.title}
            year={game.year}
            genre={game.genre}
            creator={game.creator}
            age={game.age}
          />
        </div>
      ))}
    </div>
  )
}

export default App
