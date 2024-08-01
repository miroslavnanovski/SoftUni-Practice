import { page } from "./lib.js";
import { updateNav } from "./util.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { marketView } from "./views/marketView.js";
import { logout } from "./data/user.js";
import { registerView } from "./views/register.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";

updateNav();
page('/', homeView)
page('/Market', marketView)
page('/login', loginView)
page('/register', registerView)
page('/create', createView)
page('/Market/:id', detailsView)
page('/edit/:id', editView)
page.start();


document.getElementById('logoutLink').addEventListener('click', (e) => {
    e.preventDefault();
    logout();
    updateNav();
    page.redirect('/');
})