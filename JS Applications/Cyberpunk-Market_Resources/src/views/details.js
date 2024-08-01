import {html,render} from '../lib.js'

import { page } from '../lib.js'
import { deleteItem, getItemById } from '../data/operationsTemplate.js';
import { getUserData } from '../util.js';

const detailsTemplate = (data,isOwner,onDelete) => html`
<section id="details">
    <div id="details-wrapper">
      <div>
        <img id="details-img" src=${data.imageUrl} alt="example1" />
        <p id="details-title">${data.item}</p>
      </div>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="details-price">Price: €${data.price}</p>
          <p class="details-availability">
            ${data.availability}
          </p>
          <p class="type">Type:${data.type}</p>
          <p id="item-description">
          ${data.description}
          </p>
        </div>

        ${isOwner ? html`
            <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          <a href="/edit/${data._id}" id="edit-btn">Edit</a>
          <a @click = ${onDelete} href="javascript-void(0)" id="delete-btn">Delete</a>`
           : null}
        </div>
      </div>
    </div>
       
  </section>`

  export async function detailsView(ctx){

    const id = ctx.params.id;

    const data = await getItemById(id);

    const userData = getUserData();

    const isOwner = userData ?._id == data._ownerId;


    render(detailsTemplate(data,isOwner,onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure?')

    if(!choice){
        return;
    }
    

    await deleteItem(id);

    page.redirect('/Market')
    }
    
}
