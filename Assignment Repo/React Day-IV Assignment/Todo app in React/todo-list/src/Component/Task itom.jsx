import { useState } from "react";
function TaskItem(props) {
  // console.log(props);
  let mytaskitem = props.data
  const [status, setstatus] = useState('Pending')
  // const [mytaskitem,settaskitem] = useState(props.data)
  function handlestatus(event) {
    console.log(event.target.checked);
    console.log(event.target.ind);
//     mytaskitem.filter((elem,id)=>{
// if(ind===id){
//   setstatus("completed")
// }
// else{
//   setstatus("pending")
// }
//     })

    event.target.checked ? setstatus("completed") : setstatus("pending")

  }

//   function hendelDelet(ID){
// // console.log(ID);
// // mytaskitem.filter((item,id)=>{
// //   console.log(id,"from filter");
// // })

//   }
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>status</th>
          <th>Assigned To</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {mytaskitem.map((ele, ind) => {
          // console.log(ele, ind);
          return (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td>{ele.task}</td>
              <td>{status} <input type="checkbox" onClick={handlestatus} /></td>
              <td>{ele.taskAssignedTo}</td>
              <td><input type="button" value="Delet" onClick={()=>{props.hendelDelet(ind)}}/></td>
            </tr>
            // {ele.completed ? "completed" : "pending"}
          )
        })}

      </tbody>
    </table>

  )
}

export default TaskItem;
