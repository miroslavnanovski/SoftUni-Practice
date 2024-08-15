import { getAllFruits } from "../data/operationsTemplate.js";
import { html, render } from "../lib.js"
import { catalogItemTemplate } from "./partialView/catalogItem.js";


const catalogTemplate = (fruits) => html`
  <h2>Fruits</h2>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    
    ${fruits.length ? fruits.map(catalogItemTemplate) : html`<h2>No fruit info yet.</h2>`}
      </section>`
     
export async function showCatalogPage(){

    const fruits = await getAllFruits();

    render(catalogTemplate(fruits));
}