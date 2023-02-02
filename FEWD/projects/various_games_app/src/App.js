import './App.css'
import Games from './components/Games'
import Genre from './components/Genre'
import games from './games.json'

const App = (props) => {
  console.log(games.title)
  return (
    <div>
      {games.map((game, index) => (
        <div>
          <Games
            key={game.phone.personal}
            title={game.title}
            year={game.year}
            genre={game.genre}
            creator={game.creator}
            age={game.age}
            image={game.img}
          />
        </div>
      ))}
    </div>
  )
}

export default App
