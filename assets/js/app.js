(function(){
  var topMenu = document.querySelector('.top-menu')
/* if(document.querySelector('.aviso')){

  document.querySelector('.aviso').classList.add('activo');
}
$('body.aviso').removeClass('activo') */
topMenu.addEventListener('click', function(){
  window.scrollTo(0, 0);
})
/* Este codigo agrega un la clase active para saber en que seccion de la pagina te encuentras */
$('body.aviso .navegacion-principal li a:contains("aviso")').addClass('active')
$('body.distribuciones .navegacion-principal li a:contains("distribuciones")').addClass('active')
$('body.presentaciones .navegacion-principal li a:contains("presentaciones")').addClass('active')
$('body.alimentos .navegacion-principal li a:contains("alimentos")').addClass('active')
$('body.productos .navegacion-principal li a:contains("productos")').addClass('active')
$('body.nosotros .navegacion-principal li a:contains("nosotros")').addClass('active')
$('body.contacto .navegacion-principal li a:contains("contacto")').addClass('active')


/* funcion que acciona los contadores de la seccion distribucion */

function accionarContadores(){
  const contadores = document.querySelectorAll('.cont');
  const speed = 15;
  contadores.forEach(contador => {

      const updateCount = () => {
        const target = +contador.getAttribute('data-to');
        const count = +contador.innerText;
      /*   const inc = target / speed; */
        const sum = (target / speed)
        const inc = sum / 2;

        var valorRound = Math.round(count + inc);
        if(count < target) {
          contador.innerText = valorRound;
          setTimeout(updateCount, 300)
        }else{
          contador.innerText = target;
        }
      }
      updateCount();
    });
}

  /* Obtener coordenadas */


function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
 
var elemento = document.querySelector('.content-titles');

var x = getOffset(elemento).left;
var y = getOffset(elemento).top;
/* console.log(x,y) */


  //este codigo obtiene la altura del header y se lo asigna al elemento

 var alturaHeader = document.getElementById("header").clientHeight;
 window.scrollTo(0,-alturaHeader);

 var html = document.getElementsByTagName("html")[0];

 if(document.getElementsByClassName("aparece")){
  apareceScroll();

 }

  function apareceScroll(){
    var anim = 700;
    opacity: 0;
    
    var elemtoAparece = document.getElementsByClassName("aparece");
    var balls = document.getElementsByClassName("ball");
    document.addEventListener("scroll", function(){
      var topVent = html.scrollTop;
      for(var i=0; i < elemtoAparece.length; i++){
        /* var x = getOffset(elemento).left; */
          var element_y = getOffset(elemtoAparece[i]).top;
        /* var topElemAparece = elemtoAparece[i].offsetTop; */
        if(topVent > element_y - anim){
          elemtoAparece[i].classList.add("animAparece")
        }
      }

    })
  }

  
  document.getElementById("relleno").style.height = alturaHeader+"px";
 //Animacion para el header al momento de hacer scroll     
var lastScrollTop = 0;
var navbar = document.getElementById("navbar");
var espacio92 = document.querySelector('.espacio92');

/* posicion contadores */

/* alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height)  */
/* Evento scroll */
window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   var altura = screen.height;


    if(document.querySelector('.grid-sucursales')){

      var sucursales = document.querySelector('.grid-sucursales');
      var posicionSucursales = sucursales.getBoundingClientRect();

      if(st > posicionSucursales.height - 400 && document.querySelector('#section-contadores')){
        accionarContadores()
    
       }
    
    }
   
   if (st > lastScrollTop && st > 100){
//obtener la altura de la pantalla
        espacio92.style.display = 'none';
        /* navbar.classList.add("styckyNavDown"); */
   } else {
    espacio92.style.display = 'block';
    navbar.classList.remove("styckyNavDown");
   }
   if(st < 200){
     navbar.position = 'relative';
   }
   lastScrollTop = st;
   espacio92.style.display = 'none';
    this.console.log(st)
   if (st > 800){
    topMenu.classList.add('show-up')
   }
   else{
    topMenu.classList.remove('show-up')
   }

}, false);
/* Este contenido alimenta el index en la seccion de recetas */
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
  {prep: 'Prepara el huevo tipo torta y colócalo en el pan, junto con el jamon y los quesos provolone y Philadelphia. Mete todo completo en una waflera hasta que se dore el pan. Aplasta la waflera y deja que se gratine el queso y está listo para disfrutarse. Los paninis se acompañan perfectamente con una ensalada de frutas'},
  {prep: 'Lava el arroz con agua fría y deja escurrir. En una cacerola de base extendida, coloca el aceite y fríe los ajos; después retíralos y pon el arroz a freír. Coloca la sal, pimienta y curry y agrega 2 tazas de agua hirviendo. Baja el fuego al mínimo, agrega los camarones y deja cocinar por veinte minutos. Sirve esta delicia acompañada de pan.'},
  {prep: 'Pon aceite en una olla y dora los filetes de lomo. Cuando estén a medio cocer, agrega los ajos con sal, pimienta y comino al gusto. Por último pon el vino tinto y baja el fuego para que se cocine lento. Sirve en su jugo acompañado por ensalada verde y a disfrutar.'},
  {prep: 'Primero debes hacer unas quesadillas con las tortillas, la carne y el queso. Preparación de la salsa: Con un rallador de queso, ralla los tomates y la cebolla. En un sartén guisa con aceite vegetal, primero la cebolla y el chile picado, seguido del tomate hasta que se frían, agrega el agua y deja cocinar. Sazona con sal y pimienta. Una vez que hierva, agrega el consomé de pollo. En un plato hondo coloca 3 tacos y báñalos con la salsa acompañados con cebollitas cambray asadas, chiles toreados y guacamole.'},
  {prep: 'Abre los camarones por el lomo y límpialos perfectamente.  Sazónalos con sal y pimienta. En un plato o molcajete, muele los chiltepines y la mitad de los chiles serranos. Agrégale esta mezcla a los camarones  junto con la cebolla morada en tiras y la otra mitad de los chiles serranos. Debes agregar el jugo de limón hasta que se tapen los camarones y ponerlos en el refrigerador por 30 minutos. Una vez listos, es el momento de ponerle el Jugo Maggi, la salsa inglesa y el Clamato. Mezcla muy bien y disfrútalo con tostadas o totopos.'},
  {prep: 'En un refractario para horno, embarra la mantequilla y vierte los huevos batidos con consomé sal y pimienta. Ponlo en el horno a 180 grados, hasta que quede cocinado a tres cuartos. En un sartén guisa el chorizo y colócalo encima del huevo junto con el queso rayado, hasta que se termine de cocinar y se gratine el queso. Sírvelo en pequeñas rebanadas y a disfrutar.'},
  {prep: 'Untar cada medallón con la mostaza y la sal (por todos lados). Picar la cebolla. Poner una sartén al fuego alto con el aceite. Dorar bien cada medallón por ambos lados. Una vez dorados, poner el fuego en bajo y cocer durante 10 minutos. Retirar del fuego y reservar. Retirar casi todo el aceite de la sartén, dejando sólo un poco. Sofreir la cebolla durante unos 5 minutos. Adicionar la harina y revolver bien con una cuchara de madera. Adicionar el agua, el vino y el jugo de naranja. Mantener en el fuego medio, revolviendo con frecuencia, durante unos 5 minutos (hasta que la salsa tenga una consistencia espesa). Agregar el perejil y los medallones, bañándolos con la salsa. Calentar durante cinco minutos. Servir, poniendo un poco de la salsa sobre cada medallón. Para preparar las salsas, deberas hacerlas por separado de una por una, licuando sus ingrediente. Lo mismo  debes hacer para la salsa de la pasta. Cocina la pasta según las instrucciones del paquete y revuuélvela con su salsa. Una vez terminado esto, en un sartén debes guisar el lomo de cerdo, previamente cortado en medallones. Para servir, coloca 3 medallones en un plato y baña cada uno con una salsa diferente, respecto a los colores de nuestra bandera y acompáñalos con el fetuccini. Ahora tienes un platillo riquísimo y muy vistoso.'}
];

