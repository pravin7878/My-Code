import { useEffect, useState } from 'react'
import "./Component/PostItem"
import './App.css'
import PostItem from './Component/PostItem';

function App() {
  const [post,setpost] = useState([]);
  const [loading,isloading] = useState(false);
  const [error,Iserror] = useState(false)
  const [firstpage,setfirstpage] = useState(0)
  const [lastpage,setlastpage] = useState(6)
  const [currantpage,setcurrantpage] = useState(1)
  // const [startInd,setstartInd] = useState()
  // const [EndInd,setEndInd] = useState()
  
  
  

  

  // console.log(post.slice(startInd,EndInd));

  const getdata = async()=>{
    try {
      isloading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=21');
          const fineldata = await res.json();
      setpost(fineldata)
      // console.log(fineldata);
    } 
    catch (error) {
      Iserror(true)
      console.log(error);
    }
   


  }
  // getdata()
  useEffect(()=>{
    getdata()
  },[])

  function hendelprev(){
    
if(firstpage==0){
  const currntpagenum = firstpage-0
  setfirstpage(currntpagenum)
  
}

if(lastpage==6){
  
  const lastpagenum = lastpage-0
  setlastpage(lastpagenum)
}

else{
  const currntpagenum = firstpage-6
  const lastpagenum = lastpage-6
setfirstpage(currntpagenum)
setlastpage(lastpagenum)
setcurrantpage((prev)=>prev-1)
}
    
  }

  function hendelnext(){
    
    if(lastpage>=post.length){
      const currntpagenum = 0
      const lastpagenum = 6
      setfirstpage(currntpagenum)
      setlastpage(lastpagenum)
  setcurrantpage((prev)=>prev-3)

    }
    else{
      const lastpagenum = lastpage+6
      const currntpagenum = firstpage+6
      setfirstpage(currntpagenum)
  setlastpage(lastpagenum)
  setcurrantpage((prev)=>prev+1)
    }
  }

  const currntpagedata  = post.slice(firstpage,lastpage)

 return(
  <>
  <h1>Fetch User Data With Use Effect</h1>
  
  {loading ? 
  <div><PostItem data = {currntpagedata} /></div>
     :
     <h1>Data is Loading</h1>}

     {error ? <h1>Somthing went Rong</h1> : null}

     <div className='pagenationBtn'>
      <button onClick={hendelprev} >Previous</button>
      <p>{currantpage}</p>
     <button onClick={hendelnext} >Next</button>
     </div>
  </>
 )
   
}

export default App
