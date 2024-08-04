import { getFactById,updateFact } from "../data/operationsTemplate.js"; 
import {html,page,render} from "../lib.js"
import { createFormHandler } from "../util.js";

const editTemplate = (data,onEdit) => html`
<section id="edit">
    <div class="form">
      <h2>Edit Fact</h2>
      <form @submit=${onEdit} class="edit-form">
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        .value = ${data.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value = ${data.imageUrl}
      />
      <textarea
      id="description"
      name="description"
      placeholder="Description"
      rows="10"
      cols="50"
      .value = ${data.description}
    ></textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="10"
      cols="50"
      .value = ${data.moreInfo}
    ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  </section>`
    
export async function showEditPage(ctx){
    const id = ctx.params.id;

    const fact = await getFactById(id);


    render(editTemplate(fact,createFormHandler(onEdit)));

    async function onEdit({
        category,
         'image-url': imageUrl,
          description,
        'additional-info': moreInfo}){

            if(!category || !imageUrl || !description || !moreInfo ){
                return alert('All fields are required!')
            }

            await updateFact(id,{
                category,
                imageUrl,
                description,
                moreInfo});
        
            page.redirect('/catalog/' + id)
        
    }
}