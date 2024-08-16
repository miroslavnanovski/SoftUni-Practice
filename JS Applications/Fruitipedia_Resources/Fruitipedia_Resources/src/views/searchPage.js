import { searchFruit } from "../data/operationsTemplate.js"
import {html,render} from "../lib.js"
import { createFormHandler } from "../util.js"

const searchPageTemplate = (onSearch,results) => html`
 <section id="search">

  <div class="form">
    <h2>Search</h2>
    <form @submit = ${onSearch} class="search-form">
      <input
        type="text"
        name="search"
        id="search-input"
      />
      <button class="button-list">Search</button>
    </form>
  </div>
${renderResults(results)}
        </section>`


export function showSearchPage(){
    render(searchPageTemplate(createFormHandler(onSearch)))

    async function onSearch(data, form){
        if(!data.search){
          return alert('Empty form!')
        }
        const result = await searchFruit(data.search)
        
        render(searchPageTemplate(createFormHandler(onSearch),result))

    }
}


function renderResults(result){
if(!result){
  return ''
} else if (result.length === 0){
return html`
    <div class="search-result">
   <p class="no-result">No result.</p>
    <!--If there are matches display a div with information about every fruit-->`
}

return result.map(fruit => {
  return html`
    <div class="fruit">
    <img src=${fruit.imageUrl} />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">T${fruit.description}</p>
    <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
  </div>
    </div>
          </section>`
})
}