import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login.jsx'
import Signup from './signup.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div>
      <h1>Authentication App</h1>
      <Signup />
      <hr />
      <Login />
    </div>

  )
}

export default App
