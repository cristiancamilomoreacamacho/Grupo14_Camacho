// Animación al hacer scroll

window.addEventListener("scroll",()=>{

const cards=document.querySelectorAll(".modern-card");

cards.forEach(card=>{
const top=card.getBoundingClientRect().top;
if(top<window.innerHeight-50){
card.style.opacity="1";
card.style.transform="translateY(0)";
}
});

});