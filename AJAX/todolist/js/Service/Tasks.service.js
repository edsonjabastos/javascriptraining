
import { createXMLHttpResquest } from "./../createXMLHttpResquest.js"
import Task from "./../Model/taskmodel.js"
const urlUsers = "http://localhost:3000/users"
const urlTasks = "http://localhost:3000/tasks"
export default class TasksService {
    constructor() {
        this.tasks = []
    }
    add(task, cb, userId) {
        if (!task instanceof Task) {
            throw TypeError("task must be an instance of TaskModel")
        }
        const fn = (_task) => {
            const {title, completed, createdAt, updatedAt} = _task
            // this.tasks.push(new Task(title, completed, createdAt, updatedAt))
            this.getTasks(userId, cb)
        }
        createXMLHttpResquest("POST", `${urlUsers}/${userId}/tasks`, fn, JSON.stringify(task))
    }
    getTasks(userId, cb) {
        const fn = (arrTasks) => {
            const arrInstancesTasks = arrTasks.map(task => {
                const { title, completed, createdAt, updatedAt } = task
                return new Task(title, completed, createdAt, updatedAt, id)
            })
            if(typeof cb === "function") cb(this.tasks)
        }
        createXMLHttpResquest("GET", `${urlUsers}/${userId}/tasks`, fn)
    }
    remove(id, cb, userId) {
        const fn = () => {
            this.getTasks(userId, cb)
        } 
        createXMLHttpResquest("DELETE", `${urlTasks}/${id}`, fn)
    }
}