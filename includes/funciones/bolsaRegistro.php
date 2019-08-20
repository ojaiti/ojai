<?php
if(isset($_POST)){
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['tel'];
    $ciudad = $_POST['ciudad'];
    $pais = $_POST['pais'];
    $mensaje = $_POST['mensaje'];



}
?>
<h1>tus datos</h1>
<ul>
    <li><?php echo $nombre?></li>
    <li><?php echo $correo?></li>
    <li><?php echo $telefono?></li>
    <li><?php echo $ciudad?></li>
    <li><?php echo $pais?></li>
    <li><?php echo $mensaje?></li>
</ul>