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
 const camisaContenido = document.querySelector(".suits__contenido");
 const remove = document.querySelector(".remove");
 
 showupElements.forEach(element => {
     element.addEventListener("click", function() {
         camisaContenido.classList.toggle("active");
     });
 });
 
 remove.addEventListener("click", function() {
     camisaContenido.classList.remove("active");
 });

 window.onload = function() {
    var loaderWrapper = document.querySelector('.loader-wrapper');
    setTimeout(function() {
      loaderWrapper.style.display = 'none'; // oculta el loader después de 5 segundos
    }, 3000);
  };
 
 