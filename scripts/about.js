import { getDate } from "./utils.js"; 
getDate()

let ceoText = document.querySelector('.ceo-text')
console.log(ceoText)
let rotate = setTimeout(() =>{
ceoText.style.transform = "translateX(50px)"
}, 1500)

