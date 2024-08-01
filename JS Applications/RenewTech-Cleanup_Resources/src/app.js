import { page } from "./lib.js";
import { updateNav } from "./util.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { solutionsView } from "./views/solutionsView.js";
import { logout } from "./data/user.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";

updateNav()
page('/',homeView)
page('/solutions', solutionsView)
page('/login', loginView)
page('/register', registerView)
page('/create', createView)
page('/solutions/:id', detailsView)
page('/edit/:id', editView)


page.start();

document.getElementById('logoutLink').addEventListener('click', (e) => {
    e.preventDefault();
    logout();
    updateNav();
    page.redirect('/');
})

