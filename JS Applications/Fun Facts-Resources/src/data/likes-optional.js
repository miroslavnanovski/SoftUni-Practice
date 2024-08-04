import { html,render,page } from "../lib.js"


const endpoints = {
    like: '/data/likes',
    likeByFactId: (id) => `/data/likes?where=factId%3D%22${id}%22&distinct=_ownerId&count`,
    likesByUsedId: (userId,id) => `/data/likes?where=factId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`
    
}