import {listTasks, addTask, changeTaskMessage, changeTaskStatus, deleteTask } from '../Services/TaskService';

function callUpdateTask(str , setTasks){
    updateListTasks(setTasks, str);
}

export function updateListTasks(setTasks, str){
    listTasks().then(response => {
        console.log("" + str + " succesfully");
        setTasks(response.data);
    }).catch(error => {
        console.error("Connection error: ", error);
    });
}

export function createTask(task, setTasks){
    addTask(task).then(() => {
        console.log(task)
        callUpdateTask("created", setTasks);
    });
}

export function updateTaskMessage(id, task, setTasks){
    changeTaskMessage(id, task).then(() => {
        console.log(task)
        callUpdateTask("updated message", setTasks);
    });
}

export function updateTaskStatus(id, task, setTasks){
    changeTaskStatus(id, task).then(() => {
        console.log(task)
        callUpdateTask("updated status", setTasks);
    });
}

export function removeTask(id, setTasks){
    deleteTask(id).then(() => {
        callUpdateTask("deleted", setTasks);
    });
}