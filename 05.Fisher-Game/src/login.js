const form = document.querySelector('form');
const email = form.email;
const password = form.password;

const url = 'http://localhost:3030/users/login';

let userData = JSON.parse(sessionStorage.getItem('UserData'));
    const nameRef = document.querySelector('.email')
    const pEl = nameRef.querySelector('span');
    const userDiv = document.getElementById('user');
    const guestDiv = document.getElementById('guest')
    if(!userData){
        userDiv.classList.add('hidden');
        pEl.textContent = 'guest'
    } else {
        guestDiv.classList.add('hidden');
        pEl.textContent = `${userData.email}`
    }


form.addEventListener('submit', (e) => {
    e.preventDefault();
    onLogin();
})




async function onLogin(){

    const response = await fetch(url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    })

    if(!response.ok){
        console.log(await response.json());
    }

    const userData = JSON.stringify(await response.json());
    sessionStorage.setItem('UserData', userData);

    

    window.location.href = 'index.html'
}

