import {html,render} from '../lib.js'
import {login} from '../data/user.js'
import {createFormHandler} from "../util.js"
import { page } from '../lib.js';
import { updateNavigation } from '../util.js'

const loginPageTemplate = (onLogin) => html`<section id="login">
<div class="form">
  <h2>Login</h2>
  <form @submit = ${onLogin} class="login-form">
    <input type="text" name="email" id="email" placeholder="email" />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="password"
    />
    <button type="submit">login</button>
    <p class="message">
      Not registered? <a href="/register">Create an account</a>
    </p>
  </form>
</div>
</section>

`

export function showloginPage(){
  render(loginPageTemplate(createFormHandler(onLogin)));

}

// Check what login requirements are: username or email

async function onLogin({email, password}){

  if(!email || !password){
    return alert('All fields are required!')
  }

  await login(email,password);

  updateNavigation();
  page.redirect('/')

}