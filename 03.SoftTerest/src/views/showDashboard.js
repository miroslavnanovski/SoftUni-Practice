const main = document.querySelector('main');
const homeDiv = document.querySelector('div[data-section="dashboard"]')
export function showDashboard(){

    main.replaceChildren(homeDiv);

}