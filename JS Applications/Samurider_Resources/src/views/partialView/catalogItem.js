import { html, render } from "../../lib.js";



export const catalogItemTemplate = (data) => html`
 <div class="fact">
      <img src=${data.imageUrl} alt="example1" />
      <h3 class="category">${data.category}</h3>
      <p class="description">${data.description}</p>
      <a class="details-btn" href="/catalog/${data._id}">More Info</a>
    </div>`;

    //TODO fix href on More info to point to the correct place adding the item ID from the server