import { render, html } from "./node_modules/lit-html/lit-html.js";
import { api } from "./requester.js";

const loadBtn = document.getElementById('loadBooks');
const URL = 'http://localhost:3030/jsonstore/collections/books';
const body = document.querySelector('body');

loadBtn.addEventListener('click', loadBooks);

window.onload = (event) => {
    renderPage([]);
};

async function loadBooks() {
    const response = await api.get(URL);
    const data = Object.values(response);
    console.log(data);
    renderPage(data);
}

function renderPage(data) {
    render(html`
        ${createTable(data)}
        ${createForm()}
    `, body);
    const form = document.getElementById('add-form');
    form.addEventListener('submit', createBook);
}


function createTable(data) {
    return html`
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                ${data.map(item => html`
                <tr>
                    <td>${item.title}</td>
                    <td>${item.author}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>`)}
            </tbody>
        </table>
    `;
}

function createForm() {
    return html`
        <form id="add-form">
            <h3>Add book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author...">
            <input id='submitBtn' type="submit" value="Submit">
        </form>
    `;
}





// form.addEventListener('submit',createBook);

async function createBook(event){
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const author = formData.get('author')
    const title = formData.get('title');

    if(author === '' || title === ''){
        return
    }

    let data = {
        author,
        title
    }

    const response = await api.post(URL,data)

    author = '';
    title = '';
}