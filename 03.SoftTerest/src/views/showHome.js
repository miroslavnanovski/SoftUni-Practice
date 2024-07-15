const main = document.querySelector('main');
const homeDiv = document.querySelector('div[data-section="home"]')
export function showHome(context){
    console.log(context)
    main.replaceChildren(homeDiv);

}