import { useState } from 'react'
import Login from './components/authentication/login'
import './App.css'
import Signup from './components/authentication/sign-up'
import Navbar from './components/navbar/navbar'
import Card from './components/home/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar/>
    <Card/>
    <Login/>
    <Signup/>
    </div>
  )
}

export default App
