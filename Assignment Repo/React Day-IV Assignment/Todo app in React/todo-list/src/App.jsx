import React, { useState } from "react";
import "./App.css";
import TaskItem from "./Component/Task itom"
import backarro from "./assets/backarro.png"


function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string

    taskAssignedTo: "", // string
  });
  const [liststatus, setliststatus] = React.useState(false)
  const [taskInpstatus, settaskInpstatus] = React.useState(true)
  function handleChange(event) {
    // Implement logic to handle form changes
    const value = event.target.value

    const newdata = { ...formState, [event.target.name]: value }
    setFormState(newdata)
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    setTasks([...tasks, formState])
    console.log(tasks);

    setFormState({
      task: "",

      taskAssignedTo: "",
    })

  }

  function hendelDeletTask(id) {
    const Updettasks = tasks.filter((task, taskId) => {
      return id !== taskId
    })
    setTasks(Updettasks);
  }

  function hendellist() {

    setliststatus(true)
    settaskInpstatus(false)

  }

  return (
    <div>
      <h1>Todo List</h1>
      {taskInpstatus ?
        <div className="Addtask">
          <form onSubmit={handleSubmit}>
            <input name="task" type="text" placeholder="Add Task" onChange={handleChange} value={formState.task} />

            <select name="taskAssignedTo" onChange={handleChange} value={formState.taskAssignedTo}>
              <option value="">Select Assignee</option>
              <option value="Bruce">Bruce</option>
              <option value="Barry">Barry</option>
              <option value="Clark">Clark</option>
              <option value="Oliver">Oliver</option>
              <option value="Jina">Jina</option>
            </select>
            <span>
              <button type="submit">Add Task</button>
              <button onClick={hendellist}>Show List</button>
            </span>
          </form>
        </div>
        : null}

      {liststatus ?
        <div className='Showtask'>
          <div>
          <button onClick={() => {
            settaskInpstatus(true)
            setliststatus(false)
          }} ><img src={backarro}/>Back</button>
</div>
          <TaskItem data={tasks} hendelDelet={hendelDeletTask} />
        </div>
        : null}
    </div>
  );
}

export default App;

