
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './assets/components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <PersonCard firstName="Jane" lastName="Doe" Age="45" hairColor="Black" ></PersonCard>
        <PersonCard firstName="John" lastName="Smith" Age="88" hairColor="Brown" ></PersonCard>
        <PersonCard firstName="Millard" lastName="Fillmore" Age="50" hairColor="Brown" ></PersonCard>
        <PersonCard firstName="Maria" lastName="Smith" Age="62" hairColor="Brown" ></PersonCard>





      </div>

    </>
  )
}

export default App
