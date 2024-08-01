import {html,render} from '../lib.js'
import {register} from '../data/user.js'
import { createSubmitHandler } from '../util.js';
import { page } from '../lib.js';

const registerTemplate = (onRegister) => html` <section id="register">
    <div class="form">
      <img class="border" src="/images/border.png" alt="">
      <h2>Register</h2>
      <form @submit = ${onRegister}class="register-form">
        <input type="text" name="email" id="register-email" placeholder="email"/>
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
   
  </section>
`

export function registerView(){
  render(registerTemplate(createSubmitHandler(onRegister)));

}

async function onRegister({email, password, 're-password': repass }){

  if(!email || !password){
    return alert('All fields are required!')
  }

  if(password != repass){
    return alert("Passwords don't match!")
  }

  await register(email,password);

  updateNav();
  page.redirect('/')

}