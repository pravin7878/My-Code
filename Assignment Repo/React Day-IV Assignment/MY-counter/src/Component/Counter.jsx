import { useState } from 'react'
function Counter(prop){
    const [count,setcount] = useState(0)
    return(
      <>
      <h1>Count : {count}</h1>
  <button onClick={()=>setcount(count+1)} style ={prop.style}>Increase</button>
  <button onClick={()=>{
    if(count==0){
        setcount(count-0)
    }
    else{
        setcount(count-1)}
        }
        }  style ={prop.style}>Decriment</button>
  
  <button onClick={()=>setcount(0)} style ={prop.style}>Reset</button>
       </>
    )
}

export default Counter
