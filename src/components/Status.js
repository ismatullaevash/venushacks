import Task from "./Task";

export default function StatusLine(props) {
    const { status, tasks, addNewTask, addEmptyTask, deleteTask, moveTask } = props;
    let taskList, tasksForStatus;
    function handleAddEmptyTask() {
        addEmptyTask(status);
    }
    if (tasks) {
        tasksForStatus = tasks.filter((task) => {
            return task.status == status;
        })
    }
    if (tasksForStatus) {
        taskList = tasksForStatus.map((task) => {
            return (
                <Task
                    addNewTask={(task) => addNewTask(task)}
                    deleteTask={(id) => deleteTask(id)}
                    moveTask={(id,status)=>moveTask(id,status)}
                    key={task.id}
                    task={task}
                />
            )
        })
    }
    return <div className="statusLine"> 
        <h3>{status}</h3>
        {taskList}
        <button onClick={handleAddEmptyTask}> Add</button>
    </div>
}
