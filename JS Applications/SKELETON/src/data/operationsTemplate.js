import { get, post, put, del } from "./api.js";

// change to match project endpoints
const endpoints = {
    'solutions': 'data/solutions?sortBy=_createdOn%20desc',
    'solutionById': 'data/solutions/',
    'solution' : 'data/solutions'
}

// change according to project description
export async function getAllSolutions(){
    return get(endpoints.solutions);
}

// change according to project description
export async function getSolutionById(id){
    return get(endpoints.solutionById + id);
}

// change according to project description
export async function createSolution(type,imageUrl,description,learnMore){
    return post(endpoints.solution,{
        type,
        imageUrl,
        description,
        learnMore
    })
}

// change according to project description
export async function updateSolution(id,solutionData){
    return put(endpoints.solutionById + id,solutionData)
}

// change according to project description
export async function deleteSolution(id){
    return del(endpoints.solutionById + id);
}