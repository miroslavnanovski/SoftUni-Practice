import {page} from  "../node_modules/page/page.mjs"


const root = document.querySelector('.container');


    page("/", () => console.log('home'))
    page( "/catalog",()=> console.log("catalog"))
    page( "/create",()=> console.log("catalog"))
    page( "/dashboard",()=> console.log("catalog"))
    page(  "/details",()=> console.log("catalog"))
    page(  "/edit",()=> console.log("catalog"))
    page(  "/login",()=> console.log("catalog"))
    page(  "/myFurniture",()=> console.log("catalog"))
    page(   "/register",()=> console.log("catalog"))
    page(   "/logout",()=> console.log("catalog"))
    
    

