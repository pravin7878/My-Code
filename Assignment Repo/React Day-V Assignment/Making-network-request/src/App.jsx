import { useState } from 'react'
// import './DataDisplay'
import './App.css'
import DataDisplay from './Component/DataDisplay'

function App() {
  const [data, setdata] = useState([])
  const [isLoading,Loading] = useState(false)
  const [error,seterror] = useState(null)


const getdata = async ()=>{
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const fineldata = await res.json()
    setdata(fineldata);
    Loading(true)
  } 
  catch (err) {
    if(!isLoading){
      seterror('somthing went rong');
    }
   
  }
 
}

// console.log(data);
  return (
    <>
      <h1>Fetch Data with React Component</h1>
      <button onClick={getdata}>Fetch Data</button>
      {/* <DataDisplay Data={data}/>  */}
      <div>
      <DataDisplay Data = {data} err = {error} />
      </div>
     
    </>
  )
 
}

export default App