let template = '';
if(document.querySelector('.contenedor-items')){
  let contenedorItems = document.querySelector('.contenedor-items');

listaPlatillos();
function listaPlatillos(){
    menu.forEach((element, index) => {
      contenedorItems.innerHTML += `
      <div class="contentItem" data-btnId=${index} >
      <div class="item" data-btnId=${index}>
        <div class="headerItem">
          <h5>${element.nombre}</h5>
          <span class="btnCerrar" data-btnId=${index} data-id="${index}">x</span>
        </div>
        <div>
            <img class="p-alimentos" data-id="${index}" src="assets/img/recetas/${element.imagen}" alt="OJAI">
        <div class="contentDesPrep descripcion" >
        <div>
            <h5 class="">Ingredientes:</h5>
            <div class="parrafo"></div> 
        </div>
        <div class="contentPreparacion">
          <h5>Preparacion</h5>
          <div class="preparacion" data-id="${index}">
          </div>
        </div>
        </div>
      </div>
      </div>
          `;
          
    });
    ingredientes.forEach((ele, index)=>{
      ele.ingre.forEach(ingrediente =>{
          document.querySelectorAll('.parrafo')[index].innerHTML += `<i class="item1">${ingrediente}</i>`;
      })
    })
    preparacion.forEach((ele, index)=>{
        document.querySelectorAll('.preparacion')[index].innerHTML += `<p>${ele.prep}</p>`;/*  preparacion */
    })
    
} /* Fin funcion listarPlatillos */


var items = document.querySelectorAll('.item');
var descripcion = document.querySelectorAll('.descripcion');
var btnCerrar = document.querySelectorAll('.btnCerrar');
var preparacionText = document.querySelectorAll('.preparacion');
var palimentos = document.querySelectorAll('.p-alimentos');

function cambiarAnim(id,valor,elementItem){
  elementItem.scrollTop = 0; /* Corrige error de desplazamiento hacia arriba */
  if(valor == 'add'){
      document.getElementsByTagName("html")[0].classList.add("scrol-no");
      elementItem.parentElement.classList.add("contItem");
      elementItem.classList.add("scroll-si");
      elementItem.classList.add('itemFixed');
      descripcion[id].classList.add('ocultar');
      preparacionText[id].classList.add('mostrar');
      palimentos[id].classList.add('imgScala');
      btnCerrar[id].classList.add('cerrar');
  }
  if(valor == 'remove'){
      document.getElementsByTagName("html")[0].classList.remove("scrol-no");
      elementItem.parentElement.classList.remove("contItem");
      elementItem.classList.remove("scroll-si");
      elementItem.classList.remove('itemFixed');
      descripcion[id].classList.remove('ocultar');
      preparacionText[id].classList.remove('mostrar');
      palimentos[id].classList.remove('imgScala');
      btnCerrar[id].classList.remove('cerrar');
    }

}


items.forEach(item => {
  item.addEventListener('click', function(e){
    document.getElementsByTagName("html")[0].classList.add("scrol-no");

    let elemento = e.target;
    let idElemento = e.target.dataset.id;
    if(elemento.nodeName == 'IMG' ){
      cambiarAnim(idElemento,'add',item)
    }
     if(elemento.nodeName == "SPAN"){
      cambiarAnim(idElemento,'remove',item)
    }
  });
});
}
let contentItem = document.querySelectorAll('.contentItem');
    if(contentItem){
            window.addEventListener('click', function(e){
              contentItem.forEach(element => {
                if(e.target == element && element.classList.contains("contItem")){
                  var valor = e.target.dataset.btnid
                  
                 let items = document.querySelectorAll('.item');
                 items[valor].classList.remove('itemFixed');
                 items[valor].parentElement.classList.remove("contItem");
                 items[valor].classList.remove("scroll-si");
                 document.getElementsByTagName("html")[0].classList.remove("scrol-no");

                 descripcion[valor].classList.add('ocultar');
                 descripcion[valor].classList.remove('ocultar');
                  preparacionText[valor].classList.remove('mostrar');
                  palimentos[valor].classList.remove('imgScala');
                  btnCerrar[valor].classList.remove('cerrar');

                  cambiarAnim(valor,'remove',items[valor])
                }
              });
            });
        }

    
