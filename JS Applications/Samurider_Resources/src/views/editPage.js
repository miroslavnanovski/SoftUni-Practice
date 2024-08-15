import { getMotorById, updateMotor } from "../data/operationsTemplate.js"; 
import {html,page,render} from "../lib.js"
import { createFormHandler } from "../util.js";

const editTemplate = (data,onEdit) => html`
<section id="edit">
      <h2>Edit Motorcycle</h2>
      <div class="form">
        <h2>Edit Motorcycle</h2>
        <form @submit=${onEdit} class="edit-form">
          <input
            type="text"
            name="model"
            id="model"
            placeholder="Model"
            .value = ${data.model}
          />
          <input
            type="text"
            name="imageUrl"
            id="moto-image"
            placeholder="Moto Image"
            .value = ${data.imageUrl}
          />
          <input
          type="number"
          name="year"
          id="year"
          placeholder="Year"
          .value = ${data.year}
        />
        <input
        type="number"
        name="mileage"
        id="mileage"
        placeholder="mileage"
        .value = ${data.mileage}
      />
      <input
        type="number"
        name="contact"
        id="contact"
        placeholder="contact"
        .value = ${data.contact}
      />
        <textarea
          id="about"
          name="about"
          placeholder="about"
          rows="10"
          cols="50"
          .value = ${data.about}
        ></textarea>
          <button type="submit">Edit Motorcycle</button>
        </form>
    </div>
  </section>`
    
export async function showEditPage(ctx){
    const id = ctx.params.id;

    const motor = await getMotorById(id);


    render(editTemplate(motor,createFormHandler(onEdit)));

    async function onEdit({
      model,
      imageUrl, 
      year, 
      mileage,
      contact,
      about
    }){
            if(!model || !year || !imageUrl || !mileage || !contact || !about ){
                return alert('All fields are required!')
            }

            await updateMotor(id,{
              model,
              imageUrl, 
              year, 
              mileage,
              contact,
              about});
        
            page.redirect('/catalog/' + id)
        
    }
}