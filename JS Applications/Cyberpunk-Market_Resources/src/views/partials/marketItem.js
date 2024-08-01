import { html,render } from "../../lib.js"



export const itemTemplate = (data) => html`
<div class="item">
      <img src=${data.imageUrl} alt="example1" />
      <h3 class="model">${data.item}{</h3>
      <div class="item-info">
        <p class="price">Price: €${data.price}</p>
        <p class="availability">
          ${data.availability}
        </p>
        <p class="type">${data.type}</p>
      </div>
      <a class="details-btn" href="/Market/${data._id}">Uncover More</a>
    </div>`


    //TODO add href to target specific item by ID