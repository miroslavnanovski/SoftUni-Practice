import { api } from "./requester.js";
import {html,render} from "./node_modules/lit-html/lit-html.js"

const menuItems = document.getElementById('menu');
const textInput = document.getElementById('itemText');

const form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    const addBtn = form.querySelector('input[type="submit"]')
    const textInput = form.querySelector('input[type="text"]')

    addBtn.addEventListener('click',addItem(textInput.value));
})


window.onload = (event) => {
    initialGet()
  };
const URL = 'http://localhost:3030/jsonstore/advanced/dropdown';

async function initialGet(){
    let data = await api.get(URL)
    data = Object.values(data);
    render(createOption(data),menuItems)
   
}

async function addItem(text) {
    text = {
        text
    }
    await api.post(URL,text);
    textInput.value = ''
    initialGet();

}

function createOption(data){
    return data.map(item => html`<option value=${item._id}>${item.text}</option>`)
}