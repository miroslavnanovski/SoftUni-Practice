import page from "../node_modules/page/page.mjs"
import { showHomeView } from "./views/homeView.js";
import { showRegisterView} from "./views/registerView.js";


const root = document.querySelector('.container');

    page(updateCtx)
    page("/",showHomeView)
    page("/dashboard",showHomeView)
    page("/create",()=> console.log("create"))
    page("/details/:id",()=> console.log("details"))
    page("/edit/:id",()=> console.log("edit"))
    page("/login",()=> console.log("login"))
    page("/myFurniture",()=> console.log("myFurniture"))
    page("/register",showRegisterView)
    page("/logout",()=> console.log("logout"))
    
    

page.start();

function updateCtx(ctx,next){
    ctx.goTo = goTo;
    next();
}

function goTo(path){
    page.redirect(path)
}
