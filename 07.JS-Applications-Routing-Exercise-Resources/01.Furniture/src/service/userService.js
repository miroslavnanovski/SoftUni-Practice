import { api } from "../../ultility/requester.js";
import { userUtil } from "../../ultility/userUtil.js";

const endpoints = {
    register: 'http://localhost:3030/users/register',
    login: 'http://localhost:3030/users/login',
    logout: 'http://localhost:3030/users/logout'
}


async function register(data){
    const userData = await api.post(endpoints.register,data)
    userUtil.setUser(data);
}
async function login(data){
    const userData =  await api.post(endpoints.login,data)
    userUtil.setUser(data);
}
async function logout(){
     await api.get(endpoints.logout)
     userUtil.clearUserData();
}


export const userService = {
    register,
    login,
    logout
}

