<template>
<div>
<div class="containerFluid">
      <main-header></main-header> 
</div>
  <b-container>
    <b-row class="my-1 mt-5">
        <p class="mb-5">Puedes generar tu <strong>contrato de alquiler</strong> rellenando los datos. Léelo para asegurar que está correcto y al final puedes generar el documento en formato PDF. Este contrato está redactado en base a un modelo oficial que puedes consultar <a href="http://www.juntadeandalucia.es/fomentoyvivienda/estaticas/sites/consejeria/areas/vivienda/documentos/CONTRATO_TIPO_ARRENDAMIENTO.pdf" target="blank">aquí</a></p>
        <b-col sm="2"><label for="input-default">Ciudad:</label></b-col>
        <b-col sm="6">
    <select class="form-control" v-model="city">
              <option>Álava</option>
              <option>A Coruña</option>
              <option>Albacete</option>
              <option>Alicante</option>
              <option>Almería</option>
              <option>Asturias</option>
              <option>Ávila</option>
              <option>Badajoz</option>
              <option>Barcelona</option>
              <option>Baleares</option>
              <option>Burgos</option>
              <option>Cáceres</option>
              <option>Cádiz</option>
              <option>Cantabria</option>
              <option>Castellón</option>
              <option>Ceuta</option>
              <option>Ciudad Real</option>
              <option>Córdoba</option>
              <option>Cuenca</option>
              <option>Girona</option>
              <option>Granada</option>
              <option>Guadalajara</option>
              <option>Guipúzcoa</option>
              <option>Huelva</option>
              <option>Huesca</option>
              <option>Jaén</option>
              <option>La Rioja</option>
              <option>Las Palmas</option>
              <option>León</option>
              <option>Lleida</option>
              <option>Lugo</option>
              <option>Madrid</option>
              <option>Málaga</option>
              <option>Melilla</option>
              <option>Murcia</option>
              <option>Navarra</option>
              <option>Ourense</option>
              <option>Palencia</option>
              <option>Pontevedra</option>
              <option>Salamanca</option>
              <option>Santa Cruz de Tenerife</option>
              <option>Segovia</option>
              <option>Sevilla</option>
              <option>Soria</option>
              <option>Tarragona</option>
              <option>Teruel</option>
              <option>Toledo</option>
              <option>Valencia</option>
              <option>Valladolid</option>
              <option>Vizcaya</option>
              <option>Zamora</option>
              <option>Zaragoza</option>                                                                      
          </select>
        </b-col>
      </b-row>
        <b-row class="my-1">
        <b-col sm="2"><label for="input-default">fecha de inicio del contrato:</label></b-col>
        <b-col sm="6">
          <b-form-input id="input-default" type="date" v-model="date"></b-form-input>
        </b-col>
      </b-row>
        <b-row class="my-1">
        <b-col sm="2"><label for="input-default">Nombre y apellidos del casero:</label></b-col>
        <b-col sm="6">
          <b-form-input id="input-default" type="text" v-model="owner"></b-form-input>
        </b-col>
      </b-row>
        <b-row class="my-1">
        <b-col sm="2"><label for="input-default">Nombre y apellidos del inquilino:</label></b-col>
        <b-col sm="6">
          <b-form-input id="input-default" type="text" v-model="tenant"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2"><label for="input-default">Dirección de la vivienda alquilada:</label></b-col>
        <b-col sm="6">
          <b-form-input id="input-default" type="text" v-model="address"></b-form-input>
        </b-col>
      </b-row>
        <b-row class="my-1">
        <b-col sm="2"><label for="input-default">Renta mensual:</label></b-col>
        <b-col sm="2">
          <b-form-input id="input-default" type="text" v-model="rent"></b-form-input>
        </b-col>
         <b-col sm="1">
          <p>&euro;</p>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2"><label for="input-default">Fianza:</label></b-col>
        <b-col sm="2">
          <b-form-input id="input-default" type="text" v-model="bail"></b-form-input>
        </b-col>
        <b-col sm="1">
          <p>&euro;</p>
        </b-col>
      </b-row>

    <div class="mt-5" id="test">
      <h1>Contrato de arrendamiento de vivienda</h1>
      <p>En {{ city }}, a {{ dateFirm }}</p>
      <p><strong>REUNIDOS</strong></p>
      <p>De una parte, {{ owner }}</p>
      <p>Y de la otra, {{ tenant }}</p>
      <p><strong>INTERVIENEN</strong></p>
      <p>Cada uno en su propio nombre y derecho, y se reconocen mutuamente capacidad legal suficiente para el otorgamiento del presente CONTRATO DE ARRENDAMIENTO y,</p>
      <p><strong>EXPONEN</strong></p>
      <p>I.- Don {{ owner }}, denominado en lo sucesivo y a efectos del presente contrato de
      arrendamiento ARRENDADOR, que es propietario de la vivienda sita
      en {{ address }}
      </p>
      <p>II.- Don {{ tenant }}, denominada en lo sucesivo y a los efectos del
        presente contrato ARRENDATARIO, que está interesado en alquilar la mencionada vivienda,
        para lo cual, ambos acuerdan formalizar el contrato que se articula en las siguientes,</p>
      <p><strong>CLAUSULAS</strong></p>
      <P>PRIMERA.- El presente contrato se otorga conforme a lo establecido en la Ley 29/l.994 de 24
      de Noviembre, de Arrendamientos Urbanos y se regirá por lo dispuesto en la misma, y por lo
      pactado en este documento.</P>
      <p>SEGUNDA.- El piso arrendado es la vivienda sita en {{ address }}, y que se destinará
      para uso exclusivo de vivienda de la arrendataria y de su familia, con exclusión de todo otro
      uso, y no podrá por consiguiente, cederlo, realquilarlo o subarrendarlo, en todo ni en parte, ni
      alojar en él a huéspedes sin permiso escrito del propietario.</p>
      <p>TERCERA.- El contrato comenzará a regir a partir del día {{ date }}, concertándose el
      arrendamiento por el plazo de <strong>UN AÑO</strong></p>
      <p>Concluido el periodo contractual pactado, el contrato se prorrogará por la tácita, por periodos
      de un año, mientras una de la partes no notifique a la otra, en el plazo de 15 días antes de la
      fecha de vencimiento del contrato o de alguna de sus eventuales prórrogas, su deseo de darlo
      por terminado.</p>
      <p>En cualquier caso, si la arrendataria quisiera desistir del cumplimiento total del contrato, deberá
      ésta indemnizar al arrendador con una cantidad equivalente a una mensualidad de la renta en
      vigor por cada año del contrato que reste por cumplir. Los periodos de tiempo inferior a un año,
      darán lugar a la parte proporcional de la indemnización</p>
      <p>CUARTA.- La renta inicial se establece en la cantidad de <strong>{{ rent }} euros mensuales</strong>,
      debiendo de satisfacerse por la arrendataria dentro de los cinco primeros días de cada mes. El
      importe de la renta deberá pagarse en el domicilio del arrendador o en la Cuenta Corriente
      que le indique el arrendador al arrendatario</p>
      <p>Las partes contratantes convienen que el importe total de la renta que en cada momento
      satisfaga la arrendataria durante la vigencia del contrato y en sus posibles prórrogas, se
      acomodará cada año a las variaciones que, en más o en menos, sufra el Indice General de
      Precios al Consumo que fije el Instituto Nacional de Estadística (u organismo que le sustituya
      en el futuro), aplicando sobre aquella renta el porcentaje que represente la diferencia existente
      entre los índices que correspondan al periodo de revisión, teniendo en cuenta que el mes de
      referencia para la primera actualización será el último índice que esté publicado en la fecha de
      celebración del contrato, y en las sucesivas el que corresponda al último aplicado.</p>
      <p>Las revisiones tendrán carácter acumulativo, de suerte tal que la primera revisión se efectuará
      tomando como base la primera renta inicialmente convenida y, para las sucesivas la renta
      revalorizada (renta + incrementos) como consecuencia de actualizaciones precedentes</p>
      <p>En ningún caso la demora, retraso o tardanza en la aplicación de dicha acomodación implicará
      pérdida, renuncia o abdicación del derecho del arrendador a practicar la misma.</p>
      <p>A los indicados efectos, las partes convienen que tendrá plena eficacia vinculante la
      notificación que practique el arrendador o su administrador por nota en el recibo de la
      mensualidad precedente a aquel en que la revalorización de renta haya de surtir efecto</p>
      <p>QUINTA.- La arrendataria, quién previamente ha procedido al examen exhaustivo y
      pormenorizado del piso y sus accesorios, declara recibir todo lo que es objeto del arriendo en
      perfecto estado para el uso a que se destina y presto para ser ocupado y utilizado, al completo
      de instalaciones y servicios y en igual estado ha de devolverlo una vez finalizado el contrato,
      siendo de cuenta de la arrendataria todas las reparaciones que hayan de realizarse por daños
      causados por el, o personas que del mismo dependan, en el edificio o vivienda por el mal uso,
      omisión o negligencia, siendo así mismo a cuenta de la arrendataria las reparaciones que exija
      el desgaste por el uso ordinario de la vivienda.</p>
      <p>Los servicios de gas, electricidad, teléfono y cualesquiera otros que pudieran ser susceptibles
      de individualización mediante aparatos contadores serán de cuenta de la arrendataria, que
      deberá contratarlos a sus costas con las empresas suministradoras, siendo también de su
      cuenta la eventual adquisición o reparación de los contadores correspondientes : los gastos de
      conservación y reparación de tales suministros y el costo de las modificaciones que en las
      mismas deba realizarse por disposición o imperativo legal o administrativo y si fuere el caso.
      Todo lo anterior se entiende con absoluta indemnidad del arrendador</p>
      <p>SEXTA.- Los gastos de comunidad, y los que graviten sobre la propiedad de la finca serán de
      cuenta del arrendador</p>
      <p>La arrendataria deberá respetar y cumplir en todo momento las normas por las que se rige la
      comunidad de propietarios de la que forma parte el piso arrendado.</p>
      <p>La arrendataria se obliga a permitir el acceso al piso, al propietario y a las personas y/o
      profesionales designados por el mismo para la inspección y comprobación del estado de la
      vivienda y sus elementos así como en su caso para la realización de cualquier tipo de obra o
      reparación que pudiera ser necesario llevar a cabo tanto en la vivienda arrendada como del
      edificio del que forma parte</p>
      <p>SÉPTIMA.- Salvo que concurra la autorización previa y por escrito del arrendador queda
      prohibida la realización de obras y la modificación de las instalaciones ; tener en el piso
      materiales peligrosos y/o antihigiénicos o que puedan perturbar la normal convivencia entre los
      vecinos de la finca ; subarriendo o cesión de la vivienda ; colocación de cualesquiera
      elementos que modifiquen la uniformidad o estético del edificio, o de las diversas partes que lo
      componen ; y el de dar a la vivienda cualquier otro uso que no sea el de satisfacer la necesidad
      permanente de vivienda de la arrendataria.</p>
      <p>La arrendataria será la única responsable de cuantos daños, tanto físicos como materiales
      puedan ocasionarse a terceros, y sean consecuencia, directa o indirecta de su habitación en la
      finca, eximiendo de toda responsabilidad al propietario, incluso por daños derivados de
      instalaciones para servicios o suministros.</p>
      <p>OCTAVA.- Por la arrendataria se constituye en este acto fianza por importe de
      {{ bail }} euros que equivale a una mensualidad de renta, que responderá del pago del
      alquiler, de los perjuicios por incumplimiento de las obligaciones contractuales y de los daños
      originados en el inmueble</p>
      <p>Durante el primer año de duración del contrato, la fianza no estará sujeta a actualización, pero
      transcurrido dicho plazo la fianza se actualizará en la cuantía que corresponda hasta que
      aquella sea igual a una mensualidad de la renta vigente en cada momento.</p>
      <p>NOVENA.- La arrendataria hace expresa y formal renuncia a todos los beneficios y derechos
      especiales que le concede la Ley 29/l994 de Arrendamientos Urbanos, y que teniendo el
      carácter de renunciables, no se le reconozcan expresamente en el presente contrato</p>
      <p>DÉCIMA.- Las partes convienen que de producirse el fallecimiento de la arrendataria una vez
      transcurridos dos años más tres años de prórroga, no será de aplicación el régimen de
      subrogación mortis, causa que regula el Art. 16 de la Ley 29/l994 de Arrendamientos Urbanos.
      De producirse dicha defunción en el plazo citado, el arrendamiento se extinguirá al cumplirse
      dicho plazo sea quien fuere el que hubiera sucedido a la arrendataria en el arrendamiento.</p>
      <p>A los efectos del Art. 14 de la vigente Ley de Arrendamientos Urbanos y a cuantos otros
      pudieran resultar pertinentes, las partes convienen que la enajenación de la vivienda extinguirá
      el arrendamiento.</p>
      <p><strong>FIRMAN</strong></p>
      <p>EL ARRENDADOR/A</p>
      <br>
      <p>...............</p>
      <p>ARRENDATARIO/A</p>
       <br>
      <p>...............</p>
    </div>
 
      <button class="btn btn-success mt-3 mb-5" v-on:click="generatePdf()">Generar contrato</button>
</b-container>
<div class="container">
  <sintoga></sintoga>
</div>
    
<div class="containerFluid">
      <main-footer></main-footer> 
</div>
</div>
</template>

<script>
import jsPDF from 'jspdf'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import Sintoga from './Sintoga'
export default {
  components: {
    MainHeader,
    MainFooter,
    Sintoga
  },
  
  data () {
    return {
      city:'',
      dateFirm: new Date().getUTCDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear(),
      date:'',
      owner: '',
      tenant:'',
      address:'',
      rent: '',
      bail: ''
     
    }
    
  },
  methods: {
    generatePdf() {
   
        var doc = new jsPDF();

        doc.fromHTML($('#test').html(), 15, 15, {
        'width': 170
    });
        doc.save('contrato.pdf');

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
