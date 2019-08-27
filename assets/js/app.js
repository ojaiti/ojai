/*( function(){
    var win = $(window);
    var pos = 300;
    win.scroll(function (e) {
        if (win.scrollTop() > pos){
           $('#navbar').addClass('styckyNavDown');
          $("#navbar").removeClass('styckyNavUp');

        }
        else {
          $('#navbar').removeClass('styckyNavDown');
          $("#navbar").addClass('styckyNavUp');
        }
      });

      $('#bs4-slide-carousel').carousel({
        interval: 3000
      });

  
})();
 */
mail.style.display = 'none';
(function(){


 /* Botones formulario */

let form = document.getElementById("form");
 let enviar = document.getElementById("enviar");
let mail =  document.getElementById("mail");
mail.style.display = 'none';

let nombre = document.getElementById('nombre'),
    correo = document.getElementById('correo'),
    telefono = document.getElementById('tel')
    ciudad = document.getElementById('ciudad'),
    pais = document.getElementById('pais'),
    mensaje = document.getElementById('mensaje');
form.addEventListener('submit', function(e){
if(nombre.value == '' || nombre.length ==  0 ||){
  alert('no puedes seguir');
}
if()

  e.preventDefault();
});

enviar.addEventListener('click', function(){
  document.getElementById("enviar").style.display = "none";
  mail.style.display = 'inline-block';
});

mail.addEventListener('click', function(){
  document.getElementById("mail").style.display = "none";
  enviar.style.display = 'inline-block';
});
      
var lastScrollTop = 0;
var navbar = document.getElementById("navbar");
var espacio92 = document.querySelector('.espacio92');
window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop && st > 300){
        espacio92.style.display = 'none';
        navbar.classList.add("styckyNavDown");
   } else {
    espacio92.style.display = 'block';
    navbar.classList.remove("styckyNavDown");
   }
   if(st < 200){
     navbar.position = 'relative';
   }
   lastScrollTop = st;
   espacio92.style.display = 'none';







}, false);

})();


