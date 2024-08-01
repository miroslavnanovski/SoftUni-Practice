import { html, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const exampleTemplate = (submitHandler) => html`
<h2>Hello, exam!
    <form @submit=${submitHandler}>
        <input name ="myData">
        <input type = "submit" value = "submit">
    </form>

</h2>`

export function exampleView(ctx){
    render(exampleTemplate(createSubmitHandler(onSubmit)));
}


function onSubmit(data,form){
    console.log(data);
    
    form.reset();
}