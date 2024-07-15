import { showHome } from "./src/views/showHome.js";
import { showRegiser } from "./src/views/showRegister.js";
import { showLogin } from "./src/views/showLogin.js";
import {showCreate} from "./src/views/showCreate.js"
import {showDashboard} from "./src/views/showDashboard.js"  
import {showDetails} from "./src/views/showDetails.js"



const main = document.querySelector('main');

Array.from(document.querySelectorAll('div[data-section]')).forEach(section => {
    section.remove();
})

const routes = {

    "/": showHome,
    "/register": showRegiser,
    "/login" : showLogin,
    "/create" : showCreate,
    "/dashboard" : showDashboard,
    "/details" : showDetails,
    "/logout" : () => console.log('Logging out!'),

}

const nav = document.querySelector('nav');

nav.addEventListener('click',onNavigate);

function onNavigate(e){
    e.preventDefault()
 
    let target = e.target;

    if(target.tagName !== 'A'){
        target = e.target.parentElement
    }

    if(!target.href){
        return
    }

    const currentUrl = new URL(target.href);

    const viewName = currentUrl.pathname;
    goTo(viewName)

}

function goTo(name){
    const handler = routes[name];
    handler('Im context');
}




goTo("/")