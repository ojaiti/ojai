<?php

/* echo 'LLego <br>'; */
$nombre = $_POST['nombre'];
$email =  $_POST['correo'];
$tel =  $_POST['tel'];
$message =  $_POST['msj'];

/* echo 'Tu nombre es \n' . $nombre;
echo 'Tu correo es \n' . $correo;
echo 'Tu tel es \n' . $tel;
echo 'Tu msj es \n' . $msj;
exit;
$nombre = $_POST['nombre'];
$email = $_POST['correo'];
$tel = $_POST['tel' ];
$message = $_POST['mensaje'] */;
/* 
echo 'Tu nombre es: ' . $nombre;
echo 'Tu correo es: ' . $email;
echo 'Tu tel es: ' . $tel;
echo 'Tu mensaje es: ' . $mensaje;
var_dump($_POST); */


/* $nombre = $_POST['nombre'];
$mail = $_POST['correo']; */

$header = 'From: ' . $email . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " .$nombre. "\r\n";
$mensaje .= "Su e-mail es: " .$email . "\r\n";
$mensaje .= "Su telefono es: " .$tel . "\r\n";
/* $mensaje .= "Mensaje: " . $_POST['mensaje'] . "\r\n"; */
$mensaje .= "Mensaje: el mensaje es para informacion sobre el trabajo \r\n";
$mensaje .= "Enviado el " . date('d/m/y', time());

$para = 'eric.barcelo@grupoojai.com';
$asunto = 'Asunto Bolsa de trabajo';

mail($para, $asunto, utf8_decode($mensaje), $header);

/* header('Location: ../index.php'); */

?>