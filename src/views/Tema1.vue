<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Evolución de la gestión de red
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #e9e2fe").mb-3
          p.mb-0 Cada día son más las organizaciones y empresas que requieren de una infraestructura tecnológica para optimizar los procesos que se desarrollan al interior de ellas. Una vez adquirido este precioso activo tecnológico, la evolución de la tecnología obliga a mantenerla actualizada, porque es necesario adaptarse a estos cambios tecnológicos para mantenerse a la par de sus similares.
        p.ms-4 La gestión de red no solo implica monitorear constantemente todos sus componentes, sino que también implica garantizar los servicios ofrecidos por esta. 
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/1.svg', alt='')
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Gestión de red
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/2.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        p.ms-4 Barba (1999) expresa, que la gestión de red extiende sus bases sobre la planificación, organización y el control de los elementos comunicacionales que garanticen una adecuada calidad de servicio sobre un determinado costo; este busca mejorar la disponibilidad, rendimiento y efectividad de los sistemas.
        .tarjeta.p-4(style="background-color: #e9e2fe").mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/3.svg', alt='')
            .col-lg-10
              p.mb-0 En consecuencia, se evidencian aspectos como la relación calidad del servicio / costo y la importancia de definir parámetros para calidad y control en cada servicio ofrecido de manera que se garanticen niveles óptimos en el comportamiento de la red.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Elementos de la gestión de red
    .bg-1-1.p-5.mn.mb-3
      p Algunos componentes que intervienen en el proceso de gestión de las redes, son:
      .tarjeta.bg-slyder.p-5.mb-5
        SlyderA(tipo='b').mx-5
          .row.align-items-center
            .col-lg-4.col-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/c1.jpg', alt='')
            .col-lg-8
              h4(style="color: #143eac") Agentes
              p  Es un software especial que se instala o aloja en un nodo o dispositivo de la red. La información recaudada por el agente se almacena en una base de datos especial denominada MIB (Management Information Base), la cual organiza la información de manera jerárquica y la pone a disposición del gestor cuando lo requiera.
          .row.align-items-center
            .col-lg-4.col-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/c2.jpg', alt='')
            .col-lg-8
              h4(style="color: #143eac") Gestores 
              p  En toda red debe existir mínimo un dispositivo que desempeñe el rol de gestor, en el cual la MIB contiene la información de todos los agentes que controla. El gestor también se conoce como NMS (Sistema de Gestión de Redes, Network Management System) y es el encargado de la administración de la red; según la arquitectura de la red, puede existir más de uno, y poseen una AGR (Aplicación de Gestión de Red), que proporciona una interfaz de operador para la gestión de red.
          .row.align-items-center
            .col-lg-4.col-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/c3.jpg', alt='')
            .col-lg-8
              h4(style="color: #143eac") Dispositivo administrativo
              p Se trata de cada uno de los nodos o dispositivos de la red, en los cuales se instala el agente recolector de información almacenada en la base de datos MIB.
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Proceso de la gestión de red
    .row.justify-content-center.mb-5
      .col-lg-5.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/4.svg', alt='')
      .col-lg-6
        .cajon-b.color-acento-contenido.p-2.m-4
          p.mb-0 Los procesos claves en las tareas de gestión de red son: el monitoreo y control de todos los elementos que conforman la red. Estos dos procesos deben ir a la par en el esfuerzo de mantener funcional la red de información y todos sus servicios.
    .tarjeta.p-5(style="background-color: #cbd9ff ").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3: img(src='@/assets/curso/temas/tema1/5.svg', alt='')
        .col-lg-11(data-aos="fade-left")
          p.mb-0 El monitoreo y el control se encuentran implicados en todas y cada una de las áreas de la gestión de una red, cobrando mayor o menor relevancia según su ubicación, es decir, para las áreas de contabilidad, prestaciones o fallos, son más importantes los procesos de monitoreo y desde las áreas de configuración o seguridad, se dará más relevancia los procesos de control.
    p A continuación, se presenta la descripción de los procesos de monitoreo y control.
    TabsC.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Proceso de monitoreo")
        .row
          .col-lg-4.mb-4.mb-md-0: img(src='@/assets/curso/temas/tema1/6.png', alt='')
          .col-lg-8
            p Proceso permanente que vigila y recauda información de todos los nodos de red, determinando el estado del funcionamiento. Se realiza de forma local o remota, mediante funciones de lectura, para el análisis y el diagnóstico del comportamiento de la red, buscando datos históricos, en caso de requerirse un análisis profundo en la búsqueda de motivos o causas de cualquier problema; proporciona también datos inmediatos como el proceso WebNMS, que permiten conocer en tiempo real el comportamiento de todos los dispositivos con auditoría continua, de manera que reporta cualquier error al momento y permite intervenir oportunamente, disminuyendo el impacto del incidente.
      .py-4.py-md-5(titulo="Proceso de control")
        .row
          .col-lg-4.mb-4.mb-md-0: img(src='@/assets/curso/temas/tema1/7.png', alt='')
          .col-lg-8
            p Se ejecuta de manera permanente, partiendo de los datos observados en el monitoreo, interviene evaluando la información recaudada, aplicando las políticas de calidad de servicio definidas, y estableciendo las directrices necesarias para mantener el servicio y la operatividad de la red de manera óptima; proporciona herramientas para afinar y optimizar las QoS (Políticas de Calidad del Servicio). Emplea funciones de escritura que permiten definir los ajustes necesarios para mejorar el rendimiento de la red.


















































      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
