<template>
  <div>
    <Bienvenida id="inicio" />
    <SobreNosotros />
    <CarruselAnuncios id="anuncios" />
    <ProximosEventos id="eventos" />
    <YoutubeVideos />
    <RedesSociales />
    <Ubicacion />
    <PieDePagina />
    <BotonTop />
  </div>
</template>

<script>
import PieDePagina from "./PieDePagina.vue";
import Ubicacion from "./Ubicacion.vue";
import Servicios from "./Servicios.vue";
import Pastor from "./Pastor.vue";
import Bienvenida from "./Bienvenida.vue";
import ProximosEventos from "./Eventos/ProximosEventos.vue";
import CarruselAnuncios from "./CarruselAnuncios.vue";
import Ministerios from "./Ministerios.vue";
import BotonTop from "./BotonTop.vue";
import SobreNosotros from "./SobreNosotros.vue";
import RedesSociales from "./RedesSociales.vue";
import YoutubeVideos from "./YoutubeVideos.vue";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/asap";

export default {
  components: {
    YoutubeVideos,
    PieDePagina,
    Ubicacion,
    Ministerios,
    Servicios,
    Pastor,
    CarruselAnuncios,
    Bienvenida,
    SobreNosotros,
    ProximosEventos,
    BotonTop,
    RedesSociales,
  },
};
</script>
