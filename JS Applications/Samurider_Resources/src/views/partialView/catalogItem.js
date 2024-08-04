import { html, render } from "../../lib.js";



export const catalogItemTemplate = (data) => html`
 <div class="motorcycle">
      <img src=${data.imageUrl} alt="example1" />
      <h3 class="model">${data.model}</h3>
      <p class="year">Year: ${data.year}</p>
      <p class="mileage">Mileage: ${data.mileage} km.</p>
      <p class="contact">Contact Number: ${data.contact}</p>
      <a class="details-btn" href="/catalog/${data._id}">More Info</a>
</div>`;

    //TODO fix href on More info to point to the correct place adding the item ID from the server