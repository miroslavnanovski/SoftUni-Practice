import { logout } from "./data/user.js";
import { page } from "./lib.js";
import { updateNavigation } from "./util.js";
import { showCatalogPage } from "./views/catalogPage.js";
import { showCreatePage } from "./views/createPage.js";
import { showHomePage } from "./views/homePage.js";
import { showloginPage } from "./views/loginPage.js";
import { showDetailsPage } from "./views/detailsPage.js";
import { showRegisterPage } from "./views/registerPage.js";
import { showEditPage } from "./views/editPage.js";

updateNavigation()
page('/', showHomePage)
page('/catalog', showCatalogPage)
page('/login', showloginPage)
page('/register', showRegisterPage)
page('/create', showCreatePage)
page('/catalog/:id', showDetailsPage)
page('/edit/:id',showEditPage)


page.start();


document.querySelector('.logoutBtn').addEventListener('click',function(e){
    e.preventDefault();
    logout();
    updateNavigation();
    page.redirect('/');

})
