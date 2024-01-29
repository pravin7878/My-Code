import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [post,setpost] = useState([]);
  const [loading,isloading] = useState(false);
  const [error,Iserror] = useState()
  const getdata = async()=>{
    try {
      isloading('Data is Being Loading')
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
          const fineldata = await res.json()
      setpost(fineldata)
      isloading("Data is Loaded")
    } 
    catch (error) {
      Iserror('something went Wrong')
    }
   
useEffect(()=>{
  getdata()
},[])
console.log(post);
  }
 return(
  <>
  <h1>Fetch User Data With Use Effect</h1>
  </>
 )
   
}

export default App
