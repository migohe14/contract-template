<template>
<div>
<div class="containerFluid">
      <main-header></main-header> 
</div>
  <b-container>
  
        <b-row class="my-1 mt-5">
        <b-col sm="2"><label for="input-default">Nombre y apellidos/denonimación social del responsable de la web:</label></b-col>
        <b-col sm="6">
          <b-form-input id="input-default" type="text" v-model="name"></b-form-input>
        </b-col>
      </b-row>
       <b-row class="my-1 mt-2">
        <b-col sm="2"><label for="input-default">A quien pertenece la propiedad intelectual:</label></b-col>
        <b-col sm="6">
          <b-form-input id="input-default" type="text" v-model="nameIP"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1 mt-5">
        <b-col sm="2"><label for="input-default">Datos recopilados:</label></b-col>
        <b-col sm="6">
          <b-form-input id="input-default" type="text" placeholder="correos, nombres, apellidos, teléfono, etc." v-model="personalData"></b-form-input>
        </b-col>
      </b-row>
        <b-row class="my-1 mt-5">
        <b-col sm="2"><label for="input-default">Domicilio:</label></b-col>
        <b-col sm="6">
          <b-form-input id="input-default" type="text" v-model="address"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1 mt-5">
        <b-col sm="2"><label for="input-default">Contacto:</label></b-col>
        <b-col sm="6">
          <b-form-input id="input-default" type="email" v-model="contact"></b-form-input>
        </b-col>
      </b-row>
        <b-row class="my-1 mt-5">
        <b-col sm="2"><label for="input-default">NIF/CIF:</label></b-col>
        <b-col sm="2"><small>Tranquilo esta web no almacena ningún dato, todo se hace desde tu navegador.</small></b-col>
        <b-col sm="6">
          <b-form-input id="input-default" type="text" v-model="nif"></b-form-input>
        </b-col>
      </b-row>
        <b-row class="my-1 mt-5">
        <b-col sm="2"><label for="input-default">Descripción del servicio:</label></b-col>
        <b-col sm="6">
             <b-form-textarea
              id="textarea"
              v-model="descriptionService"
              placeholder="Explica que pueden hacer los usuarios en tu web, que tipo de servicio ofreces, etc."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          <!-- <b-form-input id="input-default" type="text" v-model="descriptionService"></b-form-input> -->
        </b-col>
      </b-row>
        <b-row class="my-1 mt-5">
        <b-col sm="2"><label for="input-default">Como se recopilan los datos:</label></b-col>
        <b-col sm="6">
           <b-form-textarea
              id="textarea"
              v-model="recopilationData"
              placeholder="Explica como recoges los datos de tus usuarios. Ej. formularios web."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          <!-- <b-form-input id="input-default" type="text" v-model="recopilationData"></b-form-input> -->
        </b-col>
      </b-row>
        <b-row class="my-1 mt-5">
        <b-col sm="2"><label for="input-default">Con que objetivos recopilas los datos:</label></b-col>
        <b-col sm="6">
             <b-form-textarea
              id="textarea"
              v-model="objetives"
              placeholder="Con que finalidad recoges los datos. Ej. contactar con los usuarios, para prestar el mismo servicio, etc."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          <!-- <b-form-input id="input-default" type="text" v-model="objetives"></b-form-input> -->
        </b-col>
      </b-row>

           <div class="legal mt-5">
            <h3>Resumen:</h3>
                <ul>
                <li>Responsable de la web: {{ name }}</li>
                <li>Propiedad intelectual: {{ nameIP }}</li>
                <li>Datos recopilados: {{ personalData }}</li>
                <li>Contacto: <a v-bind:href="'mailto:' + contact">{{ contact }}</a></li>
                </ul>
                <p>En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002, de 11 de Julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), ponemos a su disposición la información general de este sitio web:</p>

                <h3>1.Titularidad</h3>
                <p>Esta web pertenece a {{name }}, con domicilio en {{ address }} y con el NIF: {{ nif }}</p>
                <p>Si quieres ponerte en contacto con nosotros envíanos un correo electrónico a:<a v-bind:href="'mailto:' + contact">{{ contact }}</a></p>
                <p>Si decides seguir navegando por nuestra web te consideraremos un usuario de nuestra web, que has leído y aceptado el contenido de este documento. </p>
                <h3>2.Descripción del Servicio</h3>
                <p>{{ descriptionService }}</p>
                        
                <h3>3.Enlaces externos</h3>
                <p>Esta web contiene enlaces externos. Sin embargo, no ejercemos ningún tipo de control sobre esas otras páginas webs o sobre su contenido, de hecho esas páginas webs se regirán por sus propios términos y condiciones. No tenemos ninguno tipo de vinculación o asociación con esas terceras páginas webs, ni asume ningún tipo de responsabilidad ni garantiza su disponibilidad técnica, calidad, fiabilidad, exactitud o veracidad.</p>
                <h3>4.Propiedad intelectual e industrial</h3>
                <p>El responsable de la web es el propietario o licenciatario de todos los derechos de propiedad intelectual e industrial del sitio web, así como de los elementos contenidos en ella. Por lo tanto, está expresamente prohibida la reproducción, distribución, comunicación pública y transformación de todo o parte de los contenidos de este sitio web, con fines comerciales, en cualquier medio y por cualquier medio técnico, sin autorización.</p>
                <h3>5.Protección de datos</h3>
                <p>Esta web cumple con las directrices de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal y sus reglamentos de aplicación.</p>
                <p>En este sentido, garantiza el correcto uso y tratamiento de los datos personales recogidos por el usuario, a través de {{ recopilationData }}</p>
                <p>Estos datos sólo se procesan con fines de {{ objetives }}</p>
                <p>El usuario puede ejercitar sus derechos de acceso, rectificación, cancelación y oposición a sus datos personales por correo postal en: {{ address }}</p>
                <h3>6.Responsabilidad</h3>
                <p>En la medida permitida por la ley, no existirá responsabilidad por: a) errores u omisiones en los contenidos; b) falta de disponibilidad de la web; c) la transmisión de programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
                <p>No existirá responsabilidad de ningún tipo por las opiniones vertidas por los estudiantes en la web, en concreto, en los chat al contestar las dudas legales. Toda persona que pregunte sus dudas legales en este sitio web tiene que saber que los que responden son estudiantes y que en ningún caso deben actuar en base a estas opiniones, teniendo un carácter meramente informador. Este servicio nunca sustituirá el asesoramiento de un profesional y por tanto, siempre recomendamos la contratación de un abogado especialista.</p>
                <h3>7.Cookies</h3>
                <p>Una cookie es un archivo de texto que se envía al navegador web de su ordenador, ya sea portatil o de sobremesa, móvil o tablet y que se utiliza para almacenar y recuperar información sobre la navegación realizada. Por ejemplo, recuerde su nombre de usuario y contraseña o las preferencias de su perfil.</p>
                <p>Si quieres saber que tipo de cookies usamos y como desactivarlas por favor visita <a href="">política de cookies</a></p>
                <h3>8.Cambios</h3>
                <p>Se reserva el derecho de hacer cualquier modificación que considere apropiada en su sitio web sin previo aviso, pudiendo cambiar, borrar o agregar tanto los contenidos y servicios proporcionados a través de él como la forma en que aparecen presentados.</p>
                <p>No obstante lo anterior, estos términos y condiciones pueden cambiar en cualquier momento. Las modificaciones entrarán en vigor desde el momento de su publicación.</p>
                <p>Este documento ha sido revisado por última vez el <strong>{{ date }}</strong>.</p>
            </div>
 
      <button class="btn btn-success mt-3 mb-5" v-on:click="generateLegal()">Generar aviso legal</button>

