const main = document.querySelector('main');
const homeDiv = document.querySelector('div[data-section="login"]')
export function showLogin(){

    main.replaceChildren(homeDiv);

}