/* Menu hamburguesa */
let btnCustom = document.getElementById('btnCustom').addEventListener('click', function(){
  let bars = document.querySelectorAll('.b-bar');
  bars.forEach(element =>{
    element.classList.toggle('activo');
  });
});

if(document.getElementById("form")){
document.getElementById("form").addEventListener('submit', function(e){
  e.preventDefault();
 /*  console.log('Hola'); */

  let nombre = document.getElementById("nombre");
  let correo = document.getElementById("correo");
  let tel = document.getElementById("tel");
  let mensaje = document.getElementById("mensaje");


  if(nombre.value == "" || correo.value == "" || tel.value == ""|| mensaje.value == ""){
    swal ( "Error!" ,  "Llenar todos los campos!" ,  "error" );
  }else{

    /* if(!isValidEmail(correo)){
      swal ( "Error!" ,  "Email no valido!" ,  "error" );
    }
    */
   
   //Enviar los datos por Ajax

      let datos = new FormData();
      datos.append("nombre", nombre.value);
      datos.append("correo", correo.value);
      datos.append("tel", tel.value);
      datos.append("msj", mensaje.value);

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "email/enviar.php", true);
      xhr.onload = function(e){
        if(xhr.status == 200){
          document.getElementById("form").reset();
          console.log(xhr.response);
          
          swal("Correo enviado correctamente!", {
            buttons: false,
            timer: 2000,
          });
          
        }
      }
      xhr.send(datos);

    }
 
})
}


/* Leadleft */
var mapOptions = {
  center: [24.02,  -104.65],
  zoom: 5,
  minZoom:2
}
if(document.getElementById("map")){

  var map = L.map('map', mapOptions);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  var ensenada = L.marker([31.87, -116.60]).bindPopup('Ensenada California.').addTo(map),
    obregon    = L.marker([27.48, -109.93]).bindPopup('Cd Obregon Sonora.').addTo(map),
    hermosillo    = L.marker([29.10,  -110.97]).bindPopup('Hermosillo Sonora.').addTo(map),
    mexico    = L.marker([19.49, -99.12]).bindPopup('México DF.').addTo(map),
    mexicali = L.marker([32.64,  -115.44]).bindPopup('Mexicali').addTo(map),
    tijuana = L.marker([32.50,  -117.00]).bindPopup('Tijuana').addTo(map),
    nogales = L.marker([31.30,  -110.94]).bindPopup('Nogales').addTo(map),
    acapulco = L.marker([16.86,  -99.88]).bindPopup('Acapulco').addTo(map), 
    tehuacan = L.marker([18.46,  -97.39]).bindPopup('Tehuacan').addTo(map), 
    mochis = L.marker([25.79,  -108.99]).bindPopup('Mochis').addTo(map), 
    veracruz = L.marker([19.18,  -96.14]).bindPopup('Veracruz').addTo(map), 
    culiacan = L.marker([24.80,  -107.43]).bindPopup('Culiacan').addTo(map); 
   
    
}





})();


