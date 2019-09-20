
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
  {nombre: 'Panini de huevo', imagen:'paninihuevo.jpg'},
  {nombre: 'Arroz árabe', imagen:'arrozarabe.jpg'},
  {nombre: 'Asado de cerdo al vino', imagen:'asadodecerdoalvino.jpg'},
  {nombre: 'Tacos ahogados', imagen:'tacosahogados.jpg'},
  {nombre: 'Camarones en aguachile', imagen:'camaronesenchile.jpg'},
  {nombre: 'Huevos al gratin', imagen:'huevosalgratin.jpg'},
  {nombre: 'Medallones a las tres salsas', imagen:'medallonestressalsas.jpg'},
];


let ingredientes = [
  {ingre: ['600 gr. de lomo de cerdo - ',
  '200 gr. de zanahoria - ',
  '100 gr. de apio - ',
  '100 gr. de pimiento verde - ',
  'Sal y pimienta al gusto - ',
  '<h5>Para la salsa:<h5>',
  '200 gr. de tomate salades - ',
  '150 gr. de cebolla blanca - ',
  '3 pz. de chile guajillo - ',
  '1 dte. de ajo - ',
  '1 cda. de sal -' ,
  '½ cda. de pimienta - '
]},
{ingre: ['800 gr de lomo de cerdo - ',
'200 gr de tocino - ',
'50 gr de mantequilla - ',
'250 ml de media crema - ',
'1 taza de vino blanco - ',
'Sal y pimienta al gusto - ',
'300 gr de zanahoria - ',
'200 gr  de  ejote - ',
  '1 cebolla blanca - ',
]},
{ingre: ['8 huevos - ',
'4 panes tipo pambazo - ',
'4 rebanadas de jamón de pavo - ',
'4 piezas de queso provolone - ',
'4 piezas de queso Philadelphia - ',
'Sal al gusto'
]},
{ingre: ['600 gr de camarón - ',
  '2 tazas de arroz - ',
  '3 cucharadas de aceite vegetal - ',
  '2 dientes de ajo - ',
  '1 cucharada de curry - ',
  'Sal y pimienta - ',
  '¼  de cebolla en trozos - ',
  '1 pimiento rojo']},
{ingre: ['800 gr de lomo de cerdo en rebanadas - ',
  '200 ml de  vino tinto - ',
  'Sal y pimienta - ',
  '2 dientes de ajo - ',
  'Comino']},
{ingre: ['800 gr de lomo de cerdo - ',
  '16 tortillas de harina - ',
  '300 gr de queso de Chihuahua - ',
  '<h5>Para la salsa:</h5> - ',
  '2 tomates - ',
  '½ cebolla blanca - ',
  '3 chiles jalapeños - ',
  'Sal y pimienta - ',
  '2 cucharadas de consomé de pollo - ',
  '2 tazas de agua']},
{ingre: ['300 gr de camarón - ',
  'Chiltepín al gusto - ',
  '4 chiles serranos - ',
  '1/2 cebolla morada - ',
  '400 gr de limón - ',
  '2 cucharadas de  Jugo Maggi - ',
  '2 cucharadas de salsa inglesa - ',
  '200 ml de Clamato - ',
  'Tostadas o totopos']},
{ingre: ['6 huevos - ',
  '200 gr de chorizo - ',
  '200 gr de queso de Chihuahua - ',
  '50 gr de mantequilla - ',
  '1 cucharada de consomé de pollo - ',
  '<h5>Platillo para 3 personas.</h5>']},
{ingre: ['800 gr de lomo de cerdo - ',
  '<h5>Para la salsa verde:</h5>',
  '½ mazo de cilantro - ',
  'Aceite vegetal - ',
  'Sal y pimienta - ',
  '<h5>Para la salsa blanca:</h5>',
  '6 cucharadas de crema acida - ',
  '100 gr de queso Philadelphia - ',
  '2 cucharadas de queso parmesano seco - ',
  'Sal y pimienta - ',
  '<h5>Para la salsa roja:<h5>',
  '100 ml de pure de tomate - ',
  '2 chiles pasilla - ',
  '1 cucharada de consomé de pollo - ',
  '<h5>Fetuccini primavera, para acompañar:<h5>',
  '200 gr de pasta fetuccini - ',
  '50 gr de mantequilla - ',
  'Queso parmesano seco al gusto - ',
  '<h5>Platillo para 4 personas.</h5>']}
];
let preparacion = [
  {prep: 'Para la salsa, sofría en un sartén todos los ingredientes, excepto los chiles, con un poco de aceite vegetal. Aparte, ase los chiles sin quemarlos para que la salsa no quede negra. Licue todo con un poco de agua.Corte el lomo en tres partes, sacando el centro a cada trozo para que quede como un tazón. Corte la carne que separó, la zanahoria, el apio y los pimientos en cuadritos, y áselos en un sartén.Ponga a asar por todos lados los trozos de lomo con sal y pimienta. Ya que estén bien cocinados, rellénelos con la mezcla anterior. Monte en un plato sobre la salsa.'},
  {prep: 'Corta el lomo de cerdo en forma de medallones.  En un sartén pon a calentar la mantequilla. Cuando ya esté caliente, agrega los medallones para cocinarlos a fuego lento. Una vez cocinados a ¾ se agrégale el vino blanco para que se reduzca. Retira los medallones y en el jugo que queda, pon la media crema con cebolla blanca. En otro sartén saltea la zanahoria con el ejote y sazona con sal, pimienta y orégano. Al servir, coloca los medallones de mignon en el plato, bañándolos con la salsa que salió de la carne y acompáñalos con la verdura.'},
  {prep: 'Para la salsa, sofría en un sartén todos los ingredientes, excepto los chiles, con un poco de aceite vegetal. Aparte, ase los chiles sin quemarlos para que la salsa no quede negra. Licue todo con un poco de agua.Corte el lomo en tres partes, sacando el centro a cada trozo para que quede como un tazón. Corte la carne que separó, la zanahoria, el apio y los pimientos en cuadritos, y áselos en un sartén.Ponga a asar por todos lados los trozos de lomo con sal y pimienta. Ya que estén bien cocinados, rellénelos con la mezcla anterior. Monte en un plato sobre la salsa.'},
  {prep: 'Para la salsa, sofría en un sartén todos los ingredientes, excepto los chiles, con un poco de aceite vegetal. Aparte, ase los chiles sin quemarlos para que la salsa no quede negra. Licue todo con un poco de agua.Corte el lomo en tres partes, sacando el centro a cada trozo para que quede como un tazón. Corte la carne que separó, la zanahoria, el apio y los pimientos en cuadritos, y áselos en un sartén.Ponga a asar por todos lados los trozos de lomo con sal y pimienta. Ya que estén bien cocinados, rellénelos con la mezcla anterior. Monte en un plato sobre la salsa.'},
  {prep: 'Para la salsa, sofría en un sartén todos los ingredientes, excepto los chiles, con un poco de aceite vegetal. Aparte, ase los chiles sin quemarlos para que la salsa no quede negra. Licue todo con un poco de agua.Corte el lomo en tres partes, sacando el centro a cada trozo para que quede como un tazón. Corte la carne que separó, la zanahoria, el apio y los pimientos en cuadritos, y áselos en un sartén.Ponga a asar por todos lados los trozos de lomo con sal y pimienta. Ya que estén bien cocinados, rellénelos con la mezcla anterior. Monte en un plato sobre la salsa.'},
  {prep: 'Para la salsa, sofría en un sartén todos los ingredientes, excepto los chiles, con un poco de aceite vegetal. Aparte, ase los chiles sin quemarlos para que la salsa no quede negra. Licue todo con un poco de agua.Corte el lomo en tres partes, sacando el centro a cada trozo para que quede como un tazón. Corte la carne que separó, la zanahoria, el apio y los pimientos en cuadritos, y áselos en un sartén.Ponga a asar por todos lados los trozos de lomo con sal y pimienta. Ya que estén bien cocinados, rellénelos con la mezcla anterior. Monte en un plato sobre la salsa.'},
  {prep: 'Para la salsa, sofría en un sartén todos los ingredientes, excepto los chiles, con un poco de aceite vegetal. Aparte, ase los chiles sin quemarlos para que la salsa no quede negra. Licue todo con un poco de agua.Corte el lomo en tres partes, sacando el centro a cada trozo para que quede como un tazón. Corte la carne que separó, la zanahoria, el apio y los pimientos en cuadritos, y áselos en un sartén.Ponga a asar por todos lados los trozos de lomo con sal y pimienta. Ya que estén bien cocinados, rellénelos con la mezcla anterior. Monte en un plato sobre la salsa.'},
  {prep: 'Para la salsa, sofría en un sartén todos los ingredientes, excepto los chiles, con un poco de aceite vegetal. Aparte, ase los chiles sin quemarlos para que la salsa no quede negra. Licue todo con un poco de agua.Corte el lomo en tres partes, sacando el centro a cada trozo para que quede como un tazón. Corte la carne que separó, la zanahoria, el apio y los pimientos en cuadritos, y áselos en un sartén.Ponga a asar por todos lados los trozos de lomo con sal y pimienta. Ya que estén bien cocinados, rellénelos con la mezcla anterior. Monte en un plato sobre la salsa.'},
  {prep: 'Para la salsa, sofría en un sartén todos los ingredientes, excepto los chiles, con un poco de aceite vegetal. Aparte, ase los chiles sin quemarlos para que la salsa no quede negra. Licue todo con un poco de agua.Corte el lomo en tres partes, sacando el centro a cada trozo para que quede como un tazón. Corte la carne que separó, la zanahoria, el apio y los pimientos en cuadritos, y áselos en un sartén.Ponga a asar por todos lados los trozos de lomo con sal y pimienta. Ya que estén bien cocinados, rellénelos con la mezcla anterior. Monte en un plato sobre la salsa.'}
];

