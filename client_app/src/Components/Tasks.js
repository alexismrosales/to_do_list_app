import React, {useEffect, useState} from "react";
import { listTasks, addTask } from "../Services/TaskService";
import style from './css/styles.module.css'

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
                                <tr className={style.tr} key={task.id}>
                                    <td className={style.td}>
                                        <span className={style.message}>{task.message}</span>
                                        <a className={style.a} ><svg className={style.svg} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z" fill=""></path><path d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z" fill=""></path><path d="M328 340.8l32-31.2 348 348-32 32z" fill=""></path></g></svg></a>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Tasks;