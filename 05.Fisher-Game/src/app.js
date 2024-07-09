

function app(){


    document.getElementById('logout').addEventListener('click',onLogout);

    document.querySelector('.load').addEventListener('click',onLoadAll);

    const END_POINTS = {
        logout: 'http://localhost:3030/users/logout/',
        catches: 'http://localhost:3030/data/catches/'
    }

    const catchesDiv = document.getElementById('catches')

    let userData = JSON.parse(sessionStorage.getItem('UserData'));
    let accessToken = userData.accessToken;
    debugger


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



    async function onLogout(){
        let userInfo = JSON.parse(sessionStorage.getItem('UserData'));

        const option = {
            method:"GET",
            headers: {
                "X-Authorization": userInfo.accessToken
            }
        }

        await fetch(END_POINTS.logout,option);
        sessionStorage.clear();
        guestDiv.classList.remove('hidden');
        userDiv.classList.add('hidden');
        pEl.textContent = 'guest'

    }


    async function onLoadAll(){

        const response = await fetch(END_POINTS.catches);
        const data = await response.json();
      

        data.forEach(item => {
            const newCatch = createCatch(item);
            catchesDiv.appendChild(newCatch);
        })
    }

    function createCatch(data){
        const newDiv = document.createElement('div');
        newDiv.classList.add('catch');
        newDiv.innerHTML = `
        <label>Angler</label>
        <input type=\"text\" class=\"angler\" value=\"${data.angler}\">
        <label>Weight</label>
        <input type=\"text\" class=\"weight\" value=\"${data.weight}\">
        <label>Species</label>
        <input type=\"text\" class=\"species\" value=\"${data.species}\">
        <label>Location</label>
        <input type=\"text\" class=\"location\" value=\"${data.location}\">
        <label>Bait</label>
        <input type=\"text\" class=\"bait\" value=\"${data.bait}\">
        <label>Capture Time</label>
        <input type=\"number\" class=\"captureTime\" value=\"${data.captureTime}\">
        <button class=\"update\" data-id=\"${data._id}\">Update</button>
        <button class=\"delete\" data-id=\"${data._id}\">Delete</button>
    </div>`;

        newDiv.querySelector('.update').addEventListener('click',updateCatch);
        // newDiv.querySelector('.delete').addEventListener('click',onDelete);
        return newDiv;
    }

    async function updateCatch(event) {
        const id = event.target.getAttribute('data-id');
        const parent = event.target.parentElement;
        const angler = parent.querySelector('.angler').value;
        const weight = parent.querySelector('.weight').value;
        const species = parent.querySelector('.species').value;
        const location = parent.querySelector('.location').value;
        const bait = parent.querySelector('.bait').value;
        const captureTime = parent.querySelector('.captureTime').value;

        try {
           
          await fetch(END_POINTS.catches + id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'X-Authorization': accessToken
            },
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
          });
          alert('Catch updated successfully!');
        } catch (error) {
          console.error('Error updating catch:', error);
        }
      }

}



app();