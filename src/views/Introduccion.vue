<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    div(style="background-color: #dde6fe").pt-1
      .m-3.bg-white.p-3
        .row.justify-content-center.align-items-center
          .col-lg-1.col-3(data-aos="fade-right"): img(src='@/assets/curso/temas/intro/1.svg', alt='')
          .col-lg-11(data-aos="fade-left"): p.mb-0 Para comenzar con el estudio de la temática del componente formativo, lo invitamos a ver el siguiente video.
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
