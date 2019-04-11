<template>
  <div class="content">
    <a name="ourJobs"/>
    <h1 class="title-jobs">Nuestros trabajos</h1>
    <div class="flex-container-jobs">
      <div class="flex-item-jobs">
        <div class="size-img-jobs">
          <img src="../assets/images/Sintoga.png">
        </div>
        <div class="size-text-right-jobs">
          <h2>Sintoga</h2>
          <p>
            Sintoga es una aplicación donde podrás preguntar cualquier duda legal a estudiantes de derecho para obtener información legal
            con carácter orientativo, no se guardan datos de la persona que pregunta se sienta libre de preguntar su duda.
          </p>
          <p>Disponible en web y google play. ¿A que esperas?</p>
          <ul>
            <li>
              <a href="https://www.sintoga.es/#/" target="_blank">
                <i class="fab fa-internet-explorer"></i>
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=es.sintogaSpain"
                target="_blank"
              >
                <i class="fab fa-google-play"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.flex-container-jobs {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
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
  background-color: #e7ebec;
  height: 94vh;
}

.flex-item-jobs {
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  display: inline-flex;
  background: linear-gradient(-75deg, #2980b9 60%, #ecf0f1 60%);
}

.title-jobs {
  background-color: #e7ebec;
  margin: 0;
  color: #2980b9;
  padding: 10px;
  height: auto;
}

.size-img-jobs {
  width: 40%;
}
.size-img-jobs img {
  width: 80%;
  padding-top: 30px;
  padding-bottom: 30px;
}
.size-text-right-jobs {
  width: 60%;
  padding: 75px;
  padding-top: 125px;
}
.size-text-right-jobs ul {
  margin: 0;
  padding: 0;
}
.size-text-right-jobs li {
  display: inline-block;
  margin: 6px;
  list-style: none;
}
.size-text-right-jobs li a {
  color: white;
  text-decoration: none;
  font-size: 60px;
  -webkit-transition: all ease-in-out 250ms;
  transition: all ease-in-out 250ms;
}
.size-text-right-jobs li a:hover {
  color: #b9b9b9;
}
.flex-item-jobs p {
  font-size: 25px;
}

@media (max-width: 620px) {
  .size-text-right-jobs p:nth-child(1) {
    display: none;
  }
  .size-text-right-jobs p {
    font-size: 20px;
  }
  .size-text-right-jobs li a {
    font-size: 45px;
  }
  .size-text-right-jobs {
    width: 60%;
    padding: 45px;
  }
}

@media (max-width: 380px) {
  .size-text-right-jobs p:nth-child(1) {
    display: none;
  }
  .title-jobs {
    margin-top: 125px;
  }
  .size-img-jobs {
    display: none;
  }
  .size-text-right-jobs {
    width: 100%;
    padding: 30px;
  }
  .flex-item-jobs {
    background: #2980b9;
  }
}
</style>

<script>
export default {};
</script>