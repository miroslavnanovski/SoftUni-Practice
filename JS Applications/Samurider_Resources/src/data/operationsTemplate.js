import { get, post, put, del } from "./api.js";

// change to match project endpoints
const endpoints = {
    'facts': 'data/facts?sortBy=_createdOn%20desc',
    'factById': 'data/facts/',
    'fact' : 'data/facts'
}

// change according to project description
export async function getAllFacts(){
    return get(endpoints.facts);
}

// change according to project description
export async function getFactById(id){
    return get(endpoints.factById + id);
}

// change according to project description
export async function createFact(category,imageUrl,description,moreInfo){
    return post(endpoints.fact,{
        category,
        imageUrl, 
        description, 
        moreInfo

    })
}

// change according to project description
export async function updateFact(id,factData){
    return put(endpoints.factById + id,factData)
}

// change according to project description
export async function deleteFact(id){
    return del(endpoints.factById + id);
}