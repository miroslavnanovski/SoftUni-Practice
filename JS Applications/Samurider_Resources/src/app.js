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
import { showSearchPage } from "./views/searchPage.js";

updateNavigation()
page('/', showHomePage)
page('/login', showloginPage)
page('/register', showRegisterPage)
page('/catalog', showCatalogPage)
page('/create', showCreatePage)
page('/catalog/:id', showDetailsPage)
page('/edit/:id',showEditPage)
page('/search', showSearchPage)


page.start();


document.querySelector('.logoutBtn').addEventListener('click',function(e){
    e.preventDefault();
    logout();
    updateNavigation();
    page.redirect('/');
})
