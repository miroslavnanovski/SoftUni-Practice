export function setUserData(data){
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUserData(data){
    return JSON.parse(localStorage.getItem('user'));
}

export function clearUserData(){
    localStorage.removeItem('user');
}

export function createSubmitHandler(callback){
    return function(event){
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        callback(data,event.target);
    }
}



// Change according to exercise's description
export function updateNav(){
    const userData = getUserData();
    if(userData) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none'
    } else {
        document.querySelector('.user').style.display = 'none'
        document.querySelector('.guest').style.display = 'block'
    }
}