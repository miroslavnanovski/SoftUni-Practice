import { getAllFacts } from "../data/operationsTemplate.js";
import { html, render } from "../lib.js"
import { catalogItemTemplate } from "./partialView/catalogItem.js";


const catalogTemplate = (facts) => html`
  <h2>Fun Facts</h2>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    
    ${facts.length ? facts.map(catalogItemTemplate) : html`<h2>No Fun Facts yet.</h2>`}
      </section>`
     
export async function showCatalogPage(){

    const facts = await getAllFacts();

    render(catalogTemplate(facts));
}