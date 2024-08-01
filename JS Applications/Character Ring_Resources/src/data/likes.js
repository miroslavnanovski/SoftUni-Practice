import { use } from "chai";
import {get, post} from "../data/api.js"
import { getUserData } from "../util.js"

const endpoints = {
    likes: '/data/useful',
    likesByCharacterId: (id) => `/data/useful?where=characterId%3D%22${id}%22&distinct=_ownerId&count`,
    likesByUserId: (characterId, userId) => `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function likeCharacter(characterId){
    return post(endpoints.likes, {characterId})
}

export async function getLikesByCharacterId(){
    const userData = getUserData();

    const requests = [
        get(endpoints.likesByCharacterId(characterId))
    ]

    if(userData){
        requests.push(endpoints.likesByUserId(userData._id));
    }

    const [likes,hasLiked] = await Promise.all(requests);

    return {
        likes,
        hasLiked: Boolean(hasLiked)
    }



}