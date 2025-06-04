import { getDate } from "./utils.js"; 
getDate()

let detailsOne = document.querySelector('.js-details-one')
let detailsTwo = document.querySelector('.js-details-two')
window.addEventListener("scroll", () =>{
if (window.pageYOffset > 390){
    detailsOne.style = "opacity:1"
    detailsOne.style = "transform: translateX(0px)"
   }
if (window.pageYOffset < 390){
    detailsOne.style = "opacity:0"
}
if(window.pageYOffset < 630){
detailsTwo.style = "opacity:0"
}
if(window.pageYOffset > 645){
detailsTwo.style = "opacity:1"
}

})
window.removeEventListener('scroll')
