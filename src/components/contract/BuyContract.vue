<template>
  <div>
    <a name="alquiler"></a>
    <section class="wrap-contract">
      <div class="contract-item">
        <b-row>
          <p class="mb-5 mt-5">
            Puedes generar tu
            <strong>contrato de alquiler</strong> rellenando los datos. Léelo para asegurar que está correcto y al final puedes generar el documento en formato PDF. Este contrato está redactado en base a un modelo oficial que puedes consultar
            <a
              href="http://www.juntadeandalucia.es/fomentoyvivienda/estaticas/sites/consejeria/areas/vivienda/documentos/CONTRATO_TIPO_ARRENDAMIENTO.pdf"
              target="blank"
            >aquí</a>
          </p>
          <b-col sm="2">
            <label for="input-default">Ciudad:</label>
          </b-col>
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
          <b-col sm="2">
            <label for="input-default">fecha de inicio del contrato:</label>
          </b-col>
          <b-col sm="6">
            <b-form-input id="input-default" type="date" v-model="date"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-default">Nombre y apellidos del casero:</label>
          </b-col>
          <b-col sm="6">
            <b-form-input id="input-default" type="text" v-model="owner"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-default">Nombre y apellidos del inquilino:</label>
          </b-col>
          <b-col sm="6">
            <b-form-input id="input-default" type="text" v-model="tenant"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-default">Dirección de la vivienda alquilada:</label>
          </b-col>
          <b-col sm="6">
            <b-form-input id="input-default" type="text" v-model="address"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-default">Renta mensual:</label>
          </b-col>
          <b-col sm="2">
            <b-form-input id="input-default" type="text" v-model="rent"></b-form-input>
          </b-col>
          <b-col sm="1">
            <p>&euro;</p>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-default">Fianza:</label>
          </b-col>
          <b-col sm="2">
            <b-form-input id="input-default" type="text" v-model="bail"></b-form-input>
          </b-col>
          <b-col sm="1">
            <p>&euro;</p>
          </b-col>
        </b-row>

        <div class="mt-5" id="test">
          <h2>CONTRATO DE COMPRAVENTA DE VIVIENDA</h2>

          <!-- Ciudad y fecha actual -->
          <p>
            En Madrid, a {{ new Date().getUTCDate() +
            "/" +
            (new Date().getMonth() + 1) +
            "/" +
            new Date().getFullYear(),}}
          </p>

          <h3>REUNIDOS</h3>
          <!-- Datos personales de las partes -->
          <p>
            De un lado la parte vendedora, D ......................., mayor de edad, con domicilio en
            ..................., con DNI no ............... casado en régimen de comunidad de
            gananciales con Da. ..................., mayor de edad, con domicilio en ................., y
            con DNI no .......................
          </p>
          <p>
            Y de otro la parte compradora, D.................................., mayor de edad, con
            domicilio en .............., de estado civil soltero y con DNI no .........................
          </p>

          <p>
            Ambas partes tienen y se reconocen la capacidad legal necesaria para el otorgamiento
            del presente contrato , y a tal fin.
          </p>
          <h3>EXPONEN</h3>
          <!-- Datos escritura -->
          <p>
            PRIMERO: Que ................................................. son dueños en pleno dominio
            del inmueble sito en ................................. Según consta en escritura, de fecha 16
            de enero de 1975 otorgada ante el Notario de .................................., con el no
            ................... de orden de su protocolo. Escritura cuya copia queda unida a este
            contrato.
          </p>
          <!-- Información registral -->
          <p>
            Dicho inmueble figura inscrito en el REGISTRO DE LA PROPIEDAD No 5 DE
            MADRID, en el Tomo IV, Libro II, Folio 2.568, Finca no 555, Inscripción 1a.
            Figura con la referencia catastral número: .............................
            Cuenta con 125 metros cuadrados construidos y 102 metros cuadrados útiles,
            correspondiéndole una cuota del 1,0253 en los elementos comunes.
          </p>

          <!-- Características -->
          <p>Como ANEXOS cuenta con:</p>
          <p>
            Plaza de garaje de 15 metros cuadrados, situada en el garaje común, con el no 24,
            Trastero de 21 metros cuadrados, situado en la zona común de trasteros con el no 14
          </p>
          <p>
            SEGUNDO: El expresado inmueble se encuentra en edificio en régimen de
            COMUNIDAD, regulada por la Ley de Propiedad Horizontal.
          </p>
          <p>
            TERCERO.- D. ........................ Y Da. ............................ manifiesta que el
            citado inmueble se encuentra libre de cargas, así como de arrendatarios, ocupantes o
            precaristas.
          </p>
          <p>
            CUARTO.- La vivienda se encuentra al corriente en el pago de gastos de la Comunidad
            de Propietarios, según acredita la parte vendedora mediante certificado del Secretario de
            la Comunidad con el visto bueno del Presidente, emitida conforme al art. de la Ley de
            Propiedad Horizontal.
          </p>
          <p>
            QUINTO.- Expuesto cuanto antecede, las partes convienen en celebrar el presente
            contrato de compraventa de la vivienda y anexos descritos en el expositivo primero
            conforme a las siguientes:
          </p>

          <h3>ESTIPULACIONES</h3>

          <p>
            <strong>PRIMERA.- Objeto</strong>
          </p>
          <p>
            D. ................................. Y Da. ............................................, VENDEN la
            vivienda y anexos reseñados a D. .................................., quien a su vez
            acepta y COMPRA.
          </p>
          <p>
            La venta se efectúa con cuantos derechos, usos, servicios y servidumbres le sean
            inherentes a la vivienda y anexos vendidos, incluida la parte proporcional que le
            corresponde en los elementos comunes del edificio y en las zonas comunes de la
            urbanización, libre de arrendatarios, ocupantes y cargas.
          </p>

          <!-- IMPORTANTE PAGO Y FORMA DE PAGO -->
          <p>
            <strong>SEGUNDA.- Precio</strong>
          </p>

          <p>
            Las partes acuerdan fijar el precio total de la compraventa en la cantidad de
            DOSCIENTOS MIL EUROS. Treinta y tres millones, doscientas setenta y siete mil,
            doscientas (33.277.200) pesetas; según el siguientes detalle:
          </p>
          <!-- Partes Casa, garajem etc. -->
          <p>Precio de la vivienda 180.000 ¤ (29.949.480 ptas.)</p>
          <!-- Precio del garaje 15.000 ¤ (2.495.790 ptas.)
          Precio del trastero 5.000 ¤ (831.930 ptas.)-->

          <p>
            <strong>TERCERA.- Forma de pago</strong>
          </p>
          <p>
            En este acto D. ............................................... entrega a D.
            ....................................... Y Da. ................................... de la cantidad de
            VEINTE MIL EUROS. Tres millones, trescientas veintisiete mil, setecientas veinte
            (3.327.720) pesetas, a cuenta del precio total.
          </p>
          <p>
            D. ...................................... Y Da. ................................... dan por recibida
            la cantidad entregada en concepto de anticipo otorgando carta de pago mediante este
            documento formal.
          </p>
          <p>
            El resto de la cantidad convenida: CIENTO OCHENTA MIL EUROS. Veintinueve
            millones, novecientas cuarenta y nueve mil, cuatrocientas ochenta (29.949.480) pesetas,
            se abonará en el acto de entrega de llaves y otorgamiento de escritura pública, mediante
            cheque nominativo a nombre del vendedor, conformado por entidad bancaria.
          </p>

          <!-- IMPORTANTE PAGO Y FORMA DE PAGO -->

          <p>
            <strong>CUARTA.- Otorgamiento de escritura pública</strong>
          </p>
          <p>
            Ambas partes se obligan a otorgar escritura pública de compraventa en el plazo de
            <strong>TREINTA días naturales.</strong>
          </p>
          <p>La elección del Notario autorizante corresponderá a la parte compradora.</p>

          <p>
            <strong>QUINTA.- Entrega del inmueble</strong>
          </p>
          <p>
            D. ................................ Y Da. ..................................... se comprometen a
            hacer entrega a la parte compradora de la posesión y de las llaves de la vivienda y
            anexos en el acto de otorgamiento de escritura pública ante el Notario elegido por la
            parte compradora.
          </p>
          <p>
            <strong>SEXTA.- Pago de gastos e impuestos</strong>
          </p>

          <p>
            Los gastos e impuestos consecuencia del otorgamiento de la escritura pública de
            compraventa serán por cuenta de cada parte conforme a lo establecido legalmente. En
            consecuencia corresponden a la parte compradora los gastos de primera copia de la
            escritura y posteriores, los de la inscripción de la escritura en el Registro de la
            Propiedad, el pago del Impuesto de Transmisiones Patrimoniales y del Impuesto de
            Actos Jurídicos Documentados derivado de la escritura de compraventa. A la parte
            vendedora le corresponde abonar los gastos de la escritura matriz y el pago del Impuesto
            sobre el Incremento del Valor de los Terrenos de Naturaleza Urbana.
          </p>

          <p>
            A partir de la entrega, vendrá obligada la parte compradora a pagar todos los gastos,
            impuestos, tasas y arbitrios que se refieran a la vivienda y anexos objeto de este
            contrato , así como los proporcionales a los elementos comunes que le correspondan.
            Tambiénserán de cuenta de la parte compradora los gastos y tributos devengados desde
            la puesta a disposición de la vivienda y anexos si la entrega se demorase por causa que
            le sea imputable.
          </p>
          <p>
            <strong>SEPTIMA.- Comunidad de propietarios.</strong>
          </p>
          <p>
            La parte compradora, a partir del día en que se ponga a su disposición la vivienda,
            participará en la proporción que resulte de la aplicación de los coeficientes que le
            correspondan, en el mantenimiento de los gastos comunes del edificio y de la zona
            común de la urbanización.
          </p>

          <p>
            En este acto, la parte vendedora hace entrega a la parte compradora de los Estatutos de
            la Comunidad de Propietarios, así como del Reglamento de Régimen Interior.
          </p>
          <p>
            <strong>OCTAVA.- Fuero.</strong>
          </p>
          <p>
            Las partes se someten a los Juzgados y Tribunales de Madrid, lugar donde radica la
            finca, para resolver cuantas divergencias pudieran surgir por motivo de la interpretación
            y cumplimiento de este contrato.
          </p>

          <p>
            Leído el presente documento por ambas partes, y estando conformes con su contenido,
            lo firman por duplicado en todas las páginas en el lugar y fecha reseñadas en el
            encabezamiento.
          </p>

          <p>
            <strong>FIRMAN</strong>
          </p>
          <p>COMPRADOR</p>
          <br />
          <p>...............</p>
          <p>VENDEDOR</p>
          <br />
          <p>...............</p>
        </div>

        <button
          class="btn btn-success mt-3 mb-5"
          v-if="city && date && owner && tenant && address && rent && bail"
          v-on:click="generatePdf()"
          :disabled="disabled == 0 ? true : false"
        >Generar contrato</button>
      </div>
    </section>
    <div class="container">
      <sintoga></sintoga>
    </div>

    <!-- <div class="containerFluid">
      <main-footer></main-footer>
    </div>-->
  </div>
