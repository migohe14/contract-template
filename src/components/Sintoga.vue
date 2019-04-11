<template>
    <section class="wrap-sintoga">
       <div class="sintoga-item p-5">
          <b-row class="my-4">
            <p>Si tienes cualquier duda legal puedes consultar en <a href="https://www.sintoga.es/#/" target="blank">Sintoga</a>. Plataforma de <strong>estudiantes de Derecho que resuelven dudas</strong> para poner en práctica sus conocimientos. En ningún caso este asesoramiento puede sustituir al de un profesional.</p>
          </b-row>
        <div class="mb-5">
          <a href="https://www.sintoga.es/#/" target="blank" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">ACCEDER</a>
          <a href="https://play.google.com/store/apps/details?id=es.sintogaSpain" target="blank"><img id="gpb" src="../assets/images/google-play-badge.png"></a>
        </div>
      </div>
    </section>
</template>
<style>
 #gpb {
  width: 180px
}

.wrap-sintoga {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.sintoga-item:nth-child(1) {
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 15px;
  margin-right: 10%;
  margin-left: 10%;
}

.sintoga-item p {
color: black;
}
</style>

<script>
export default {
    
}
</script>
