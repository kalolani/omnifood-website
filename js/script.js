
const btnNavEl=document.querySelector(".mobile-nav");
const headerEl=document.querySelector(".header-1");

btnNavEl.addEventListener("click", function (){
  headerEl.classList.toggle("open-nav");

});