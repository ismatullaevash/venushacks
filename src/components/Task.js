import { useState } from "react";
export default function Task(props) {
  const { addNewTask, deleteTask, moveTask, task } = props;

  const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormAction] = useState("");

  function setUrgency(e) {
    setUrgencyLevel(e.target.attributes.urgency.value);
  }
  function handleSubmit(e) {
      e.preventDefault();
      if(formAction==="save"){
          if(collapsed){
              setCollapsed(false);
          }
          else{
              let newTask={
                  id:task.id,
                  title:e.target.elements.title.value,
                  description:e.target.elements.description.value,
                  amount:e.target.elements.amount.value,
                  urgency:urgencyLevel,
                  status:task.status,
                  isCollapsed:true
              };
              addNewTask(newTask);
              setCollapsed(true);
          }

      }
      if(formAction==="delete"){
          deleteTask(task.id);
      }
  }
  function handleMoveLeft() {
      let newStatus="";
      if(task.status==="In progress"){
          newStatus="Backlog";
      }
      else if(task.status==="Completed"){
          newStatus="In progress";
      }

      if(newStatus!=""||newStatus!=null){
          moveTask(task.id,newStatus);
      }

  }
  function handleMoveRight() {
    let newStatus="";
    if(task.status==="Backlog"){
        newStatus="In progress";
    }
    else if(task.status==="In progress"){
        newStatus="Completed";
    }

    if(newStatus!=""||newStatus!=null){
        moveTask(task.id,newStatus);
    }
  }

  return (
    <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
      <button onClick={handleMoveLeft}>&#171</button>
      <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          disabled={collapsed}
          defaultValue={task.title}
          className="title input"
        />
        <textarea
          rows="2"
          className="description input"
          name="description"
          placeholder="Enter description"
          defaultValue={task.description}
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter the amount"
          disabled={collapsed}
          defaultValue={task.amount}
          className="amount input"
        />
        <div className="urgencyLabels">
          <label className={`low ${urgencyLevel === "low" ? "selected" : ""}`}>
            <input
              urgency="low"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            low
          </label>
          <label
            className={`medium ${urgencyLevel === "medium" ? "selected" : ""}`}
          >
            <input
              urgency="medium"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            medium
          </label>
          <label
            className={`high ${urgencyLevel === "high" ? "selected" : ""}`}
          >
            <input
              urgency="high"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            high
          </label>
        </div>
        <button
          onClick={() => {
            setFormAction("save");
          }}
          className="button"
        >
          {collapsed ? "Edit" : "Save"}
        </button>

        {collapsed && (
          <button
            onClick={() => {
              setFormAction("delete");
            }}
            className="button delete"
          >
            delete
          </button>
        )}
      </form>
      <button onClick={handleMoveRight}>&#187</button>
    </div>
  );
}
