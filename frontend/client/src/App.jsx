import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login.jsx'
import Signup from './signup.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <h1 className="main-title">🎵 TuneMate</h1>
      <p className="app-subtitle">Your Music Companion</p>

      <div className="auth-columns">
        <div className="column">
          <Signup />
        </div>
        <div className="column">
          <Login />
        </div>
      </div>
    </div>
  )
}

export default App
