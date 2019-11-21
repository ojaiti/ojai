<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Enviar email</title>
</head>
<body>
    <form action="enviar.php" method="post">
        <div class="group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre">
        </div>
        <div class="group">
            <label for="correo">Correo</label>
            <input type="text" name="correo" id="correo">
        </div>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>