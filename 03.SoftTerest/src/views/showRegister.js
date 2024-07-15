const main = document.querySelector('main');
const homeDiv = document.querySelector('div[data-section="register"]')
export function showRegiser(){

    main.replaceChildren(homeDiv);

}