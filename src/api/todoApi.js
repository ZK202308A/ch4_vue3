import axios from "axios";


const server = "http://localhost:8080";


export const getTodos = async ( page = 1, size = 10 ) => {

    console.log("server", server)

    const res = await axios.get(`${server}/api/v1/todos/list?page=${page}&size=${size}`)

    return res.data;
}

export const addTodo = async ( todo ) => {

    const res = await axios.post(`${server}/api/v1/todos`, todo)

    return res.data;
}

export const getTodo = async ( mno ) => {

    const res = await axios.get(`${server}/api/v1/todos/${mno}`)

    return res.data;
}

export const removeTodo = async ( mno ) => {

    const res = await axios.delete(`${server}/api/v1/todos/${mno}`)

    return res.data;
}

export const modifyTodo = async ( todo ) => {

    const res = await axios.put(`${server}/api/v1/todos/${todo.mno}`, todo)

    return res.data;
}