import { api } from "./api/requester.js";
import { html,render } from "./node_modules/lit-html/lit-html.js"

function solve() {
   const url = 'http://localhost:3030/jsonstore/advanced/table'
   const tbody = document.querySelector('tbody');
   const inputField = document.getElementById('searchField');

window.onload = (event) => {
loadInfo();
 };

   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

     const rows = document.querySelectorAll('tbody tr')
     const rowsArr = Array.from(rows);
     clearInput();
      
     rowsArr.forEach(item => {
      let rowText = item.innerText.toLowerCase();
      if(rowText.includes(inputField.value.toLowerCase()) && inputField.value !== ''){
         item.classList.add('select')
      }
     })
     inputField.value = ''

   }

   function clearInput() {
      const rows = tbody.querySelectorAll('tr.select');
      rows.forEach(row => {
        row.classList.remove('select');
      });
    }

   function createRow(data){
      return data.map(item => 
       html`
       <tr>
          <td>${item.firstName} ${item.lastName}</td>
          <td>${item.email}</td>
          <td>${item.course}</td>
       </tr>
       `
      )
    }
    
    async function loadInfo(){
    let data = await api.get(url)
    data = Object.values(data);
    render(createRow(data),tbody)
    
    }
}



solve()