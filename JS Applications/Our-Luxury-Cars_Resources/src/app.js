import { logout } from "./data/user.js";
import { page } from "./lib.js";
import { updateNav } from "./util.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { searchView } from "./views/search.js";



updateNav();
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView)
page('/search', searchView)
page('/create', createView)
page.start();



document.querySelector('.logoutLink').addEventListener('click', (e) => {
    e.preventDefault();
    logout();
    updateNav();
    page.redirect('/');
})
