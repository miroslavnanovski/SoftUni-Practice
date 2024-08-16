import {getFruitById,updateFruit} from "../data/operationsTemplate.js";
import { html, page, render } from "../lib.js";
import { createFormHandler } from "../util.js";

const editTemplate = (data, onEdit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Fruit</h2>
      <form @submit=${onEdit} class="edit-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Fruit Name"
          .value=${data.name}
        />
        <input
          type="text"
          name="imageUrl"
          id="Fruit-image"
          placeholder="Fruit Image URL"
          .value=${data.imageUrl}
        />
        <textarea
          id="fruit-description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
          .value=${data.description}
        ></textarea>
        <textarea
          id="fruit-nutrition"
          name="nutrition"
          placeholder="Nutrition"
          rows="10"
          cols="50"
          .value=${data.nutrition}
        ></textarea>
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function showEditPage(ctx) {
  const id = ctx.params.id;

  const fruit = await getFruitById(id);

  render(editTemplate(fruit, createFormHandler(onEdit)));

  async function onEdit({ name, imageUrl, description, nutrition }) {

    if (!name || !imageUrl || !description || !nutrition) {
      return alert("All fields are required!");
    }

    await updateFruit(id, {
      name,
      imageUrl,
      description,
      nutrition,
    });

    page.redirect("/catalog/" + id);
  }
}
