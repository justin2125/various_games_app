import './App.css'
import Games from './components/Games'
import Genre from './components/Genre'
import React, { useState } from 'react'
import games from './games.json'
import Nav from './components/Nav'
import Register from './components/Register'
import Login from './components/Login'
const App = (props) => {
  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (forName) => {
    setCurrentForm(forName)
  }
  return (
    <div className="App">
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
      <Nav />
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
