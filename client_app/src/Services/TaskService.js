import axios from 'axios';

const REST_API_BASE_URL = "http://localhost:8080/api/tasks";

export const listTasks = () => axios.get(REST_API_BASE_URL);
export const addTask = (task) => axios.post(REST_API_BASE_URL,task);
