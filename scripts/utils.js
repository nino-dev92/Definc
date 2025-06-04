let date = document.querySelector('.date-span');

export function getDate(){
let today = new Date();
date.innerHTML = today.getFullYear()
}