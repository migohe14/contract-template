<template>
    <div>
        <div class="containerFluid">
            <main-header></main-header> 
        </div>
        <b-container class="bv-example-row mt-5 mb-5">
        <b-row class="mt-5">
            <b-col><img src="../assets/web.png"></b-col>
            <b-col><p>Puedes acceder a los documentos legales publicados en esta web, rellenarlos y descargarlos en distintos formatos.</p></b-col>
        </b-row>

         <b-row class="mt-5">
            <b-col><p>Esta web no almacena ningún dato ya que todo se realiza desde el lado del cliente (tu navegador).</p></b-col>
            <b-col><img src="../assets/server.png"></b-col>
        </b-row>

         <b-row class="mt-5">
            <b-col><img src="../assets/code.png"></b-col>
            <b-col><p>Puedes ver el <a href="https://github.com/migohe14/contract-template" target="blank">repositorio de Github</a> donde está el código del proyecto.</p></b-col>
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
}
</script>
