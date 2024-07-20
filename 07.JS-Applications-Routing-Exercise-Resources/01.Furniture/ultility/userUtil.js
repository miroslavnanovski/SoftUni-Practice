function setUser(data){
    sessionStorage.setItem("userData",JSON.stringify(data));
}

function getUserData(){
    return JSON.parse(sessionStorage.getItem('userData'));
}

function getToken(){
    const userData = getUserData();
    const token = userData.accessToken;
    return token;
}

function hasOwner(itemId){
    const userData = getUserData();
    return userData._id === itemId;
}

export const userUtil = {
    setUser,
    getUserData,
    getToken,
    hasOwner
}