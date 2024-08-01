import {html,render} from '../lib.js'
import { createSubmitHandler } from '../util.js'
import { page } from '../lib.js'
import { createItem } from "../data/operationsTemplate.js"

const createTemplate = (onCreate) => html`<<section id="create">
    <div class="form form-item">
      <h2>Share Your item</h2>
      <form @submit= ${onCreate} class="create-form">
        <input type="text" name="item" id="item" placeholder="Item" />
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type"
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`

export function createView(){
    render(createTemplate(createSubmitHandler(onCreate)))
}

async function onCreate({item, 'imageUrl': imageUrl,price,availability,type,description}){

    if(!item || !imageUrl || !price || !availability || !type || !description){
        return alert('All fields are required!')
    }

    await createItem(
        item,
        imageUrl,
        price,
        availability,
        type,
        description);

    page.redirect('/Market')
}