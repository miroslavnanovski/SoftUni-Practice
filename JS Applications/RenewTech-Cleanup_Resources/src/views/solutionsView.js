import { getAllSolutions } from "../data/solutions.js";
import {html,render,page} from "../lib.js"
import {singleSolutionTemplate} from "../views/partials/solution.js"



const solutionsTemplate = (solutions) => html` <h2>Solutions</h2>
  <section id="solutions">
    <!-- Display a div with information about every post (if any)-->
   
    ${solutions.length ? solutions.map(singleSolutionTemplate) : html` <h2 id="no-solution">No Solutions Added.</h2>`}
  </section>
   <!-- Display an h2 if there are no posts -->
   
`

export async function solutionsView(){
    const solutions = await getAllSolutions();

    render(solutionsTemplate(solutions));
}

