<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../PHPMailer/src/Exception.php';
require '../../PHPMailer/src/PHPMailer.php';
require '../../PHPMailer/src/SMTP.php';





$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug =0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'javierfelixuts@gmail.com';                     // SMTP username
    $mail->Password   = 'Jaft2019.';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('javierfelixuts@gmail.com', 'Javier');
    $mail->addAddress('javierantoniofelixtorres@gmail.com');     // Add a recipient
  /*   $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');
 */
    // Attachments
    /* $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); */    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Asunto muy importante';
    $mail->Body    = 'prueba con otro correo <b>JAVIER!</b>';
    /* $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
 */
    $mail->send();
    echo 'El mensaje de envió correctamente a javier antonio felix torres';
} catch (Exception $e) {
    echo "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
}

?>
<?php
/*  if(isset($_POST)){
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['tel'];
    $ciudad = $_POST['ciudad'];
    $pais = $_POST['pais'];
    $mensaje = $_POST['mensaje'];

} */



?>
<!-- <h1>tus datos</h1>
<ul>
    <li><?php echo $nombre?></li>
    <li><?php echo $correo?></li>
    <li><?php echo $telefono?></li>
    <li><?php echo $ciudad?></li>
    <li><?php echo $pais?></li>
    <li><?php echo $mensaje?></li>
</ul>  -->