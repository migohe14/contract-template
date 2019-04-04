<template>
<div>
<div class="containerFluid">
      <main-header></main-header> 
</div>
    <div class="containerFluid img-back">
        <div class="text">
            <h1>Crea tu contrato de forma rápida y sencilla.</h1>
            <h2>Listo para descargar</h2>
        </div>
    </div>
<!-- <div class="containerFluid">
      <main-footer></main-footer> 
</div> -->
</div>
</template>
<style>
.img-back {
    background-image: url("../assets/img-back.jpg");
    height: 700px;
}
.text{
    color: white;
    padding-top: 100px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
}

</style>

<script>
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'


export default {
    components: {
        MainHeader,
        MainFooter
  },
}
</script>

