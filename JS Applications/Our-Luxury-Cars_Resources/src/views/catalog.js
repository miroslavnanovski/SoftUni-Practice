import { getAllCars } from "../data/cars.js"
import { html,render } from "../lib.js"
import { singleCarTemplate } from "./partials/car.js"



const carsTemplate = (cars) => html`
<<h3 class="heading">Our Cars</h3>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${cars.length ? cars.map(singleCarTemplate) : html`<<h3 class="nothing">Nothing to see yet</h3>`}
  </section>
`


export async function catalogView(){

    const cars = await getAllCars()
    
    render(carsTemplate(cars));

}