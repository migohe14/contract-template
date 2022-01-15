
  <template>
  <section>
    <!-- <main-header></main-header> -->
    <a name="home" />
    <header class="v-header container">
      <div class="fullscreen-video-wrap">
        <img src="../assets/images/typing.png" />
      </div>
      <div class="header-overlay"></div>
      <div class="header-content">
        <h1>Crea tu contrato de forma rápida y sencilla.</h1>
        <p>Personaliza tus contratos y documentos legales de forma online.</p>
        <h2>¡Listo para descargar!</h2>
        <div class="info-container pt-3">
          <div class="info-item mr-2">
            <h5 class="p-2">Más de</h5>
            <h3>{{this.totalScore['0']}}</h3>
            <h5 class="p-2">contratos descargados</h5>
          </div>
          <div class="info-item ml-2">
            <h5 class="p-2">Más de</h5>
            <h3>{{this.allContract['0']}}</h3>
            <h5 class="p-2">tipos de contratos</h5>
          </div>
        </div>
      </div>
    </header>
    <HowWorks></HowWorks>
    <AboutMe></AboutMe>
  </section>
</template>


<style>
section {
  background: #ecf0f1;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Vidaloka", serif;
  color: #ecf0f1;
}
p {
  font-family: "Oswald", sans-serif;
  color: #ecf0f1;
}

.v-header {
  height: 100vh;
  display: flex;
  align-items: center;
  color: #ecf0f1;
}

.container {
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  text-align: center;
}

.fullscreen-video-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.fullscreen-video-wrap video {
  min-width: 100%;
  min-height: 100%;
}

.fullscreen-video-wrap img {
  min-width: 100%;
  min-height: 100vh;
}

.header-overlay {
  height: 100vh;
  /* width: 100vw; */
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #03a9f4;
  z-index: 1;
  opacity: 0.2;
}

.header-content {
  z-index: 2;
  width: 100%;
}

.header-content h1 {
  font-size: 50px;
  margin-bottom: 0;
}

.header-content p {
  font-size: 1.5rem;
  display: block;
  padding-bottom: 2rem;
}

@media (max-width: 500px) {
  .header-content h1 {
    font-size: 45px;
    margin-bottom: 0;
  }
}

.info-container {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.info-item:nth-child(1) {
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  background-color: #ecf0f1;
  opacity: 0.9;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 2px solid #015175;
}

.info-item:nth-child(2) {
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  background-color: #ecf0f1;
  opacity: 0.9;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 2px solid #015175;
}

.info-item h3,
.info-item h5 {
  color: #03a9f4 !important;
}

/* @media(max-width:960px) {
  .container {
    padding-right: 3rem;
    padding-left: 3rem;
  }

  .image-perfil {
    width: 250px;
    height: 250px;
    padding-top: 10px;
    top: 0;
    left: 0;
  }

  .btn {
    display: inline-block;
    width: 90px;
    height: 90px;
    background: #ecf0f1;
    margin: 10px;
    border-radius: 30%;
    box-shadow: 0 5px 15px -5px #00000070;
    color: #3498db;
    overflow: hidden;
    position: relative;
  }
} */

/* @media(max-width:500px) {
  .container {
    padding-right: 3rem;
    padding-left: 3rem;
  }

  video {
    visibility: hidden;
  }

  .header-content h1 {

    font-size: 2.5rem;

  }

  .image-perfil {
    width: 200px;
    height: 200px;
    padding-top: 10px;
    top: 0;
    left: 0;
  }


} */
</style>

<script>
import MainHeader from "./MainHeader";
import HowWorks from "./HowWorks";
// import MainFooter from "./MainFooter";
import AboutMe from "./About";
import OurJobs from "./OurJobs";
import request from "../services/score.service";
const restRequestService = new request();

export default {
  components: {
    MainHeader,
    HowWorks,
    AboutMe,
    OurJobs
    // MainFooter
  },
  data() {
    return {
      scores: [],
      totalScore: [],
      allContract: []
      // contractScore: [],
      // contractName: "buy-contract"
    };
  },
  created() {
    // restRequestService.getAllScores(this.scores, this.totalScore);
    // restRequestService.getAllContract(this.allContract);
    // restRequestService.getScore(this.contractName, this.contractScore);
    // setTimeout(()=>{
    //   restRequestService.UpdateScore(this.contractName, this.contractScore);
    // }, 2000)
  }
};
</script>

