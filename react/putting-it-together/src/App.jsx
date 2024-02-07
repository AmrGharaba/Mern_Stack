import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './assets/components/PersonCard'


function App() {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      <div className="App">

        <PersonCard firstName="Jane" lastName="Doe" age="45" hairColor="Black" ></PersonCard>
        <PersonCard firstName="John" lastName="Smith" age="88" hairColor="Brown" ></PersonCard>
        <PersonCard firstName="Millard" lastName="Fillmore" age="50" hairColor="Brown" ></PersonCard>
        <PersonCard firstName="Maria" lastName="Smith" age="62" hairColor="Brown" ></PersonCard>
      </div>

    </>
  )
}



export default App



{/* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}