</b-container>

</div>
</template>

<script>
import MainHeader from './MainHeader'
import FileSaver from 'file-saver'
export default {
  components: {
    MainHeader,
  },
  
  data () {
    return {
      name: "",
      nameIP: "",
      date: "",
      address:"",
      personalData: "",
      contact: "",
      nif: "",
      descriptionService: "",
      recopilationData: "",
      objetives: ""
     
    }
    
  },
  created: function() {
      var objDate = new Date();
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      this.date = objDate.toLocaleDateString("es-ES", options)
  },
  methods: {
    generateLegal() {
   
        var text = document.getElementById("test");
        var blob = new Blob([`
        <!DOCTYPE html>
        <html lang="en">
          <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Aviso legal</title>
          </head>
          <body>
            <div class="legal">
                <h3>Resumen:</h3>
                    <ul>
                    <li>Responsable de la web: ` + this.name + `</li>
                    <li>Propiedad intelectual: ` + this.name + `</li>
                    <li>Datos recopilados:` + this.personalData + `</li>
                    <li>Contacto: <a href=mailto:` + this.contact + `>` + this.contact +`</a></li>
                    </ul>
                    <p>En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002, de 11 de Julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), ponemos a su disposición la información general de este sitio web:</p>
                    <h3>1.Titularidad</h3>
                    <p>Esta web pertenece a` + this.name + `, con domicilio en ` + this.address + ` y con el NIF: ` + this.nif + `</p>
                    <p>Si quieres ponerte en contacto con nosotros envíanos un correo electrónico a:<a href="mailto:` + this.contact + `">` + this.contact + `</a></p>
                    <p>Si decides seguir navegando por nuestra web te consideraremos un usuario de nuestra web, que has leído y aceptado el contenido de este documento. </p>
                    <h3>2.Descripción del Servicio</h3>
                    <p>` + this.descriptionService + `</p>
                            
                    <h3>3.Enlaces externos</h3>
                    <p>Esta web contiene enlaces externos. Sin embargo, no ejercemos ningún tipo de control sobre esas otras páginas webs o sobre su contenido, de hecho esas páginas webs se regirán por sus propios términos y condiciones. No tenemos ninguno tipo de vinculación o asociación con esas terceras páginas webs, ni asume ningún tipo de responsabilidad ni garantiza su disponibilidad técnica, calidad, fiabilidad, exactitud o veracidad.</p>
                    <h3>4.Propiedad intelectual e industrial</h3>
                    <p>El responsable de la web es el propietario o licenciatario de todos los derechos de propiedad intelectual e industrial del sitio web, así como de los elementos contenidos en ella. Por lo tanto, está expresamente prohibida la reproducción, distribución, comunicación pública y transformación de todo o parte de los contenidos de este sitio web, con fines comerciales, en cualquier medio y por cualquier medio técnico, sin autorización.</p>
                    <h3>5.Protección de datos</h3>
                    <p>Esta web cumple con las directrices de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal y sus reglamentos de aplicación.</p>
                    <p>En este sentido, garantiza el correcto uso y tratamiento de los datos personales recogidos por el usuario, a través de ` + this.recopilationData + `</p>
                    <p>Estos datos sólo se procesan con fines de ` + this.objetives + `</p>
                    <p>El usuario puede ejercitar sus derechos de acceso, rectificación, cancelación y oposición a sus datos personales por correo postal en: ` + this.address + `</p>
                    <h3>6.Responsabilidad</h3>
                    <p>En la medida permitida por la ley, no existirá responsabilidad por: a) errores u omisiones en los contenidos; b) falta de disponibilidad de la web; c) la transmisión de programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
                    <h3>7.Cookies</h3>
                    <p>Una cookie es un archivo de texto que se envía al navegador web de su ordenador, ya sea portatil o de sobremesa, móvil o tablet y que se utiliza para almacenar y recuperar información sobre la navegación realizada. Por ejemplo, recuerde su nombre de usuario y contraseña o las preferencias de su perfil.</p>
                    <p>Si quieres saber que tipo de cookies usamos y como desactivarlas por favor visita <a href="">política de cookies</a></p>
                    <h3>8.Cambios</h3>
                    <p>Se reserva el derecho de hacer cualquier modificación que considere apropiada en su sitio web sin previo aviso, pudiendo cambiar, borrar o agregar tanto los contenidos y servicios proporcionados a través de él como la forma en que aparecen presentados.</p>
                    <p>No obstante lo anterior, estos términos y condiciones pueden cambiar en cualquier momento. Las modificaciones entrarán en vigor desde el momento de su publicación.</p>
                    <p>Este documento ha sido revisado por última vez el <strong>` + this.date + `</strong>.</p>
            </div>
          </body>
        </html>`], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "avisolegal.html");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>