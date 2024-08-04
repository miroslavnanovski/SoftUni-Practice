import { getUserData } from "../util"


const endpoints = {
    like: '/data/likes',
    likeByFactId: (id) => `/data/likes?where=factId%3D%22${id}%22&distinct=_ownerId&count`,
    likesByUserId: (userId,id) => `/data/likes?where=factId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function likeFact(factId){
    return post(endpoints.like, {factId} )
}

export async function getLikesByFactId(factId){

    const userData = getUserData();

    const requests = [
        get(endpoints.likeByFactId(factId))
    ]

    if(userData){
        requests.push(get(endpoints.likesByUserId(userData._id)))
    }

    const [likes, hasLiked ] = await Promise.all(requests);


    return {
        likes,
        hasLiked: Boolean(hasLiked)
    }

}