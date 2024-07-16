import { html,render } from "./node_modules/lit-html/lit-html.js";

const form = document.querySelector('form');
const rootDiv = document.getElementById('root')

form.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const {towns} = Object.fromEntries(formData);
    const arrTowns = towns.split(',');
    render(template(arrTowns),rootDiv);
}

const template = (data) => {
  return html`<ul>
    ${data.map(item => html`<li>${item}</li>`)}
  </ul>`;
};

