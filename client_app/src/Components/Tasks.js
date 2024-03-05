import React, {useEffect, useState} from "react";
import style from './css/styles.module.css'
import { listTasks } from "../Services/TaskService";
function Tasks(){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        listTasks().then(response => {
            setTasks(response.data);
        }).catch(error => {
            console.error("Connection error: ", error)
        })
    }, []);
    return(
        <div className={style.mainDiv}>
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