let template = '';
if(document.querySelector('.contenedor-items')){
  let contenedorItems = document.querySelector('.contenedor-items');

listaPlatillos();
function listaPlatillos(){
    menu.forEach((element, index) => {
      contenedorItems.innerHTML += `
      <div class="item">
        <div class="headerItem">
          <h5>${element.nombre}</h5>
          <span class="btnCerrar" data-btnId=${index}>cerrar</span>
        </div>
        <div class="flex-horizontal">
            <img class="p-alimentos" data-id="${index}" src="assets/img/recetas/${element.imagen}" alt="genetica">
        <div class="contentDesPrep descripcion" >
        <div>
            <h5 class="">Ingredientes:</h5>
            <div class="parrafo"></div> 
        </div>
        <div class="contentPreparacion">
          <h5>Preparacion</h5>
          <div class="preparacion">
          </div>
        </div>
        </div>
      </div>
          `;
          

      
      
          
          
    });
    ingredientes.forEach((ele, index)=>{

      ele.ingre.forEach(ingrediente =>{
        
          document.querySelectorAll('.parrafo')[index].innerHTML += `<span class="item1">${ingrediente}</span>`;

        
      })
    })
    preparacion.forEach((ele, index)=>{
        document.querySelectorAll('.preparacion')[index].innerHTML += `<p>${ele.prep}</p>`;/*  preparacion */
    })
    
    /* let parrafos = document.querySelectorAll('.descripcion');
    parrafos.forEach(ele =>{
      ele.classList.add('ocultar');
    }); */
}


let items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('click', function(e){
    let elemento = e.target;
    let idElemento = e.target.dataset.id;
    console.log('tt',e.target.dataset.id)
    if(elemento.nodeName == 'IMG'){
     document.querySelectorAll('.descripcion')[idElemento].classList.toggle('ocultar');
     item.classList.add('itemFixed');
     document.querySelectorAll('.btnCerrar')[idElemento].classList.toggle('cerrar');
     document.querySelectorAll('.preparacion')[idElemento].classList.add('mostrar');
     document.querySelectorAll('.p-alimentos')[idElemento].classList.add('imgScala');
    }

    
    /*  let parrafos = document.querySelectorAll('.parrafo');
    parrafos.forEach(ele =>{
      ele.classList.remove('ocultar');
    }); */
  });
});
}
let btnsCerrar = document.querySelectorAll('.btnCerrar');
btnsCerrar.forEach(spn=>{
  spn.addEventListener('click', function(e){
    let btnId = e.target.dataset.btnid;
document.querySelectorAll('.item')[btnId].classList.remove('itemFixed');
document.querySelectorAll('.descripcion')[btnId].classList.remove('ocultar');/*  */
document.querySelectorAll('.btnCerrar')[btnId].classList.remove('cerrar');/*  */
document.querySelectorAll('.p-alimentos')[btnId].classList.remove('imgScala');


  });
});


/* Menu hamburguesa */
let btnCustom = document.getElementById('btnCustom').addEventListener('click', function(){
  
  let bars = document.querySelectorAll('.b-bar');
  bars.forEach(element =>{
    element.classList.toggle('activo');
  });
});






})();


