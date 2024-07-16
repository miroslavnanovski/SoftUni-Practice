import { towns } from "./towns.js";
import {render,html} from "./node_modules/lit-html/lit-html.js"

const inputRef = document.getElementById('searchText');
const townsDiv = document.getElementById('towns');
const seachBtn = document.querySelector('button');

seachBtn.addEventListener('click',search);

search()
function search(e) {

   let searchText = null;
   if(e){
      searchText = inputRef.value;
   }

   let temp = towns.map(town => createTemp(town,searchText));
   render(temp,townsDiv)

}

function createTemp(town,searchText){

   let isMatch = town.includes(searchText);
   return html`
   <ul>
      <li class=${isMatch ? "active" : ""}>${town}</li>
   <ul>
   `
}