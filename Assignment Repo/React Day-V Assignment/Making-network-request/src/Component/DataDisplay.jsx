import "./DataDisplay.css" 
function DataDisplay(prop){

    // console.log(prop.Data);
    try {
       const Mydata = prop.Data
    //    console.log(Mydata);
    return(
      Mydata.map((info)=>{
        console.log(info);
        return(

            <div className="postDiv" key={info.id}>
                <h3>{info.id}</h3>
                <h3>{info.title}</h3>
                <p>{info.body}</p>
            </div>
        )
        
       }))
       
    } 
    catch (err) {
       return (
        <p>{prop.err}</p>
        )
    }
    // return(
    // <>
    // try {
    //     prop.map((info)=>{
    //         console.log(info);
    //                 })
    // } 
    // catch () {
    //     <h1></h1>
    // }
       
    //     </>
    // )
}

export default DataDisplay