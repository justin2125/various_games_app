import './App.css'
import Games from './components/Games'
import Genre from './components/Genre'
import games from './games.json'
import Navbar from './components/Nav'

const App = (props) => {
  return (
    <div className="App">
      <Navbar />
      {games.map((game, index) => (
        <div>
          <Genre genre={game.genre} title={game.title} />
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
        </div>
      ))}
    </div>
  )
}
// nav bar can be a component

export default App
