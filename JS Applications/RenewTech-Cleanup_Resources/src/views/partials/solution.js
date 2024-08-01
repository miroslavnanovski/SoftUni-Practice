import {html} from "../../lib.js"

export const singleSolutionTemplate = (data) => html`
  <div class="solution">
      <img src=${data.imageUrl} />
      <div class="solution-info">
        <h3 class="type">${data.type}</h3>
        <p class="description">
          ${data.description}
        </p>
        <a class="details-btn" href="/solutions/${data._id}">Learn More</a>
      </div>
    </div>`;