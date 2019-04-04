<template>
    <div class="containerFluid">
        <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#"><img id="logo" src="../assets/logo.png"></b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item>  
          <b-link class="link" to="/">Inicio</b-link>
      </b-nav-item>
        <b-nav-item>  
          <b-link class="link" to="/comofunciona">Como funciona</b-link>
      </b-nav-item>
      <b-nav-item>  
          <b-link class="link" to="/sobrenosotros">Sobre nosotros</b-link>
      </b-nav-item>
      </b-navbar-nav>
    <b-dropdown text="Tipos de contratos" class="m-md-2">
        <b-dropdown-item><b-link class="link-drop" to="/crearcontrato">Contrato de alquiler</b-link></b-dropdown-item>
        <!-- <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
    </b-dropdown>
     <b-dropdown text="Otros documentos" class="m-md-2 mt-2">
        <b-dropdown-item><b-link class="link-drop" to="/crearavisolegal">Aviso legal</b-link></b-dropdown-item>
        <!-- <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
    </b-dropdown>
    </b-collapse>
  </b-navbar>
        <!-- <header class="container mb-5">
            <h1>Generador de contratos</h1>
            <p>Puedes generar tu <strong>contrato de alquiler</strong> rellenando los datos. Léelo para asegurar que está correcto y al final puedes generar el documento en formato PDF. Este contrato está redactado en base a un modelo oficial que puedes consultar <a href="http://www.juntadeandalucia.es/fomentoyvivienda/estaticas/sites/consejeria/areas/vivienda/documentos/CONTRATO_TIPO_ARRENDAMIENTO.pdf" target="blank">aquí</a></p>
        </header> -->
    </div>
</template>

<style>
    .header{
        background-color:rgb(245, 245, 245)
    }
    #logo {
        width: 50px
    }
    .link:hover {
      color: white;
      text-decoration: none;
       }

    .link {
      color: white;
     text-decoration: none;
       }
    .link-drop:hover {
      text-decoration: none;
       }

    .link-drop {
     text-decoration: none;
       }

</style>