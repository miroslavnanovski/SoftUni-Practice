import { get, post, put, del } from "./api.js";

// change to match project endpoints
const endpoints = {
    'motors': 'data/motorcycles?sortBy=_createdOn%20desc',
    'motorsById': 'data/motorcycles/',
    'motor' : 'data/motorcycles'
}

// change according to project description
export async function getAllMotors(){
    return get(endpoints.motors);
}

// change according to project description
export async function getMotorById(id){
    return get(endpoints.motorsById + id);
}

// change according to project description
export async function createMotor(model,imageUrl, year, mileage,contact,about){
    return post(endpoints.motor,{
        model,
        imageUrl, 
        year, 
        mileage,
        contact,
        about
    })
}

// change according to project description
export async function updateMotor(id,motorData){
    return put(endpoints.motorsById + id,motorData)
}

// change according to project description
export async function deleteMotor(id){
    return del(endpoints.motorsById + id);
}

export async function searchMotor(query){
    const motors = await get(`data/motorcycles?where=model%20LIKE%20%22${query}%22`)
    return motors;
}