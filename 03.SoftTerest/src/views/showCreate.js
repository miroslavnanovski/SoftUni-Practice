const main = document.querySelector('main');
const homeDiv = document.querySelector('div[data-section="create"]')
export function showCreate(){

    main.replaceChildren(homeDiv);

}