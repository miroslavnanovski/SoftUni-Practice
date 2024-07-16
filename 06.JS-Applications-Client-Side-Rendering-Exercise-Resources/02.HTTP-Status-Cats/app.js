import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const sections = document.getElementById("allCats");

  render(template(cats), sections);


function template(data) {
  return html`
  <ul>
   ${cats.map(cat => html` <li>
      <img
        src="./images/${cat.imageLocation}.jpg"
        width="250"
        height="250"
        alt="Card image cap"
      />
      <div class="info">
        <button @click=${showStatus} class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
          <h4>Status Code: ${cat.statusCode}</h4>
          <p>${cat.statusMessage}</p>
        </div>
      </div>
    </li>`)}
  </ul>`;
}

function showStatus(event) {
    const button = event.target;
    const statusDiv = button.nextElementSibling;

    if(button.textContent === 'Show status code'){
        button.textContent = 'Hide status code'
    } else {
        button.textContent ='Show status code'
    }

    if (statusDiv.style.display === 'none') {
        statusDiv.style.display = 'block';
    } else {
        statusDiv.style.display = 'none';
    }
}