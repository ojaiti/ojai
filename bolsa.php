<?php include 'includes/templates/header.php'?>
<section class="col-lg-10 mx-auto pt-5 spce-c">
        <span class="content-titles">
        <h3 align="center"  class="title-center">Bolsa de trabajo</h3>
        </span>
</section>

<div class="row spce-c pt-5 m-3 txt-j">
    <div class="col-lg-10 spce-c">
        <div class="col-lg-8">
        <form class="form-horizontal" id="form" action="includes/funciones/bolsaRegistro.php" method="post">
    
            <!-- Name input-->
            <div class="form-group">
              <label class="col-md-3 control-label" for="nombre">Nombre:</label>
              <div class="col-md-9">
                <input id="nombre" name="nombre" type="text" placeholder="Escribee tu nombre" class="form-control">
              </div>
            </div>
    
            <!-- Email input-->
            <div class="form-group">
              <label class="col-md-3 control-label" for="email">Correo:</label>
              <div class="col-md-9">
                <input id="correo" name="correo" type="email" placeholder="Escribe tu correo" class="form-control">
              </div>
            </div>
            <!-- Telefono -->

            <div class="form-group">
              <label class="col-md-3 control-label" for="tel">Telefono:</label>
              <div class="col-md-9">
                <input id="tel" name="tel" type="number" placeholder="Escribe tu telefono" class="form-control">
              </div>
            </div>

            <!-- Comentario -->
            <div class="form-group">
              <label class="col-md-3 control-label" for="mensaje">Comentarios</label>
              <div class="col-md-9">
                <textarea class="form-control" id="mensaje" name="mensaje" placeholder="Please enter your message here..." rows="5"></textarea>
              </div>
            </div>
    
            <!-- enviar -->
            <div class="form-group">
              <div class="col-md-12 text-left">
                <button type="submit" id="enviar" class="btn btn-pri btn-lg">Enviar</button>
                <a class="btn btn-success" id="mail" href="mailto:javierfelixuts@gmail.com?cc=javierantoniofelixtorres@gmail.com;javierfelixuts@gmail.com&subject=Asunto%20con%20espacios&body=Este%20es%20el%20cuerpo%20del%20mensaje&body=Escribe aquí si tienes preguntas "">Enviar mail completo</a>
              </div>
            </div>
          </form>
            <img class="p-alimentos" src="http://www.ojaialimentos.com.mx/img/slide_cont/equipo.jpg" alt="alimentos">
        </div>
      
    </div>
</div>
<?php include 'includes/templates/footer.php'?>