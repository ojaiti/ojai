<?php include 'includes/templates/header.php'?>
<section class="col-lg-10 mx-auto pt-5 spce-c">
        <span class="content-titles">
        <h3 align="center"  class="title-center">Bolsa de trabajo</h3>
        </span>
</section>

<div class="row spce-c pt-5 m-3 txt-j">
    <div class="col-lg-10 spce-c">
        <div class="col-lg-8">
        <form class="form-horizontal" action="includes/funciones/bolsaRegistro.php" method="post">
    
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
                <input id="tel" name="tel" type="tel" placeholder="Escribe tu telefono" class="form-control">
              </div>
            </div>
            <!-- Ciudad -->

            <div class="form-group">
              <label class="col-md-3 control-label" for="ciudad">Ciudad:</label>
              <div class="col-md-9">
                <input id="ciudad" name="ciudad" type="text" placeholder="Escribe tu ciudad" class="form-control">
              </div>
            </div>
            <!-- Ciudad -->

            <div class="form-group">
              <label class="col-md-3 control-label" for="pais">País:</label>
              <div class="col-md-9">
                <input id="pais" name="pais" type="text" placeholder="Escribe tu país" class="form-control">
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
                <button type="submit" class="btn btn-pri btn-lg">Enviar</button>
              </div>
            </div>
          </form>
            <img class="p-alimentos" src="http://www.ojaialimentos.com.mx/img/slide_cont/equipo.jpg" alt="alimentos">
        </div>
      
    </div>
</div>
<?php include 'includes/templates/footer.php'?>