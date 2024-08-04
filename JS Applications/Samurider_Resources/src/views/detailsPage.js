import { deleteFact, getFactById } from '../data/operationsTemplate.js';
import {html,render} from '../lib.js'
import { createFormHandler, getUserData } from '../util.js'
import { page } from '../lib.js';
import { getLikesByFactId, likeFact } from '../data/likes-optional.js';



const detailsTemplate = (data, likes ,hasUser, hasLiked, onLike, isOwner,onDelete) => html`
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${data.imageUrl} alt="example1" />
      <p id="details-category">${data.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">
            ${data.description}
            </p>
             <p id ="more-info">
             ${data.moreInfo}
                  </p>
        </div>

        <h3>Likes:<span id="likes">${likes}</span></h3>

         <!--Edit and Delete are only for creator-->
         ${hasUser ? html`
          
          ${isOwner ? html`
            <div id="action-buttons">
      <a href="/edit/${data._id}" id="edit-btn">Edit</a>
      <a @click = ${onDelete} href="javascript-void(0)" id="delete-btn">Delete</a>` : null}

       <!--Bonus - Only for logged-in users ( not authors )-->
       ${hasLiked ? null : html`
         <a @click =${onLike} href="javascript-void(0)" id="like-btn">Like</a>
       `}
    
    </div>` : null}
        
      </div>
  </div>
</section>
</section>
`

export async function showDetailsPage(ctx){
    const id = ctx.params.id;

    const [data,likesInfo] = await Promise.all([
      getFactById(id),
      getLikesByFactId(id)
    ])

    const userData = getUserData();

    const isOwner = userData ?._id == data._ownerId;
    const hasLiked = likesInfo.hasLiked || isOwner;

    render(detailsTemplate(data, likesInfo.likes ,Boolean(userData), hasLiked, onLike, isOwner,onDelete));

  async function onLike(){

    await likeFact(id)
    page.redirect('/catalog/' + id)
  }

    async function onDelete(){
        const choice = confirm('Are you sure?')

    if(!choice){
        return;
    }
    

    await deleteFact(id);

    page.redirect('/catalog')
    }
    
}
