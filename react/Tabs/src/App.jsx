import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tabs from './assets/Components/Tabs'


const App = () => {
  // const [tabArr, setTabArr] = useState([]);
  return (
    <>
      <Tabs tabArr={["pearl onions", "thyme", "cremini mushrooms", "butter"]} />
    </>

  );
}
export default App
