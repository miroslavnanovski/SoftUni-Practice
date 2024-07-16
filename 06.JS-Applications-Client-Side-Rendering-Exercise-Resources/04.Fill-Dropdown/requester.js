
async function requester(method,url,data){

    const options = {
        method,
        headers: {}
    }

    if (data) { 
        options.headers['Content-Type'] =  'application/json'; 
        options.body = JSON.stringify(data); 
    }

    const response = await fetch(url,options);
    
    if(!response.ok){
        const error = await response.json();
        throw new Error(error);
    }
    
    return response.json();
}


async function get(url){
    return requester("GET",url);
}

async function post(url, data) {
    return requester("POST", url, data);
}

export const api = {
    get,
    post
}