</template>

<script>
import jsPDF from "jspdf";
import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";
import Sintoga from "../Sintoga";
import request from "../../services/score.service";
const restRequestService = new request();
export default {
  components: {
    MainHeader,
    MainFooter,
    Sintoga
  },

  data() {
    return {
      city: "",
      dateFirm:
        new Date().getUTCDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear(),
      date: "",
      owner: "",
      tenant: "",
      address: "",
      rent: "",
      bail: "",
      contractName: "buy-contract",
      contractScore: [],
      disabled: 1
    };
  },
  created() {
    // restRequestService.getScore(this.contractName, this.contractScore);
  },
  methods: {
    generatePdf() {
      var doc = new jsPDF();

      doc.fromHTML($("#test").html(), 15, 15, {
        width: 170
      });
      doc.save("contrato.pdf");
      // restRequestService.UpdateScore(this.contractName, this.contractScore);
      this.resetForm();
    },
    resetForm() {
      (this.city = ""),
        (this.dateFirm =
          new Date().getUTCDate() +
          "/" +
          (new Date().getMonth() + 1) +
          "/" +
          new Date().getFullYear()),
        (this.date = ""),
        (this.owner = ""),
        (this.tenant = ""),
        (this.address = ""),
        (this.rent = ""),
        (this.bail = "");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.wrap-contract {
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
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.contract-item:nth-child(1) {
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: 10%;
  margin-left: 10%;
}
.contract-item:nth-child(1) p {
  color: black;
}
</style>
