<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de seguridad
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        .cajon-b.color-acento-contenido.p-3.mb-4
          p.mb-0 Proceso donde se implementan las políticas de manejo por parte de los usuarios, de los diferentes recursos ofrecidos por la red, para evitar el acceso de entes no autorizados y ataques por parte de códigos maliciosos
        
        h4 Funciones de gestión de seguridad
        p Las funciones de la gestión de seguridad, deben garantizar el cumplimiento de la integridad, confidencialidad y disponibilidad de la información, entre las funciones se tienen:
        .contenido 
        .row.justify-content-center.align-items-center
          .col-lg-6
            .d-flex.align-items-center.mb-2
              img(src='@/assets/curso/temas/tema3/i1.svg', alt='' style="width: 38px").me-5
              p.mb-0 Monitorear la red de acceso no autorizados.
            .d-flex.align-items-center.mb-2
              img(src='@/assets/curso/temas/tema3/i2.svg', alt='' style="width: 38px").me-5
              p.mb-0 Cifrado de la información.
            .d-flex.align-items-center.mb-2
              img(src='@/assets/curso/temas/tema3/i3.svg', alt='' style="width: 38px").me-5
              p.mb-0 Perfilamiento de usuarios.
            .d-flex.align-items-center.mb-2
              img(src='@/assets/curso/temas/tema3/i4.svg', alt='' style="width: 38px").me-5
              p.mb-0 Uso de doble autenticación.
          .col-lg-6
            .d-flex.align-items-center.mb-2
              img(src='@/assets/curso/temas/tema3/i5.svg', alt='' style="width: 38px").me-5
              p.mb-0 Implementar procesos y procedimientos de seguridad.
            .d-flex.align-items-center.mb-2
              img(src='@/assets/curso/temas/tema3/i6.svg', alt='' style="width: 38px").me-5
              p.mb-0 Control de accesos a #[em software, hardware], red.
            .d-flex.align-items-center.mb-2
              img(src='@/assets/curso/temas/tema3/i7.svg', alt='' style="width: 38px").me-5
              p.mb-0 Configuraciones de privacidad.
            .d-flex.align-items-center.mb-2
              img(src='@/assets/curso/temas/tema3/i8.svg', alt='' style="width: 38px").me-5
              p.mb-0 Configuración de #[em logs.]
          
      .col-lg-4.col-7.d-none.d-lg-block(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/c1.svg', alt='')
    Separador
    .tarjeta.color-acento-contenido.d-inline-block.p-2.rounded-2.px-5.mb-5
      h3.text-white.mb-0.mx-4 Ataques en la gestión de seguridad
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/4.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        .cajon.color-secundario.p-4.mb-4(style="background-color: #d9f6fe")
          p.mb-0 Con el uso del internet, se ha incrementado de gran manera los ataques en la gestión de la seguridad, esas acciones delictivas pueden generar interrupción, interceptación e incluso modificación de datos. Los ataques pueden ser dirigidos a #[em software] o #[em hardware], afectando un usuario, un equipo o incluso una red.
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          h4 Comandos de gestión de red
          p Existen algunas herramientas en entornos de texto y gráficos que permiten a los administradores realizar verificaciones y controles de la red. Dentro del entorno de trabajo por consola, se tienen algunos comandos o instrucciones que al ser ejecutadas entregan una serie de información acerca del estado y situación de la infraestructura de red:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      div(titulo="Ipconfig")
        .row.justify-content-center.mb-5
          .col-lg-6.mb-lg-0.mb-3
            p El comando Ipconfig permite visualizar la configuración de red actual, los adaptadores instalados en el equipo y actualiza la configuración del protocolo DHCP.
          .col-lg-6.col-7: img(src='@/assets/curso/temas/tema3/5.png', alt='')
      div(titulo="Nslookup")
        p Permite identificar la dirección IP de un determinado nombre de dominio.
      div(titulo="NetUse")
        p Comando que permite modificar conexiones de recursos compartidos.
      div(titulo="Ping")
        .row.justify-content-center.mb-5
          .col-lg-6.mb-lg-0.mb-3
            p Permite verificar el estado de la comunicación del host, mediante el envío de paquetes. Permite visualizar datos de conectividad, tiempos de respuesta, velocidad con el fin de analizar la calidad de la red y latencia.
          .col-lg-6.col-7: img(src='@/assets/curso/temas/tema3/6.png', alt='')

      div(titulo="Route")
        p Utilizado para configurar las tablas de enrutamiento, visualiza las direcciones MAC asociadas a un adaptador, destinos de red, máscaras de red, puertas de enlace, interfaz y métrica.
      div(titulo="Netstat")
        p Permite visualizar las conexiones activas, tablas de ruteo IP, el estado de la conexión y estadísticas de los protocolos.
      div(titulo="GetMAC")
        .row.justify-content-center.mb-5
          .col-lg-6.mb-lg-0.mb-3
            p Permite visualizar las direcciones MAC que se encuentran asociadas en el adaptador de red. La Mac es la dirección física única en cada dispositivo. Útil para identificar el equipo.
          .col-lg-6.col-7: img(src='@/assets/curso/temas/tema3/7.png', alt='')
      div(titulo="Tracert")
        .row.justify-content-center.mb-5
          .col-lg-6.mb-lg-0.mb-3
            p Funcional para identificar la latencia de los paquetes entre el host origen y el destino. Permite rastrear la ruta y especificar el número de saltos.
          .col-lg-6.col-7: img(src='@/assets/curso/temas/tema3/8.png', alt='')
      div(titulo="Whois")
        p Describe los datos detallados correspondientes al dominio, tales como datos de contacto, fecha de caducidad del dominio, registro o disponibilidad del dominio.
    Separador
    p A continuación, se presenta un video sobre los aspectos más importantes de las áreas funcionales que se deben tener en cuenta para una buena gestión de red.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/IeEZ4SkQA08?si=uUGIrIKIW3sxGryK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Áreas funcionales gestion de red
        


</template>

<script>
export default {
  name: 'Tema3',
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
