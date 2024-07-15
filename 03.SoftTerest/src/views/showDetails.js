const main = document.querySelector('main');
const homeDiv = document.querySelector('div[data-section="details"]')
export function showDetails(){

    main.replaceChildren(homeDiv);

}