import Status from "./components/Status"
import { useState, useEffect } from "react"
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log("using effect")
  }, [])
  function addEmptyTask(status) {

  }
  function addNewTask(taskToBeAdded) {

  }
  function deleteTask(taskID){

  }
  function moveTask(id,newStatus){

  }
  function saveToLocalStorage(tasks){

  }
  function loadFromLocalStorage(){
    
  }
  return (
    <div>
      <h1>Your Tasks</h1>
      <main>
        <section>
          <Status
            task={tasks}
            addEmptyTask={addEmptyTask}
            addNewTask={addNewTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Backlog"
          />
          <Status
            task={tasks}
            addEmptyTask={addEmptyTask}
            addNewTask={addNewTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="In Progress"
          />
          <Status
            task={tasks}
            addEmptyTask={addEmptyTask}
            addNewTask={addNewTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Completed"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
