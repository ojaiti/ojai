
<?php require 'includes/templates/header.php'?>

<div style="widht:100%; margin:0; position:relative">
<div id="bs4-slide-carousel" class="carousel slide" data-ride="carousel" >
  <ol class="carousel-indicators">
    <li data-target="#bs4-slide-carousel" data-slide-to="0" class="active"></li>
    <li data-target="#bs4-slide-carousel" data-slide-to="1"></li>
    <li data-target="#bs4-slide-carousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-inline w-100" src="assets/img/slider/comida.jpg" alt="Slide One">
      <!--Captions for the slides go here -->
       <!--  <div class="carousel-caption text-warning d-none d-sm-block sombra">
          <h1 class="h3">El sabor es mejor en familia</h1>
          <p class="text-light">Ojai lo tiene para ti</p>
        </div> -->
      <!--Captions ending here for slide 1-->  
   </div>
    <div class="carousel-item">
      <img class="d-inline w-100" src="assets/img/slider/platos.jpg" alt="Slide Two">
      <!--Captions for the slides go here -->
        <!-- <div class="carousel-caption text-warning d-none d-sm-block sombra">
          <h5>Los mejores alimentos para el hogar</h5>
          <p class="text-light">Deleita los mejores sabores</p>
        </div> -->
      <!--Captions ending here for slide 2-->        
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="assets/img/slider/burrito.jpg" alt="Slide Three">
      <!--Captions for the slides go here -->
        <!-- <div class="carousel-caption text-warning d-none d-sm-block sombra">
          <h5>Alimentos de calidad</h5>
          <p class="text-light">La mejor calida en carnes</p>
        </div> -->
      <!--Captions ending here for slide 3-->        
    </div>
  </div>
  </div>

  <a class="carousel-control-prev" href="#bs4-slide-carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#bs4-slide-carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>  
</div>

  </div> <!-- Fin container -->

  <section id="section-contadores" class="parallax section section-text-light section-parallax section-center mt-0" data-plugin-parallax data-plugin-options="{'speed': 1.5}" data-image-src="img/parallax/parallax-2.jpg">
					<div class="container">
						<div class="row counters counters-text-light">
							<div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
								<div class="counter">
                  <!-- <strong data-to="30000" data-append="+">0</strong> -->
                  <strong>+</strong>
									<i class="fas fa-user"></i>
									<strong class="cont" data-to="800" data-append="+">0</strong>
									<label>Clientes</label>
								</div>
							</div>
							<div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
								<div class="counter">
                  <strong>+</strong>
                  <i class="fas fa-star"></i>
									<strong class="cont" data-to="15">0</strong>
									<label>Años en el negocio</label>
								</div>
							</div>
							<div class="col-sm-6 col-lg-3 mb-4 mb-sm-0">
								<div class="counter">
                  <strong>+</strong>
									<i class="fas fa-building"></i>
									<strong class="cont" data-to="20">0</strong>
									<label>Sucursales</label>
								</div>
							</div>
							<div class="col-sm-6 col-lg-3">
								<div class="counter">
                  <strong>+</strong>
									<i class="fas fa-egg"></i>
									<strong class="cont" data-to="50">0</strong>
									<label>Productos</label>
								</div>
							</div>
						</div>
					</div>
        </section>
        <!-- Inicia seccion -->
<section class="spce-c pdding-40">
  <span class="content-titles">
    <h3 align="center"  class="title-center">DELICIAS PARA EL HOGAR</h3>
  </span>
</section>


<div class="content-general">
  <div class="contenedor-items"  id="easyPaginate">
  </div>
  
</div>
</div> 



<?php require 'includes/templates/footer.php'?>
