<?php include 'includes/templates/header.php'?>
<?php


?>

<h1 class="center c-orange mt-4">Nuestras sucursales <i class="fas fa-map-marker-alt red"></i></h1>
<p>Ojai alimentos cuenta con sucursales a lo largo de la republica mexicana, ofreciendo asi sus productos de alta calidad para que esten al alcance de las familas</p>
<div class="spce-c mgt-5 pdl-3">
   <div class="row grid-sucursales sucursales">
      <!-- Links -->
      <?php
      $data = file_get_contents("dist.json");
      $distribuciones = json_decode($data, true);
      
      foreach ($distribuciones as $product) {
          echo "<div>".
               "<center>".
               "<h5>".$product['sucursal']."</h5>".
               "<i class='".$product['icon']." fnt-s4'></i>".
               "</center>".
               "<ul>".
                       "<li><b>Calle: </b>".$product["calle"]."</li>".
                       "<li><b>Colonia: </b>".$product["colonia"]."</li>".
                       "<li><b>Estado: </b>".$product["estado"]."</li>".
                       "<li><b>Telefono: </b>".$product["telefono"]."</li>".
               "</ul>".
           "</div>";
      }
      ?>
      
   </div>
</div>
<!-- Fin contente distribuciones -->
<section class="spce-c pdding-40">
   <span class="content-titles">
      <h3 align="center"  class="title-center">COMPROMISO</h3>
   </span>
</section>
<section id="section-contadores" class="parallax section section-text-light section-parallax section-center mt-0" data-plugin-parallax data-plugin-options="{'speed': 1.5}" data-image-src="img/parallax/parallax-2.jpg">
   <img class="img-parallax" src="assets/img/parallax/table-parallax" alt="">
   <div class="container">
      <div class="row counters counters-text-light">
         <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
            <div class="counter">
               <!-- <strong data-to="30000" data-append="+">0</strong> -->
               <strong>+</strong>
               <i class="fas fa-user"></i>
               <strong class="cont" data-to="800" data-append="+">0</strong>
               <label>Clientes satisfechos</label>
            </div>
         </div>
         <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
            <div class="counter">
               <strong>+</strong>
               <i class="fas fa-star"></i>
               <strong class="cont" data-to="15" >0</strong>
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
               <strong class="cont" data-to="40">0</strong>
               <label>Productos</label>
            </div>
         </div>
      </div>
   </div>
</section>
<!-- inicia mapa -->
<div id="map" class="map"></div>

<?php include 'includes/templates/footer.php'?>