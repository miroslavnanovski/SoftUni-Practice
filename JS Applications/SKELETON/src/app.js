import { page } from "./lib.js";
import { exampleView } from "./views/example.js";


import * as api from "./data/api.js"
import * as userApi from './data/user.js'

window.api = api;
window.userApi = userApi;

page('/', exampleView())
page.start();


