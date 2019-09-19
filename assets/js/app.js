
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
  {nombre: 'Asado de lomo', imagen:'asadodelomo.jpg', 
  ingredientes: [
    {item:'1/2 taza de chile chipotle'},
    {item:'1/2 taza de chile chipotle'},
  ]
  },
  {nombre: 'Medallones de mignon de cerdo', imagen:'medallonesdecerdo.jpg',
  ingredientes: [
    {item:'chile chipotle'},
    {item:'1/2 chipotle'},
  ]
  },
  {nombre: 'Panini de huevo', imagen:'medallonestressalsas.jpg',
  ingredientes: [
    {item:'chile chipotle'},
    {item:'1/2 chipotle'},
  ]
  },
  {nombre: 'Arroz árabe', imagen:'arrozarabe.jpg',
  ingredientes: [
    {item:'chile chipotle'},
    {item:'1/2 chipotle'},
  ]
  },
  {nombre: 'Asado de cerdo al vino', imagen:'asadodecerdoalvino.jpg',
  ingredientes: [
    {item:'chile chipotle'},
    {item:'1/2 chipotle'},
  ]
  },
  {nombre: 'Tacos ahogados', imagen:'tacosahogados.jpg',
  ingredientes: [
    {item:'chile chipotle'},
    {item:'1/2 chipotle'},
  ]
  },
  {nombre: 'Camarones en aguachile', imagen:'camaronesenchile.jpg',
  ingredientes: [
    {item:'chile chipotle'},
    {item:'1/2 chipotle'},
  ]
  },
  {nombre: 'Huevos al gratin', imagen:'huevosalgratin.jpg',
  ingredientes: [
    {item:'chile chipotle'},
    {item:'1/2 chipotle'},
  ]
  },
  {nombre: 'Medallones a las tres salsas', imagen:'medallonestressalsas.jpg',
  ingredientes: [
    {item:['chile chipotle 1111','chile chipotle 1111','chile chipotle 1111','chile chipotle 1111','chile chipotle 1111']},
    
  ]
  },
];

/* Ingredientes:
800 gr de lomo de cerdo
200 gr de tocino
50 gr de mantequilla
250 ml de media crema
1 taza de vino blanco
Sal y pimienta
300 gr de zanahoria
200 gr  de  ejote
1 cebolla blanca*/
ingredientes = [
  {ingre: ['600 gr. de lomo de cerdo',
          '200 gr. de zanahoria',
          '100 gr. de apio',
          '100 gr. de pimiento verde',
          'Sal y pimienta al gusto',
          ]},
  {ingre: ['800 gr de lomo de cerdo',
          '200 gr de tocino',
          '50 gr de mantequilla',
          '250 ml de media crema',
          '1 taza de vino blanco',
          'Sal y pimienta al gusto',
          '300 gr de zanahoria',
          '200 gr  de  ejote',
          '1 cebolla blanca',
          ]},
  {ingre: [1,2,3,4,5,6,7,8,9]},
  {ingre: [1,2,3,4,5,6,7,8,9]},
  {ingre: [1,2,3,4,5,6,7,8,9]}
];

/* function recorro($matriz){
  foreach($matriz as $key=>$value){
        if (is_array($value)){
        //si es un array sigo recorriendo
      echo 'key:'. $key;
      echo '<br>';
     recorro($value);
  }else{  
     //si es un elemento lo muestro
     echo $key.': '.$value ;
     echo '<br>';
  }

}
} */

let template = '';
if(document.querySelector('.contenedor-items')){
  let contenedorItems = document.querySelector('.contenedor-items');

listaPlatillos();
function listaPlatillos(){
    menu.forEach((element, index) => {
      contenedorItems.innerHTML += `
      <div class="item">
      <div class="headerItem">
      <h4>${element.nombre}</h4>
      <span class="btnCerrar" data-btnId=${index}>cerrar</span>
      </div>
            <img class="p-alimentos" data-id="${index}" src="assets/img/recetas/${element.imagen}" alt="genetica">
       <div class="descripcion">
           <h3 class="">Ingredientes:</h3>
            <ul class="parrafo"></ul> 
       </div>
        

        </div>
          `;
          

      
      
          
          
    });
    ingredientes.forEach((ele, index)=>{
      ele.ingre.forEach(ingrediente =>{
        console.log(ingrediente);
        document.querySelectorAll('.parrafo')[index].innerHTML += `<li>${ingrediente}</li>`; 
      })
    })
    
    /* let parrafos = document.querySelectorAll('.descripcion');
    parrafos.forEach(ele =>{
      ele.classList.add('ocultar');
    }); */
}


let items = document.querySelectorAll('.item');
items.forEach(item => {
  console.log('items', item);
  item.addEventListener('click', function(e){
    let elemento = e.target;
    let idElemento = e.target.dataset.id;
    console.log('tt',e.target.dataset.id)
    if(elemento.nodeName == 'IMG'){
     document.querySelectorAll('.descripcion')[idElemento].classList.toggle('ocultar');
     item.classList.add('itemFixed');
     document.querySelectorAll('.btnCerrar')[idElemento].classList.toggle('cerrar');
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
    console.log('doy click al span');
document.querySelectorAll('.item')[btnId].classList.remove('itemFixed');
document.querySelectorAll('.descripcion')[btnId].classList.remove('ocultar');/*  */
document.querySelectorAll('.btnCerrar')[btnId].classList.remove('cerrar');/*  */

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


