import {render as renderBase,html} from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs";

//TODO replace with root element

const root = document.querySelector('main');


function render(template){
    renderBase(template,root);
}


export {
    render,
    html,
    page
}