<?php include 'includes/templates/header.php'?>
<section class="col-lg-10 mx-auto pt-5 spce-c">
        <span class="content-titles">
        <h3 align="center"  class="title-center">Bolsa de trabajo</h3>
        </span>
</section>

<div class="row spce-c pt-5 m-3 txt-j">
    <div class="col-lg-6 spce-c">
        <div class="col-lg-8">
        <form class="form-horizontal" id="form" action="email/enviar.php" method="post">
          <div class="form-row">
              <!-- Name input-->
              <div class="form-group col-md-6">
                <label class="col-md-3 control-label" for="nombre">Nombre:</label>
                <div class="col-md-12">
                  <input id="nombre" name="nombre" type="text" placeholder="Escribe tu nombre" class="form-control">
                </div>
              </div>
              <!-- Email input-->
              <div class="form-group col-md-6">
                <label class="col-md-3 control-label" for="email">Correo:</label>
                <div class="col-md-12">
                  <input id="correo" name="correo" type="text" placeholder="xxxxx@mail.com" class="form-control">
                </div>
              </div>

          </div>
            <!-- Telefono -->

            <div class="form-group">
              <label class="col-md-3 control-label" for="tel">Telefono:</label>
              <div class="col-md-12">
                <input id="tel" name="tel" type="text"  placeholder="xxxx-xx-xx-xx" class="form-control">
              </div>
            </div>

            <!-- Comentario -->
            <div class="form-group">
              <label class="col-md-3 control-label" for="mensaje">Comentarios</label>
              <div class="col-md-12">
                <textarea class="form-control" id="mensaje" name="mensaje" type="text" placeholder="Escribe un breve mensaje..." rows="5"></textarea>
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
        </div>
      
    </div>
    <div class="col-lg-6">
      <div class="col-md-8 contacto-descripcion">
        <h4>  Nuestras <b>Oficinas</b></h4>
          <ul class="detalles">
            <li><i class="fas fa-map-marker-alt"></i><b>Direccion:</b> Jalisco Norte 519-S Altos entre Yaqui y Mayo</li>
            <li><i class="fas fa-phone"></i><b>Telefono:</b> +52 644-414-91-17</li>
            <li><i class="fas fa-envelope"></i><b>Correo:</b> ojaialimentos@grupoojai.com</li>
          </ul>
          <h4>  Horario <b>Laboral</b></h4>
          <ul class="detalles">
            <li><i class="far fa-clock"></i>Lunes - Viernes - 8am a 6pm</li>
            <li><i class="far fa-clock"></i>Sábado - 9am a 1pm</li>
            <li><i class="far fa-clock"></i>Domingo - Cerrado</li>
          </ul>
          <h4>  Ponte en  <b>Contacto</b></h4>
          <p>
            Dejenos sus comentarios o dudas, con gusto le atenderemos siempre otorgandole el mejor servicio.
          </p>
      </div>
    </div>
</div>
<?php include 'includes/templates/footer.php'?>