import { showHome } from "./src/views/showHome.js";
import { showRegiser } from "./src/views/showRegister.js";
import { showLogin } from "./src/views/showLogin.js";



const main = document.querySelector('main');

Array.from(document.querySelectorAll('div[data-section]')).forEach(section => {
    section.remove();
})

const routes = {

    "/": showHome,
    "/register": showRegiser,
    "/login" : showLogin,
    

    
}

const nav = document.querySelector('nav');

nav.addEventListener('click',onNavigate);

function onNavigate(e){
    e.preventDefault()
 
    let target = e.target;

    if(target.tagName !== 'A'){
        target = e.target.parentElement
    }

    const currentUrl = new URL(target.href);

    const viewName = currentUrl.pathname;
    routes[viewName]();
  

}





