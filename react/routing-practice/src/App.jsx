import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Display from './assets/components/Display'
import Home from './assets/components/Home'
import Word from './assets/components/Word'


function App() {



  return (
    <>
      <h1>Routing Practice</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:str" element={<Display />} />
        <Route path="/:text/:textColor/:backColor" element={<Word />} />
      </Routes>
    </>
  )
}

export default App
