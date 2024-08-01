import { get, post, put, del } from "./api.js";

const endpoints = {
    'catalog': '/data/cars?sortBy=_createdOn%20desc',
    'carsById': '/data/cars/',
    'cars' : '/data/cars'
}


export async function getAllCars(){
    return get(endpoints.catalog);
}

export async function getCarById(id){
    return get(endpoints.carsById + id);
}

export async function createCar(model,imageUrl,price,weight,speed,about){
    return post(endpoints.cars,{
            model,
            imageUrl, 
            price, 
            weight,
            speed,
            about
    })
}

export async function updateCar(id,carData){
    return put(endpoints.carsById + id,carData)
}

export async function deleteCar(id){
    return del(endpoints.carsById + id);
}