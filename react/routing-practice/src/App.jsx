import './App.css'
import { Route, Routes } from 'react-router-dom'
import Display from './assets/components/Display'
import Home from './assets/components/Home'
import StyledString from './assets/components/StyledString'
function App() {
  return (
    <>
      <h1>Routing Practice</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:str" element={<Display />} />
        <Route path="/:text/:textColor/:backColor" element={<StyledString />} />
      </Routes>
    </>
  )
}
export default App
