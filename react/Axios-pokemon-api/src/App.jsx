import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = () => {
    axios.get('http://pokeapi.co/api/v5/pokemon')
      .then(response => {
        setPokemons(response.data.results);
        console.log(response);
      })
      .catch(error => console.log(error));
  }

  return (
    <>
      <button onClick={() => getPokemon()}>
        click me!
      </button>
      <ul>
        {pokemons.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
