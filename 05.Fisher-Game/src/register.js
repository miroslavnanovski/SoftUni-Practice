
const form = document.querySelector('form');
const email = form.email;
const password  = form.password;
const repass = form.rePass;

const url = 'http://localhost:3030/users/register';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput()
    onRegister();
})

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

async function onRegister(){

    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    })

    if(!response.ok){
        console.log(await response.json())
    }

    const data = await response.json();


    sessionStorage.setItem('user', JSON.stringify(data));

    window.location.href = 'index.html'

}





















function validateInput(){
    if(email.value === '' || password.value === '' || repass.value === ''){
        alert('All input fields must be filled!')
    } else if(password.value !== repass.value){
        alert('Passwords do not match!')
    }
}
