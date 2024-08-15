import { getAllMotors } from "../data/operationsTemplate.js";
import { html, render } from "../lib.js"
import { catalogItemTemplate } from "./partialView/catalogItem.js";


const catalogTemplate = (motors) => html`
  <h2>Available Motorcycles</h2>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    
    ${motors.length ? motors.map(catalogItemTemplate) : html`<<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
      </section>`
     
export async function showCatalogPage(){

    const motors = await getAllMotors();

    render(catalogTemplate(motors));
}