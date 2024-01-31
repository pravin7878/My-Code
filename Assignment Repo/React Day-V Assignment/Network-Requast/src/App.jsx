import { useEffect, useState } from 'react'
import "./Component/PostItem"
import './App.css'
import PostItem from './Component/PostItem';

function App() {
  const [post,setpost] = useState([]);
  const [loading,isloading] = useState(false);
  const [error,Iserror] = useState(false)
  const [startInd,setstartInd] = useState()
  const [EndInd,setEndInd] = useState()
  
  
  

  

  // console.log(post.slice(startInd,EndInd));

  const getdata = async()=>{
    try {
      isloading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
          const fineldata = await res.json()
      setpost(fineldata)
    } 
    catch (error) {
      Iserror(true)
    }
   


  }
 
  useEffect(()=>{
    getdata()
  },[])

  function hendelprev(){
    setstartInd(2)
    setEndInd(5)
  }

  function hendelnext(){
  
  }

 return(
  <>
  <h1>Fetch User Data With Use Effect</h1>
  
  {loading ? 
  <div><PostItem data = {post} /></div>
     :
     <h1>Data is Loading</h1>}

     {error ? <h1>Somthing went Rong</h1> : null}

     <div>
      <button onClick={hendelprev} >Previous</button>
     <button onClick={hendelnext} >Next</button>
     </div>
  </>
 )
   
}

export default App
