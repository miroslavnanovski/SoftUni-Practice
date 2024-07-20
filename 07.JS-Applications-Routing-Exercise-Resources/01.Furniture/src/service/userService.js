import { api } from "../../ultility/requester.js";

const endpoints = {
    register: 'http://localhost:3030/users/register',
    login: 'http://localhost:3030/users/login',
    logout: 'http://localhost:3030/users/logout'
}


async function register(data){
    return await api.post(endpoints.register,data)
}
async function login(data){
    return await api.post(endpoints.login,data)
}
async function logout(){
    return await api.get(endpoints.logout)
}


export const userService = {
    register,
    login,
    logout
}

