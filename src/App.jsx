import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Edu from "./pages/edu/Edu"
import Math from "./pages/math/Math"

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/edu' element={<Edu/>} />
      <ROute path='/math' element={<Math/>}/>
    </Routes>
      
    </>
  )
}

export default App
