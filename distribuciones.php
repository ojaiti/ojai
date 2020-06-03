<?php include 'includes/templates/header.php'?>
<?php


?>
<section class="col-lg-10 mx-auto pt-5 spce-c">
        <span class="content-titles">
        <h3 align="center"  class="title-center">Nuestras sucursales</h3>
        <!-- <i class="fas fa-map-marker-alt red"></i> -->
        </span>
</section>

<div class="spce-c mgt-5 pdl-3">
   <div class="row grid-sucursales sucursales">
      <!-- Links -->
      <?php
      $data = file_get_contents("includes/json/dist.json");
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

<!-- inicia mapa -->
<div id="map" class="map"></div>

<?php include 'includes/templates/footer.php'?>