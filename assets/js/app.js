(function () {
	var topMenu = document.querySelector('.top-menu')
	topMenu.addEventListener('click', function () {
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

	function accionarContadores() {
		const contadores = document.querySelectorAll('.cont');
		const speed = 8;
		contadores.forEach(contador => {

			const updateCount = () => {
				const target = +contador.getAttribute('data-to');
				const count = +contador.innerText;
				/*   const inc = target / speed; */
				const sum = (target / speed)
				const inc = sum / 2;

				var valorRound = Math.round(count + inc);
				if (count < target) {
					contador.innerText = valorRound;
					setTimeout(updateCount, 500)
				} else {
					contador.innerText = target;
				}
			}
			updateCount();
		});
	}

	/* Obtener coordenadas */


	function getOffset(el) {
		var _x = 0;
		var _y = 0;
		while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
			_x += el.offsetLeft - el.scrollLeft;
			_y += el.offsetTop - el.scrollTop;
			el = el.offsetParent;
		}
		return {
			top: _y,
			left: _x
		};
	}

	var elemento = document.querySelector('.content-titles');

	var x = getOffset(elemento).left;
	var y = getOffset(elemento).top;
	/* console.log(x,y) */


	//este codigo obtiene la altura del header y se lo asigna al elemento

	var alturaHeader = document.getElementById("header").clientHeight;
	/* window.scrollTo(0,-alturaHeader); */

	var html = document.getElementsByTagName("html")[0];

	if (document.getElementsByClassName("aparece")) {
		apareceScroll();

	}

	function apareceScroll() {
		var anim = 700;

		var elemtoAparece = document.getElementsByClassName("aparece");
		var balls = document.getElementsByClassName("ball");
		document.addEventListener("scroll", function () {
			var topVent = html.scrollTop;
			for (var i = 0; i < elemtoAparece.length; i++) {
				/* var x = getOffset(elemento).left; */
				var element_y = getOffset(elemtoAparece[i]).top;
				/* var topElemAparece = elemtoAparece[i].offsetTop; */
				if (topVent > element_y - anim) {
					elemtoAparece[i].classList.add("animAparece")
				}
			}

		})
	}


	document.getElementById("relleno").style.height = alturaHeader + "px";
	//Animacion para el header al momento de hacer scroll     
	var lastScrollTop = 0;
	var navbar = document.getElementById("navbar");
	var espacio92 = document.querySelector('.espacio92');

	/* posicion contadores */

	/* alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height)  */
	/* Evento scroll */
	window.addEventListener("scroll", function () {
		var st = window.pageYOffset || document.documentElement.scrollTop;
		var altura = screen.height;


		if (document.querySelector('.content-images-corousel')) {

			var sucursales = document.querySelector('.content-images-corousel');
			var posicionSucursales = sucursales.getBoundingClientRect();

			if (st > posicionSucursales.height - 400 && document.querySelector('#section-contadores')) {
				accionarContadores()
				let sectionImage = document.querySelector('#section-contadores')
				sectionImage.style.backgroundPositionY = `${st * -.3}px`;
			}

		}

		if (st > lastScrollTop && st > 100) {
			//obtener la altura de la pantalla
			espacio92.style.display = 'none';
			/* navbar.classList.add("styckyNavDown"); */
		} else {
			espacio92.style.display = 'block';
			navbar.classList.remove("styckyNavDown");
		}
		if (st < 200) {
			navbar.position = 'relative';
		}
		lastScrollTop = st;
		espacio92.style.display = 'none';
		/* this.console.log(st) */
		if (st > 800) {
			topMenu.classList.add('show-up')
		} else {
			topMenu.classList.remove('show-up')
		}

	}, false);
	/* Este contenido alimenta el index en la seccion de recetas */

	if (document.querySelector('.contenedor-items')) {
		let contenedorItems = document.querySelector('.contenedor-items');

		/* Fin funcion listarPlatillos */
		cargarRecetas()

		function cargarRecetas() {
			fetch('includes/json/recetas.json')
				.then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
				.then(usuarios => {
					usuarios.forEach((element, index) => {
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
                          <div class="parrafo">
                             ${element.ingre}
                          </div>
                       </div>
                       <div class="contentPreparacion">
                          <h5>Preparacion</h5>
                          <div class="preparacion" data-id="${index}">
                             ${element.prep}
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              `;
					});


					var items = document.querySelectorAll('.item');
					var descripcion = document.querySelectorAll('.descripcion');
					var btnCerrar = document.querySelectorAll('.btnCerrar');
					var preparacionText = document.querySelectorAll('.preparacion');
					var palimentos = document.querySelectorAll('.p-alimentos');

					function cambiarAnim(id, valor, elementItem) {
						elementItem.scrollTop = 0; /* Corrige error de desplazamiento hacia arriba */
						if (valor == 'add') {
							document.getElementsByTagName("html")[0].classList.add("scrol-no");
							elementItem.parentElement.classList.add("contItem");
							elementItem.classList.add("scroll-si");
							elementItem.classList.add('itemFixed');
							descripcion[id].classList.add('ocultar');
							preparacionText[id].classList.add('mostrar');
							palimentos[id].classList.add('imgScala');
							btnCerrar[id].classList.add('cerrar');
						}
						if (valor == 'remove') {
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
						item.addEventListener('click', function (e) {

							let elemento = e.target;
							let idElemento = e.target.dataset.id;
							if (elemento.nodeName == 'IMG') {
								cambiarAnim(idElemento, 'add', item)
							}
							if (elemento.nodeName == "SPAN") {
								cambiarAnim(idElemento, 'remove', item)
							}
						});
					});

					let contentItem = document.querySelectorAll('.contentItem');
					if (contentItem) {
						window.addEventListener('click', function (e) {
							contentItem.forEach(element => {
								if (e.target == element && element.classList.contains("contItem")) {
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

									cambiarAnim(valor, 'remove', items[valor])
								}
							});
						});
					}


				}) // Aquí mostramos dicha información
				.catch(error => console.log('Hubo un error : ' + error.message))
		}


	}


	/* Menu hamburguesa */
	let btnCustom = document.getElementById('btnCustom').addEventListener('click', function () {
		let bars = document.querySelectorAll('.b-bar');
		bars.forEach(element => {
			element.classList.toggle('activo');
		});
	});

	if (document.getElementById("form")) {
		document.getElementById("form").addEventListener('submit', function (e) {
			e.preventDefault();
			/*  console.log('Hola'); */

			let nombre = document.getElementById("nombre");
			let correo = document.getElementById("correo");
			let tel = document.getElementById("tel");
			let mensaje = document.getElementById("mensaje");


			if (nombre.value == "" && correo.value == "" && tel.value == "" && mensaje.value == "") {
				swal("Error!", "Llenar todos los campos!", "error");
      }
      else if(nombre.value == "" ){
        swal("Error!", "Llenar todos los campos!", "error");
      }
      else if(correo.value == ""){
        swal("Error!", "Llenar el campo correo!", "error");
      }
      else if(tel.value == ""){
        swal("Error!", "Llenar el campo telefono!", "error");
      }
      
      else if(mensaje.value == ""){
        swal("Error!", "Llenar el campo mensaje!", "error");
        
      }
      else {

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
				xhr.onload = function (e) {
					if (xhr.status == 200) {
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
		center: [24.02, -104.65],
		zoom: 5,
		minZoom: 2
	}
	if (document.getElementById("map")) {

		var map = L.map('map', mapOptions);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		var ensenada = L.marker([31.87, -116.60]).bindPopup('Ensenada California.').addTo(map),
			obregon = L.marker([27.48, -109.93]).bindPopup('Cd Obregon Sonora.').addTo(map),
			hermosillo = L.marker([29.10, -110.97]).bindPopup('Hermosillo Sonora.').addTo(map),
			mexico = L.marker([19.49, -99.12]).bindPopup('México DF.').addTo(map),
			mexicali = L.marker([32.64, -115.44]).bindPopup('Mexicali').addTo(map),
			tijuana = L.marker([32.50, -117.00]).bindPopup('Tijuana').addTo(map),
			nogales = L.marker([31.30, -110.94]).bindPopup('Nogales').addTo(map),
			acapulco = L.marker([16.86, -99.88]).bindPopup('Acapulco').addTo(map),
			tehuacan = L.marker([18.46, -97.39]).bindPopup('Tehuacan').addTo(map),
			mochis = L.marker([25.79, -108.99]).bindPopup('Mochis').addTo(map),
			veracruz = L.marker([19.18, -96.14]).bindPopup('Veracruz').addTo(map),
			culiacan = L.marker([24.80, -107.43]).bindPopup('Culiacan').addTo(map);


	}

})();