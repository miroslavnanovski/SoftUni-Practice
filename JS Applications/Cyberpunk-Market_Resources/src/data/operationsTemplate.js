import { get, post, put, del } from "./api.js";

// change to match project endpoints
const endpoints = {
    'marketItems': 'data/cyberpunk?sortBy=_createdOn%20desc',
    'itemById': 'data/cyberpunk/',
    'item' : 'data/cyberpunk'
}

// change according to project description
export async function getAllItems(){
    return get(endpoints.marketItems);
}

// change according to project description
export async function getItemById(id){
    return get(endpoints.itemById + id);
}

// change according to project description
export async function createItem(item,imageUrl,price,availability,type,description){
    return post(endpoints.item,{
        item,
        imageUrl, 
        price, 
        availability,
        type,
        description
    })
}

// change according to project description
export async function updateItem(id,itemData){
    return put(endpoints.itemById + id,itemData)
}

// change according to project description
export async function deleteItem(id){
    return del(endpoints.itemById + id);
}