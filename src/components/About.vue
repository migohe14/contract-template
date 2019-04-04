<template>
<div>
    <div class="containerFluid">
      <main-header></main-header> 
</div>
  <b-container>
  <b-row class="mt-5 mb-5">
    <b-col sm="4"><b-img class="img-profile" :src="images.miguel"></b-img></b-col>
    <b-col sm="8" class="mt-5 mb-5"><p>Desarrollador web y graduado en derecho por la Universidad de Málaga. Interesado en el desarrollo de tecnología aplicada al sector legal.</p><a href="https://www.linkedin.com/in/miguel-gonz%C3%A1lez-herrera/" target="blank">Miguel González Herrera<br><i class="mt-2 fab fa-linkedin fa-2x"></i></a></b-col>
  </b-row>
   <b-row class="mt-5 mb-5">
    <b-col sm="4"><img class="img-profile" :src="images.pablo"></b-col>
    <b-col sm="8" class="mt-5 mb-5"><p>Estudiante de último curso de grado en derecho en la Universidad de Málaga. Apasionado del derecho contractual y las nuevas tecnologías.</p><a href="https://www.linkedin.com/in/pablo-ruiz-ramirez-5b8999174" target="blank">Pablo Ruíz Ramírez<br><i class="mt-2 fab fa-linkedin fa-2x"></i></a></b-col>
  </b-row>
  </b-container>
</div>
</template>

<script>
import MainHeader from './MainHeader'

export default {
    components: {
        MainHeader,
  },
    data() {
        return{
             images: {
                miguel: require('../assets/miguel.jpg'),
                pablo: require('../assets/pablo.jpg')
            }
        }
    }
}
</script>
<style>
    .img-profile{
        border-radius: 50%;
    }
</style>