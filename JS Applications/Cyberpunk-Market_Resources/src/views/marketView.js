import { html, render } from "../lib.js";
import { itemTemplate } from "./partials/marketItem.js";
import { getAllItems } from "../data/operationsTemplate.js"



const marketTemplate = (items) => html` <h3 class="heading">Market</h3>
    <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
   
    ${items.length ? items.map(itemTemplate) : html`<h3 class="empty">No Items Yet</h3>`}
  </section>
   <!-- Display an h2 if there are no posts -->
   
`

export async function marketView(){
    const items = await getAllItems();

    render(marketTemplate(items));
}

