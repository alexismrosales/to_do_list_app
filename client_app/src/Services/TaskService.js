import axios from 'axios';

const REST_API_BASE_URL = "http://localhost:8080/api/tasks";

export const listTasks = () => axios.get(REST_API_BASE_URL);
export const addTask = (task) => axios.post(REST_API_BASE_URL,task);
export const changeTaskMessage = (id, task) => axios.post(REST_API_BASE_URL + '/updateMessage/' + id, task);
export const changeTaskStatus = (id, task) => axios.post(REST_API_BASE_URL + '/updateStatus/' + id, task);
export const deleteTask = (id) => axios.delete(REST_API_BASE_URL + '/' + id);
