import { searchMotor } from "../data/operationsTemplate.js"
import {html,render} from "../lib.js"
import { createFormHandler } from "../util.js"

const searchPageTemplate = (onSearch,results) => html`
<section id="search">
<div class="form">
  <h4>Search</h4>
  <form @submit =${onSearch} class="search-form">
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
        const result = await searchMotor(data.search)
        
        render(searchPageTemplate(createFormHandler(onSearch),result))

    }
}


function renderResults(result){
if(!result){
  return ''
} else if (result.length === 0){
return html`
 <div class="search-result">
 <h2 class="no-avaliable">No result.</h2>
  <!--If there are matches display a div with information about every motorcycle-->`
}

return result.map(motor => {
  return html`
   <div class="motorcycle">
  <img src=${motor.imageUrl} alt="example1" />
  <h3 class="model">${motor.model}</h3>
    <a class="details-btn" href="/catalog/${motor._id}">More Info</a>
</div>
  </div>`
})
}