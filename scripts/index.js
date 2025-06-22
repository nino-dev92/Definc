import { getDate } from "./utils.js"; 
getDate()

let detailsOne = document.querySelector('.js-details-one')
let detailsTwo = document.querySelector('.js-details-two')
let detailsThree = document.querySelector('.js-details-three')

window.addEventListener("scroll", () =>{
if (window.scrollY > 390){
    detailsOne.style = "opacity:1"
    detailsOne.style = "transform: translateX(0px)"
   }
else if (window.scrollY < 390){
    detailsOne.style = "opacity:0"
}
if(window.scrollY < 1000){
detailsTwo.style = "opacity:0"
}
else if(window.scrollY > 1000){
detailsTwo.style = "opacity:1"
detailsTwo.style = "transform: translateX(0px)"
}
if (window.scrollY > 1650){
    detailsThree.style = "opacity:1"
    detailsThree.style = "transform: translateX(0px)"
   }
else if (window.scrollY < 1710){
    detailsThree.style = "opacity:0"
}
})


window.removeEventListener('scroll')