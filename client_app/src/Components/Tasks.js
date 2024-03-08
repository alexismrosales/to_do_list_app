import React, {useEffect, useState} from "react";
import { updateListTasks, createTask, updateTaskMessage, updateTaskStatus, removeTask } from "./CRUD";
import style from './css/styles.module.css'

function Tasks(){
    let counter = 1;

    useEffect(() => { updateListTasks(setTasks);}, []);

    const [tasks, setTasks] = useState([]);

    const [newMessage, setNewMessage] = useState('');

    const[message, setMessage] = useState('');

    const handleKeyDown = (event, taskId) => {
        if(event.key === 'Enter'){
            if(taskId)
            {   
                const task = { message : message }
                updateTaskMessage(taskId, task, setTasks);
            }
            else{
                const task = { message : newMessage, done : "false" }
                createTask(task, setTasks);
            }
            setNewMessage('');
        }
    }

    const updateStatusOnClick = (taskId, isDone) => {
        const task = { done : !isDone }
        updateTaskStatus(taskId, task, setTasks);
    }

    return(
        <div className={style.container}>
            <div className={style.mainDivInput}>
                <div className={style.mainContainerInput}>
                    <input className={style.mainInput}
                            placeholder="Write a task"
                            value={newMessage}
                            onChange={(event) => { setNewMessage(event.target.value); }}
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
                                        <p className={style.counter}>{counter++}</p>
                                        <input 
                                            className={task.done ? style.messageTrue : style.messageFalse}  
                                            type="text" 
                                            defaultValue={task.message}
                                            onChange={(event) => { setMessage(event.target.value); }}
                                            onKeyDown={(event) => handleKeyDown(event, task.id)}
                                            />
                                        <a className={style.a} onClick={() => updateStatusOnClick(task.id, task.done)} > <svg className={style.svg1} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#394053"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.65263 14.0304C6.29251 13.6703 6.29251 13.0864 6.65263 12.7263C7.01276 12.3662 7.59663 12.3662 7.95676 12.7263L11.6602 16.4297L19.438 8.65183C19.7981 8.29171 20.382 8.29171 20.7421 8.65183C21.1023 9.01195 21.1023 9.59583 20.7421 9.95596L12.3667 18.3314C11.9762 18.7219 11.343 18.7219 10.9525 18.3314L6.65263 14.0304Z" fill="#394053"></path><path clip-rule="evenodd" d="M14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27C21.1797 27 27 21.1797 27 14C27 6.8203 21.1797 1 14 1ZM3 14C3 7.92487 7.92487 3 14 3C20.0751 3 25 7.92487 25 14C25 20.0751 20.0751 25 14 25C7.92487 25 3 20.0751 3 14Z" fill="#394053" fill-rule="evenodd"></path></g></svg> </a>
                                        <a className={style.a} onClick={() => removeTask(task.id, setTasks)} > <svg className={style.svg2} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#394053"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2.32129 2.32363C2.72582 1.9191 3.38168 1.9191 3.78621 2.32363L25.6966 24.234C26.1011 24.6385 26.1011 25.2944 25.6966 25.6989C25.2921 26.1035 24.6362 26.1035 24.2317 25.6989L2.32129 3.78854C1.91676 3.38402 1.91676 2.72815 2.32129 2.32363Z" fill="#394053"></path><path d="M25.6787 2.30339C25.2742 1.89887 24.6183 1.89887 24.2138 2.30339L2.30339 24.2138C1.89887 24.6183 1.89887 25.2742 2.30339 25.6787C2.70792 26.0832 3.36379 26.0832 3.76831 25.6787L25.6787 3.76831C26.0832 3.36379 26.0832 2.70792 25.6787 2.30339Z" fill="#394053"></path></g></svg></a>
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