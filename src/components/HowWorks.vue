
<template>
  <div class="content">
    <a name="howWorks"/>
    <h1 class="title-work" data-aos="fade-up">¿Cómo funciona?</h1>
    <div class="flex-container">
      <div class="flex-item">
        <div class="size-img" data-aos="fade-right">
          <img src="../assets/images/web.png">
        </div>
        <div class="size-text-right" data-aos="fade-left">
          <p>Puedes acceder a los documentos legales publicados en esta web, rellenarlos y descargarlos en distintos formatos.</p>
        </div>
      </div>
      <div class="flex-item">
        <div class="size-text-left" data-aos="fade-right">
          <p>Esta web no almacena ningún dato ya que todo se realiza desde el lado del cliente (tu navegador).</p>
        </div>
        <div class="size-img" data-aos="fade-left">
          <img src="../assets/images/server.png">
        </div>
      </div>
      <div class="flex-item">
        <div class="size-img" data-aos="fade-right">
          <img src="../assets/images/code.png">
        </div>
        <div class="size-text-right-3" data-aos="fade-left">
          <p>
            Puedes ver el
            <a
              href="https://github.com/migohe14/contract-template"
              target="blank"
            >repositorio de Github</a> donde está el código del proyecto.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.title-work{
  background-color: #ecf0f1;
  margin: 0;
  color: #2980b9;
  padding: 10px;
  height: auto;
}

.flex-container {
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
  -webkit-align-content: space-around;
  -ms-flex-line-pack: center;
  align-content: space-around;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 94vh;
  background-color: #e7ebec;
}

.flex-item:nth-child(1) {
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  display: contents;
  align-items: center;
  padding-left: 10px;

  width: 100%;
  background-color: #e7ebec;
  display: flex;
  justify-content: flex-end;
  /* height: 33.33vh; */
}

.flex-item:nth-child(2) {
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  display: contents;
  align-items: center;

  padding-right: 10px;
  width: 100%;
  background-color: #ecf0f1;
  display: flex;
  justify-content: flex-end;
  /* height: 33.33vh; */
}

.flex-item:nth-child(3) {
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  display: contents;
  align-items: center;
  padding-left: 10px;

  width: 100%;
  background-color: #e7ebec;
  display: flex;
  justify-content: flex-end;
  /* height: 33.33vh; */
}

.size-img {
  width: 40%;
}
.size-text-left {
  width: 60%;
  border-bottom: 200px solid #2980b9;
  border-right: 75px solid rgba(0, 0, 0, 0);
  height: 0;
}

.size-text-right {
  width: 60%;
  border-bottom: 200px solid #2980b9;
  border-left: 75px solid rgba(0, 0, 0, 0);
  height: 0;
}

.size-text-right-3 {
  width: 60%;
  border-bottom: 200px solid #2980b9;
  border-left: 75px solid rgba(0, 0, 0, 0);
  height: 0;
}

.size-text-right p {
  margin-top: 75px;
}

.size-text-right-3 p {
  margin-top: 75px;
}

.size-text-right-3 a {
  color: #bdc3c7;
}

.size-text-left p {
  margin-top: 75px;
}

@media (max-width: 500px) {
  .size-text-right p {
    margin-top: 30px;
    margin-right: 10px;
  }

  .size-text-left p {
    margin-top: 36px;
    margin-left: 10px;
  }

  .size-text-right-3 p {
    margin-top: 55px;
    margin-right: 10px;
  }
}

@media (max-width: 320px) {
  .size-text-right p {
    margin-top: 21px;
    margin-right: 2px;
  }

  .size-text-left p {
    margin-top: 21px;
    margin-left: 5px;
  }

  .size-text-right-3 p {
    margin-top: 35px;
    margin-right: 5px;
  }

  .title-work {
    padding-bottom: 50px;
  }
  .title-about {
    margin-top: 85px;
  }
}
</style>


<script>
// import MainHeader from "./MainHeader";

export default {
  components: {
    // MainHeader
  }
};
</script>
