import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import UserTable from './Components/UserTable'
import Blog from './Components/Blog'
import { Route, Routes } from 'react-router-dom'
import Listmap from './Components/Listmap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
  <Routes>
  <Route path='/u' element={<UserTable/>}/>
      <Route path='/b' element={<Blog/>}/>
      <Route path='/l' element={<Listmap/>}/>
      
    
    </Routes>
    </>
  )
}

export default App
