import { logout } from "./data/user.js";
import { page } from "./lib.js";
import { updateNav } from "./util.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";



updateNav();
page('/', homeView);
page('/login', loginView);
page('/register', registerView);

page.start();



document.querySelector('.logoutLink').addEventListener('click', (e) => {
    e.preventDefault();
    logout();
    updateNav();
    page.redirect('/');
})
