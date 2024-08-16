import { get, post, put, del } from "./api.js";

// change to match project endpoints
const endpoints = {
    'fruits': 'data/fruits?sortBy=_createdOn%20desc',
    'fruitsById': 'data/fruits/',
    'fruit' : 'data/fruits'
}

// change according to project description
export async function getAllFruits(){
    return get(endpoints.fruits);
}

// change according to project description
export async function getFruitById(id){
    return get(endpoints.fruitsById + id);
}

// change according to project description
export async function createFruit(name,imageUrl,description,nutrition){
    return post(endpoints.fruit,{
        name,
        imageUrl, 
        description, 
        nutrition
    })
}

// change according to project description
export async function updateFruit(id,fruitData){
    return put(endpoints.fruitsById + id,fruitData)
}

// change according to project description
export async function deleteFruit(id){
    return del(endpoints.fruitsById + id);
}

export async function searchFruit(query){
    const fruits = await get(`data/fruits?where=name%20LIKE%20%22${query}%22`)
    return fruits;
}