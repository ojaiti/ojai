
(function(){
  
 //Animacion para el header al momento de hacer scroll     
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



const menu = [
  {nombre: 'Asado de lomo', imagen:'asadodelomo.jpg'},
  {nombre: 'Medallones de mignon de cerdo', imagen:'medallonesdecerdo.jpg'},
  {nombre: 'Panini de huevo', imagen:'medallonestressalsas.jpg'},
  {nombre: 'Arroz árabe', imagen:'arrozarabe.jpg'},
  {nombre: 'Asado de cerdo al vino', imagen:'asadodecerdoalvino.jpg'},
  {nombre: 'Tacos ahogados', imagen:'tacosahogados.jpg'},
  {nombre: 'Camarones en aguachile', imagen:'camaronesenchile.jpg'},
  {nombre: 'Huevos al gratin', imagen:'huevosalgratin.jpg'},
  {nombre: 'Medallones a las tres salsas', imagen:'medallonestressalsas.jpg'}
];
let template = '';
let contenedorItems = document.querySelector('.contenedor-items');
menu.forEach(element => {
  console.log(element.nombre);
  template += `
  <div class="item"><h4>${element.nombre}</h4>
    <img class="p-alimentos" src="assets/img/recetas/${element.imagen}" alt="genetica">
  </div>
  `;
});
contenedorItems.innerHTML = template;
let items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('click', function(){
    console.log('hola');
  });
});
console.log(items);

})();


