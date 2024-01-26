import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function handelClick(){
  setCount(count+1)
}

function hendelReset(){
  setCount(count-count)
}
  return (
    <>
    <h1>{count}</h1>
      <button onClick = {handelClick}>Increment</button>
      <button onClick = {hendelReset}>Reset</button>
      
    </>
  )
}

export default App
