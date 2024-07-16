import { towns } from "./towns.js";
import {render,html} from "./node_modules/lit-html/lit-html.js"

const inputRef = document.getElementById('searchText');
const townsDiv = document.getElementById('towns');
const seachBtn = document.querySelector('button');
const resultDiv = document.getElementById('result')

seachBtn.addEventListener('click',search);


let matches = 0;

search()
function search(e) {
   matches = 0;
   let searchText = null;
   if(e){
      searchText = inputRef.value;
   }

   let temp = towns.map(town => createTemp(town,searchText));
   render(temp,townsDiv)
   if(matches >= 0){
      resultDiv.textContent = `${matches} matches found`;
   }
   

}

function createTemp(town,searchText){
   let isMatch = town.includes(searchText) && searchText !== '';
   if(isMatch){
      matches++;
   }
   return html`
   <ul>
      <li class=${isMatch ? "active" : ""}>${town}</li>
   <ul>
   `
}