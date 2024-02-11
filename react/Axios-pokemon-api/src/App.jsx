import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [arr, setArr] = useState([]);



  const getPokemon = () => {

    axios.get('https://pokeapi.co/api/v2/pokemon').then(response => {
      setArr(response.data.results);
      console.log(response.data.results);
    })
  }


  return (
    <>
      <button onClick={() => getPokemon()}>
        click me!
      </button>

      <ul>
        {arr.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>




    </>
  )
}

export default App
