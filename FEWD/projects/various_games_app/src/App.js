import './App.css'
import Games from './components/Games'
import Genre from './components/Genre'
import games from './games.json'

const App = (props) => {
  return (
    <div>
      {games.map((game, index) => (
        <div>
          <Games
            key={game.phone.personal}
            title={game.title}
            year={game.year}
            genre={game.genre}
            gender={game.creater.gender}
            firstname={game.creater.firstname}
            lastname={game.creater.lastname}
            age={game.age}
            homenumber={game.phone.home}
            personalnumber={game.phone.personal}
            image={game.img}
          />

          <Genre genre={game.genre} title={game.title} />
        </div>
      ))}
    </div>
  )
}

export default App
