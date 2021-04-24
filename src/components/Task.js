import { useState } from "react";
export default function Task(props) {
    const { addNewTask, deleteTask, moveTask, task } = props;

    const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
    const [collapsed,setCollapsed]=useState(task.isCollapsed);
    const [formAction,setFormAction]=useState("");

    function setUrgency(e){
        setUrgencyLevel(e.target.attributes.urgency.value);
    } 
    function handleSubmit(e){

    }
    function handleMoveLeft(){

    }
    function handleMoveRight(){
        
    }


    return <div><p>task</p></div>
}