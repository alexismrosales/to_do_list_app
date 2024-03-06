import React, {useEffect, useState} from "react";
import style from './css/styles.module.css'
import { listTasks, addTask } from "../Services/TaskService";
function Tasks(){
    
    const [tasks, setTasks] = useState([]);

    const[message, setMessage] = useState('');

    // show Tasks list
    useEffect(() => { updateListTasks();}, []); 
    
    function updateListTasks()
    {
        listTasks().then(response => {
            setTasks(response.data);
        }).catch(error => {
            console.error("Connection error: ", error)
        });
    };
    
    function createTask(task)
    {
        addTask(task).then(response => {
            console.log(response.data)
            updateListTasks();
        });
    };
    
 
    // enter input Event
    const handleChange = (event) => { setMessage(event.target.value); };
    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            const task = { message }
            // add Task
            createTask(task)
        }
    }

    return(
        <div className={style.container}>
            <div className={style.mainDivInput}>
                <div className={style.mainContainerInput}>
                    <input className={style.mainInput}
                            placeholder="Write a task"
                            value={message}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}/>
                </div>
            </div>
            <div className={style.tableDiv}>
                <table className={style.table}>
                    <tbody className={style.tr}>
                        {
                            tasks.map(task =>
                                <tr key={task.id}>
                                    <td>{task.message}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Tasks;