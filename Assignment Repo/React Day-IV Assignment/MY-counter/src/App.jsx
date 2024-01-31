import { useState } from 'react'
import './App.css'
import './Component/Counter'
import Counter from './Component/Counter'
function App(){
  return(<>
  <Counter style ={{backgroundColor:"blue", color:"white",margin:"5px"}}/>
  </>)
}

export default App
