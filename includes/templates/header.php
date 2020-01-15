<?php include "includes/funciones/config.php"?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ojai alimentos es una empresa de alimentos de calidad para todas las familias">
    <meta name="author" content="Ojai alimentos">
    <meta name="keyword" content="ojai, huevo, carne, cerdo"> 
    <!-- Para el mapa -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css" integrity="sha256-afz3aCt3EXZjTcVN6wxBLPnsQN+THVagSA7lG0ftFZg=" crossorigin="anonymous" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/style.css" >
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <title>Ojai Alimentos</title>
</head>
<body>
  
  
  <div class="sizeOfHeader" id="relleno"></div>
<header class="posFix" id="header">
  <!-- <div class="bg-main row-flex">
    <span id="fecha" >Lunes 19 de agosto del 2019</span>
  </div> -->
<div class="espacio92"></div>
<nav class="navbar navbar-expand-lg navbar-light bg-light pt-0" id="navbar">
<div class="col-lg-10 row mx-auto spce-b" >

  <a class="navbar-brand" aria-label="Ojai" href="<?php echo $menu[0]?>.php">
    <img src="assets/img/logo.png" alt="" width="200">
  </a>
  <button class="navbar-toggler mt-2 btn-custom" id="btnCustom" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <!-- <span class="navbar-toggler-icon"></span> -->
    <div class="menuBurger">
    <span class="b-bar"></span>
    <span class="b-bar"></span>
    <span class="b-bar"></span>

    </div>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto center">
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle upper" href="#" aria-label="Productos" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <?php echo $menu[1]?>
        </a>
        <div class="dropdown-menu upper" aria-labelledby="navbarDropdown">
          <a class="dropdown-item upper" aria-label="<?php echo $menu[2]?>" href="<?php echo $menu[2]?>.php"><?php echo $menu[2]?></a>
          <a class="dropdown-item upper" aria-label="<?php echo $menu[3]?>" href="<?php echo $menu[3]?>.php"><?php echo $menu[3]?></a>
          <a class="dropdown-item upper" aria-label="<?php echo $menu[4]?>" href="<?php echo $menu[4]?>.php"><?php echo $menu[4]?></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link upper" href="<?php echo $menu[5]?>.php" role="button" aria-label="<?php echo $menu[5]?>"   aria-expanded="false">
        <?php echo $menu[5]?>
        </a>
      </li>
      <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        UN EQUIPO COMPROMETIDO
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" aria-label="Gente Ojai" href="gente.php">GENTE OJAI</a>
         
          
      </li> -->
      <li class="nav-item dropdown">
        <a class="nav-link upper" href="<?php echo $menu[6]?>.php" role="button" aria-label="<?php echo $menu[6]?>"   aria-expanded="false">
        <?php echo $menu[6]?>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link upper" href="<?php echo $menu[7]?>.php" role="button" aria-label="<?php echo $menu[7]?>"   aria-expanded="false">
        <?php echo $menu[7]?>
        </a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link upper" href="<?php echo $menu[8]?>.php" role="button" aria-label="<?php echo $menu[8]?>"   aria-expanded="false">
        <?php echo $menu[8]?>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link upper" aria-label="<?php echo $menu[9]?>" href="<?php echo $menu[9]?>.php">
        <?php echo $menu[9]?>
        </a>
        <!-- <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="bolsa.php">CONTACTO DE VENTAS</a> -->

     
          
      </li>
      
    </ul>

    
  </div>
  </div>

</nav>
</header>