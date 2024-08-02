import { html,render } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { page } from "../lib.js";
import { deleteCar, getCarById } from "../data/cars.js";
import { getUserData } from "../util.js";


const detailsTemplate = (data,isOwner,onDelete) => html`  <section id="details">
<div id="details-wrapper">
  <img id="details-img" src=${data.imageUrl} alt="example1" />
  <p id="details-title">${data.model}</p>
  <div id="info-wrapper">
    <div id="details-description">
      <p class="price">Price: €${data.price}</p>
      <p class="weight">Weight: ${data.weigth} kg</p>
      <p class="top-speed">Top Speed: ${data.speed} kph</p>
      <p id="car-description">
        ${data.about}</p>
    </div>

    ${isOwner ? html`
         <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      <a href="/edit" id="edit-btn">Edit</a>
      <a @click = ${onDelete}href="javascript-void(0)" id="delete-btn">Delete</a>
    </div>
  </div>
</div>
</section>`: null}
   
`

export async function detailsView(ctx){
    const id = ctx.params.id;

    const data = await getCarById(id);

    const userData = getUserData();

    const isOwner = userData ?._id == data._ownerId;


    render(detailsTemplate(data,isOwner,onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure?')

    if(!choice){
        return;
    }
    

    await deleteCar(id);

    page.redirect('/catalog')
    }
    
}