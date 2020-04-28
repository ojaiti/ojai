<?php
$data = file_get_contents("distribuciones.json");
$distribuciones = json_decode($data, true);
 
foreach ($distribuciones as $product) {
    echo "<div>";
        echo "<h5>".$product['sucursal']."</h5>";
        echo "<i class=".$product['icon']."></i>";
        echo "<ul>";
                echo "<li><span>Calle: </span>".$product["calle"]."</li>";
                echo "<li><span>Colonia: </span>".$product["colonia"]."</li>";
                echo "<li><span>Estado: </span>".$product["estado"]."</li>";
                echo "<li><span>Telefono: </span>".$product["telefono"]."</li>";
        echo "</ul>";
    echo "</div>";
}
?>
    <div>

         <h5> Sucursal Veracruz</h5>
         <i class="fas fa-store"></i>
         <ul>
            <li>Dirección: Carretera Federal Libramiento Paso del Toro LA y Griega</li>
            <li>LA Y Griega</li>
            <li>Veracruz.</li>
            <li>Tel. (644) 414 9117</li>
         </ul>
    </div>