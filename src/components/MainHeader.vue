<template>
  <header class="header">
    <nav class="navigation">
      <section class="navigation_icon">
        <span class="topbar"></span>
        <span class="middlebar"></span>
        <span class="bottombar"></span>
      </section>
      <ul class="navigation_ul">
        <li>
          <router-link :to="{path:'/#home'}">Inicio</router-link>
        </li>
        <li>
          <router-link :to="{path:'/#howWorks'}">¿Cómo funciona?</router-link>
          <!-- <a href="#howWorks">¿Cómo funciona?</a> -->
        </li>

        <li>
          <router-link :to="{path:'/#about'}">¿Quiénes somos?</router-link>
          <!-- <a href="#aboutMe">¿Quiénes somos?</a> -->
        </li>
        <li>
          <h2>· Tipos de contratos</h2>
        </li>
        <li>
          <router-link :to="{path:'/contratoalquiler'}">Contrato de alquiler</router-link>
        </li>
        <li>
          <router-link :to="{path:'/contratocompraventa'}">Contrato de compraventa</router-link>
        </li>
        <li>
          <h2>· Otros documentos</h2>
        </li>
        <li>
          <router-link :to="{path:'/crearavisolegal#web'}">Aviso legal</router-link>
          <router-link :to="{path:'/crearavisolegal'}">Aviso legal</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
html {
  box-sizing: border-box;
  background: #e7ebec;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

.header {
  /* width: 100vw; */
  height: 100vh;
  background-size: cover;
  position: fixed;
  z-index: 100;
}

.navigation {
  width: 70px;
  height: 25%;
  display: block;
  padding-right: 40px;
  position: absolute;
  top: 0;
  left: 0;
  background: #f5f8f9;
  border-radius: 0% 50% 350% 0%;
  perspective: 800;
  transition: all 800ms cubic-bezier(0.9, 0, 0.33, 1);
  -webkit-box-shadow: 1px 0px 5px 0px rgba(127, 140, 141, 0.75);
  -moz-box-shadow: 1px 0px 5px 0px rgba(127, 140, 141, 0.75);
  box-shadow: 1px 0px 5px 0px rgba(127, 140, 141, 0.75);
}

.navigation_icon {
  width: 45px;
  height: 44px;
  display: block;
  position: relative;
  top: 22%;
  left: 35%;
  /* background: hsla(312, 51%, 41%, 0.6); */
  background: #f5f8f9;
  cursor: pointer;
  transition: all 800ms cubic-bezier(0.9, 0, 0.33, 1);
}

.navigation_icon .topbar {
  width: 54px;
  height: 3px;
  display: block;
  background: #2980b9;
  position: absolute;
  top: 10px;
  transform: rotate(0);
  transition: all 800ms cubic-bezier(0.9, 0, 0.33, 1);
}

.navigation_icon .middlebar {
  width: 45px;
  height: 3px;
  display: block;
  background: #2980b9;
  position: absolute;
  top: 20px;
  transform: rotate(0);
  transition: all 800ms cubic-bezier(0.9, 0, 0.33, 1);
}

.navigation_icon .bottombar {
  width: 54px;
  height: 3px;
  display: block;
  background: #2980b9;
  position: absolute;
  top: 30px;
  transform: rotate(0);
  transition: all 800ms cubic-bezier(0.9, 0, 0.33, 1);
}

.navigation .navigation_ul {
  float: right;
  margin-top: 220px;
  opacity: 0;
  visibility: hidden;
  transform: rotateY(-90deg) translateX(-300px);
  transition: all 800ms cubic-bezier(0.9, 0, 0.33, 1);
}

.navigation .navigation_ul li {
  list-style: none;
  /* text-align: right; */
  text-align: center;
}

.navigation .navigation_ul a {
  display: block;
  font-size: 25px;
  font-weight: 400;
  /* text-transform: uppercase; */
  text-decoration: none;
  color: #3498db;
  margin-bottom: 15px;
}

.navigation .navigation_ul h2 {
  color: #3498db;
  font-weight: 800;
}

.navigation .navigation_ul a:hover {
  color: #2980b9;
}

.navigation-open {
  width: 350px;
  height: 100%;
  display: block;
  background: #f5f8f9;
  position: absolute;
  left: 0;
  border-radius: 0% 1% 1% 0%;
}

.navigation-open .navigation_icon {
  left: 80%;
}

.navigation-open .navigation_ul {
  opacity: 1;
  visibility: visible;
}

.navigation-open .topbar {
  top: 21px;
  transform: rotate(45deg);
}

.navigation-open .middlebar {
  width: 0;
  top: 22px;
  opacity: 0;
  visibility: hidden;
  transform: translateX(30px);
}

.navigation-open .bottombar {
  width: 55px;
  top: 21px;
  transform: rotate(-45deg);
}

.navigation-open .navigation_ul {
  transform: rotateY(0) translateX(0);
}

@media (max-width: 500px) {
  .navigation {
    height: 10%;
  }
  .navigation_icon .topbar {
    width: 44px;
  }

  .navigation_icon .middlebar {
    width: 30px;
  }

  .navigation_icon .bottombar {
    width: 40px;
  }
  .navigation-open {
    width: 350px;
    height: 100%;
    display: block;
    background: #f5f8f9;
    position: absolute;
    left: 0;
    border-radius: 0% 1% 1% 0%;
  }
}

@media (max-width: 480px) {
  .navigation {
    width: 45px;
    height: 8%;
  }
  .navigation_icon {
    width: 30px;
    height: 30px;
  }
  .navigation_icon .topbar {
    width: 30px;
  }

  .navigation_icon .middlebar {
    width: 20px;
  }

  .navigation_icon .bottombar {
    width: 30px;
  }
  .navigation-open {
    width: 350px;
    height: 100%;
    display: block;
    background: #f5f8f9;
    position: absolute;
    left: 0;
    border-radius: 0% 1% 1% 0%;
  }
}
@media (max-width: 320px) {
  .navigation_icon {
    top: 8%;
  }
  .navigation_icon .topbar {
    width: 25px;
  }

  .navigation_icon .middlebar {
    width: 15px;
  }

  .navigation_icon .bottombar {
    width: 25px;
  }
  .navigation .navigation_ul {
    margin-top: 100px;
  }
  .navigation-open {
    width: 280px;
  }
}
</style>

<script>



export default {

};
</script>