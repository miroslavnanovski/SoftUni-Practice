const main = document.querySelector('main');
const homeDiv = document.querySelector('div[data-section="home"]')
export function showHome(){

    main.replaceChildren(homeDiv);

}