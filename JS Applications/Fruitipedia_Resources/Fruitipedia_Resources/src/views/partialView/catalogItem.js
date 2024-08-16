import { html, render } from "../../lib.js";



export const catalogItemTemplate = (data) => html`
<div class="fruit">
      <img src=${data.imageUrl} />
      <h3 class="title">${data.name}</h3>
      <p class="description">${data.description}</p>
      <a class="details-btn" href="/catalog/${data._id}">More Info</a>
    </div>`;

    //TODO fix href on More info to point to the correct place adding the item ID from the server