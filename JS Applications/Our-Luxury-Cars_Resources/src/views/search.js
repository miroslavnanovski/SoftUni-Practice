import { html,render } from "../lib.js"


export const searchTemplate = () => html`
<section id="search">
    <div class="form">
      <h4>Search</h4>
      <form class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <div class="search-result">
      <h2 class="no-avaliable">No result.</h2>>
`

//TODO details href above

export function searchView(){
    render(searchTemplate());
}