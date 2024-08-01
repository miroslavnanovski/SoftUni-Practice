import {html,render} from '../lib.js'
import { createSubmitHandler, getUserData } from '../util.js'
import { page } from '../lib.js';
import { deleteSolution, getSolutionById } from '../data/solutions.js';


const detailsTemplate = (data,isOwner,onDelete) => html` <section id="details">
    <div id="details-wrapper">
      <img
        id="details-img"
        src=${data.imageUrl}
        alt="example1"
      />
      <div>
        <p id="details-type">${data.type}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p id="description">
              ${data.description}
            </p>
            <p id="more-info">
             ${data.learnMore}
            </p>
          </div>
        </div>
        <h3>Like Solution:<span id="like">0</span></h3>
        ${isOwner ? html`<!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          <a href="/edit/${data._id}" id="edit-btn">Edit</a>
          <a @click = ${onDelete} href="javascript-void(0)" id="delete-btn">Delete</a>` : null}
    
          <!--Bonus - Only for logged-in users ( not authors )-->
          <a href="#" id="like-btn">Like</a>
        </div>
      </div>
    </div>
  </section>
`

export async function detailsView(ctx){

    const id = ctx.params.id;

    const data = await getSolutionById(id);

    const userData = getUserData();

    const isOwner = userData ?._id == data._ownerId;


    render(detailsTemplate(data,isOwner,onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure?')

    if(!choice){
        return;
    }
    

    await deleteSolution(id);

    page.redirect('/solutions')
    }
    
}
