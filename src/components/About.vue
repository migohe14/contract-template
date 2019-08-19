
<template>
  <div class="content">
    <a name="about"></a>
    <h1 class="title-about" data-aos="fade-up">¿Quiénes somos?</h1>
    <section class="wrap">
      <div class="flex-item-about">
        <div class="box" data-aos="zoom-in">
          <img src="../assets/images/miguel.jpg" class="box-img">
          <h1>Miguel González Herrera</h1>
          <h5>Desarrollador web - Graduado en derecho</h5>
          <p>Interesado en el desarrollo de tecnología aplicada al sector legal.</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/miguel-gonz%C3%A1lez-herrera/" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/migohe14" target="_blank">
                <i class="fab fa-github-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-item-about">
        <div class="box" data-aos="zoom-in">
          <img src="../assets/images/pablo.jpg" class="box-img">
          <h1>Pablo Ruíz Ramírez</h1>
          <h5>Estudiante de derecho</h5>
          <p>Apasionado del derecho contractual y las nuevas tecnologias.</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/pablo-ruiz-ramirez-5b8999174/" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-item-about">
        <div class="box" data-aos="zoom-in">
          <img src="../assets/images/salva.jpg" alt class="box-img">
          <h1>Salvador Henares Jiménez</h1>
          <h5>Desarrolador web - Frontend - Full Stack</h5>
          <p>Apasionado de la tecnología, programación y los videojuegos.</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/salvadorhenaresjimenez/" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/SahJ00" target="_blank">
                <i class="fab fa-github-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-item-about mb-2">
        <div class="box" data-aos="zoom-in">
          <img src="../assets/images/MTXDevp.jpg" class="box-img">
          <h1>Rafael Valls Sánchez</h1>
          <h5>Desarrollador Full Stack</h5>
          <p>Apasionado de las tecnologías mas vanguardistas.</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/mtxdevp/" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/MTXDevp" target="_blank">
                <i class="fab fa-github-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.title-about {
  background-color: #ecf0f1;
  margin: 0;
  color: #2980b9;
  padding: 10px;
  height: auto;
}
.content {
  height: 100vh;
  margin-top: 50px;
}
.box {
  width: 450px;
  height: 560px;
  background: #2980b9;
  padding: 40px;
  text-align: center;
  margin: auto;
  margin-top: 5%;
  color: white;
  border-radius: 10px;
}

.box-img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

.box h1 {
  font-size: 40px;
  letter-spacing: 4px;
  font-weight: 100;
}
.box h5 {
  font-size: 25px;
  letter-spacing: 3px;
  font-weight: 100;
}

.box p {
  text-align: center;
}

.box ul {
  margin: 0;
  padding: 0;
}

.box li {
  display: inline-block;
  margin: 6px;
  list-style: none;
}

.box li a {
  color: white;
  text-decoration: none;
  font-size: 60px;
  transition: all ease-in-out 250ms;
}

.box li a:hover {
  color: #b9b9b9;
}

.wrap {
  /* margin: 0; */
  /* padding: 0; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-content: center; */
  /* height: 100vh; */
  width: 100%;
  height: 94vh;
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
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #ecf0f1;
}

.flex-item-about:nth-child(1) {
  /* margin: 10px; */
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  /* height: 100%;
  background-color: #e7ebec; */
  padding: 20px;
}

.flex-item-about:nth-child(2) {
  /* margin: 10px; */
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  /* height: 100%;
  background-color: #ecf0f1; */
  padding: 20px;
}

.flex-item-about:nth-child(3) {
  /* margin: 10px; */
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  /* height: 100%;
  background-color: #e7ebec; */
  padding: 20px;
}
@media (max-width: 320px) {
  .title-about {
    margin-top: 125px;
  }
  .box {
    background: #2980b9;
    padding: 10px;
    text-align: center;
    margin: auto;
    margin-top: 2%;
    color: white;
    border-radius: 10px;
    height: inherit;
    width: 100%;
  }
  .box-img {
    border-radius: 50%;
    width: 135px;
    height: 135px;
  }
}
@media (max-width: 500px) {
  /* .title-about {
    margin-top: 125px;
  } */
  .box {
    background: #2980b9;
    padding: 10px;
    text-align: center;
    margin: auto;
    margin-top: 2%;
    color: white;
    border-radius: 10px;
    height: inherit;
    width: 100%;
  }
  /* .box-img {
    border-radius: 50%;
    width: 135px;
    height: 135px;
  } */

  .box h1 {
    font-size: 25px;
    letter-spacing: 4px;
    font-weight: 50;
  }
  .box h5 {
    font-size: 20px;
    letter-spacing: 3px;
    font-weight: 50;
  }

  .box p {
    display: none;
  }
  .box-img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  .box li a {
    font-size: 45px;
  }
  .wrap {
    height: auto;
  }
}

/* 
.card {
  position: relative;
  width: 300px;
  height: 400px;
  background: #262626;
  overflow: hidden;
}

input,
.toggle {
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 20px;
  right: 20px;
  outline: none;
  z-index: 10;
}
input {
  opacity: 0;
}
.toggle {
  pointer-events: none;
  border-radius: 50%;
  background: #fff;
  transition: 0.5s;
  text-align: center;
  line-height: 50px;
  font-size: 36px;
  box-shadow: 0 0 0 0px #9c27b0;
}
input:checked ~ .toggle {
  box-shadow: 0 0 0 500px #9c27b0;
  transform: rotate(225deg);
}
.imgBx,
.content,
.name {
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.content {
  position: absolute;
  top: 0;
  padding: 20px;
  box-sizing: border-box;
  z-index: 11;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0;
}
input:checked ~ .content {
  opacity: 1;
  transition: 0.5s;
} */
</style>


<script>
// import MainHeader from "./MainHeader";

export default {
  components: {
    // MainHeader
  },
  data() {
    return {
      images: {
        miguel: require("../assets/images/miguel.jpg"),
        pablo: require("../assets/images/pablo.jpg")
      }
    };
  }
};
</script>
<style>
.img-profile {
  border-radius: 50%;
}
</style>