import Status from "./components/Status";
//import "./styles/App.scss";
import { useState, useEffect } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    loadFromLocalStorage();
  }, []);
  function addEmptyTask(status) {
    const lastTask = tasks[tasks.length - 1];
    let newTaskID = 1;
    if (lastTask !== undefined) {
      newTaskID = lastTask.id + 1;
    }
    setTasks((tasks) => [...tasks, {
      id: newTaskID,
      title: "",
      description: "",
      amount: 0,
      urgency:"",
      status:status
    }]);
  }
  function addNewTask(taskToBeAdded) { 
    let filteredTasks=tasks.filter((task)=>{
      return task.id!==taskToBeAdded.id;
    })
    let newTaskList=[...filteredTasks,taskToBeAdded];
    setTasks(newTaskList);
    saveToLocalStorage(newTaskList);
  }
  function deleteTask(taskID) { 
    let filteredTasks=tasks.filter((task)=>{
      return task.id!==taskID;
    })
    setTasks(filteredTasks);
    saveToLocalStorage(filteredTasks);
  }
  function moveTask(id, newStatus) { 
    let task=tasks.filter((task)=>{
      return task.id===id;
    })
    let filteredTasks=tasks.filter((task)=>{
      return task.id!==id;
    })
    task.status=newStatus;
    let newTaskList=[...filteredTasks,task];
    setTasks(newTaskList);
    saveToLocalStorage(newTaskList);
  }
  function saveToLocalStorage(tasks) {
    localStorage.setItem("tasks",JSON.stringify(tasks));
   }
  function loadFromLocalStorage() { 
    let loaded=localStorage.getItem("tasks");
    let tasks=JSON.parse(loaded);
    if(tasks){
      setTasks(tasks);
    }
  }
  return (
    <div>
      <h1>Your Tasks</h1>
      <main>
        <section>
          <Status
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addNewTask={addNewTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Backlog"
          />
          <Status
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addNewTask={addNewTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="In Progress"
          />
          <Status
            tasks={tasks}
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
