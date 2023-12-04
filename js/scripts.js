 /* const showup = document.querySelector(".producto");

const div = document.querySelector(".camisa_contenido");
const remove = document.querySelector(".remove");
showup.onclick = function() {
   div.classList.toggle("active");
 };
remove.addEventListener("click", function() {
    showup.click();
 }) */


 const showupElements = document.querySelectorAll(".producto");
 const camisaContenido = document.querySelector(".camisa__contenido");
 const remove = document.querySelector(".remove");
 
 showupElements.forEach(element => {
     element.addEventListener("click", function() {
         camisaContenido.classList.toggle("active");
     });
 });
 
 remove.addEventListener("click", function() {
     camisaContenido.classList.remove("active");
 });
 
 