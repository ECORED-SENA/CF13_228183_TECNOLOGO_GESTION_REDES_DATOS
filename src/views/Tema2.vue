<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Áreas funcionales de gestión de red
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #e9e2fe ")
          p.mb-0 La clasificación de las funciones de gestión de red, realizada inicialmente para el entorno OSI y ampliamente aceptada, define cinco grandes áreas según su ámbito de utilización:
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/1.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Gestión de configuración")
            p Implica ejecutar permanentemente labores necesarias para que la red funcione apropiadamente en sus diferentes etapas, lo cual implica los parámetros de inicialización, mantenimiento y finalización, tanto de los componentes individuales como de los subsistemas lógicos.
          div(titulo="Gestión de calidad del servicio o prestaciones")
            p El proceso identifica como medidas para monitoreo y control, la eficiencia y el servicio.
          div(titulo="Gestión de fallos")
            p Consiste en el procesamiento de las falencias que puedan ocurrir en la red de datos, tanto en su parte lógica como física.
          div(titulo="Gestión de seguridad")
            p Es el proceso mediante el cual se desea mantener en un estado de confidencialidad el recurso más valioso que puede tener una organización: los datos y la información.
          div(titulo="Gestión de contabilidad")
            p Se le conoce como gestión de costos, consiste en administrar los recursos de acuerdo con las necesidades de cada uno. Producto del análisis de uso de los recursos, desarrolla funciones como la asignación de autorizaciones de uso, delega responsable de los registros contables y la asignación de cuotas, realiza el mantenimiento de cuentas, permite determinar el precio de los servicios y la definición de políticas de cuentas y tarifas.
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/2.svg', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #e9e2fe")
          p.mb-0 La dinámica del funcionamiento de la gestión, consiste en las labores de monitoreo y medición constante que ejecutan los agentes ubicados en los diferentes nodos o dispositivos de la red, quienes envían estos datos a los gestores encargados de ejecutar las acciones de control, mediante el envío de mensajes a los nodos, con las instrucciones necesarias para optimizar el funcionamiento de la red.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/tema2/3.svg', alt='')
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2  2.1  Gestión de configuración  
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3
        p  La gestión de la configuración define las funciones que permiten ejercer el control a los elementos de la red, para identificarlos, obtener información de ellos y también suministrarles información; se encarga a su vez de la adaptación de la red a los diferentes entornos operativos, incluyen ampliación de la red, cambios en topología e instalación de nuevo #[em software.] 
        .tarjeta.p-4(style="background-color: #e9e2fe").mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/4.svg', alt='')
            .col-lg-10
              h4 Funciones de gestión de configuración
              p.mb-0 La operatividad debe responder a los cambios realizados por el proceso de configuración, los cuales son una respuesta a los diferentes informes despachados por los procesos de monitorización y control.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/5.svg', alt='')
    p Dentro de las funciones ejecutadas en este proceso se identifican:
    .bg-2-1.mn.p-5.mb-2.pb-1
      .row.justify-content-center.mb-5
        .col-lg-4.col-7(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/6.svg', alt='')
        .col-lg-8(data-aos="fade-left")
          SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
            .tarjeta.bg-slyder2.p-4.pt-5(style="min-height: 350px")
              .row.justify-content-center.mb-3
                .col-5.mb-5
                  img(src='@/assets/curso/temas/tema2/n1.svg' alt='AvatarTop' style="width: 80px").m-auto
              p.text-center Configuración de los parámetros definidos para garantizar el funcionamiento normal de la red.
            .tarjeta.bg-slyder2.p-4.pt-5(style="min-height: 350px")
              .row.justify-content-center.mb-3
                .col-5.mb-5
                  img(src='@/assets/curso/temas/tema2/n2.svg' alt='AvatarTop' style="width: 80px").m-auto
              p.text-center Documentar y proporcionar información de los cambios y del estado de la configuración.
            .tarjeta.bg-slyder2.p-4.pt-5(style="min-height: 350px")
              .row.justify-content-center.mb-3
                .col-5.mb-5
                  img(src='@/assets/curso/temas/tema2/n3.svg' alt='AvatarTop' style="width: 80px").m-auto
              p.text-center Manejar servidores de nombres, nombrar e identificar los elementos de la red.
            .tarjeta.bg-slyder2.p-4.pt-5(style="min-height: 350px")
              .row.justify-content-center.mb-3
                .col-5.mb-5
                  img(src='@/assets/curso/temas/tema2/n4.svg' alt='AvatarTop' style="width: 80px").m-auto
              p.text-center Ejecutar los cambios necesarios a la configuración cuando sea necesario.
            .tarjeta.bg-slyder2.p-4.pt-5(style="min-height: 350px")
              .row.justify-content-center.mb-3
                .col-5.mb-5
                  img(src='@/assets/curso/temas/tema2/n5.svg' alt='AvatarTop' style="width: 80px").m-auto
              p.text-center Funciones de inicialización y apagado.
            .tarjeta.bg-slyder2.p-4.pt-5(style="min-height: 350px")
              .row.justify-content-center.mb-3
                .col-5.mb-5
                  img(src='@/assets/curso/temas/tema2/n6.svg' alt='AvatarTop' style="width: 80px").m-auto
              p.text-center Planificación de la red, determinando necesidades de ampliación o reducción de la red y de los servicios.
            .tarjeta.bg-slyder2.p-4.pt-5(style="min-height: 350px")
              .row.justify-content-center.mb-3
                .col-5.mb-5
                  img(src='@/assets/curso/temas/tema2/n7.svg' alt='AvatarTop' style="width: 80px").m-auto
              p.text-center Instalación de dispositivos o programas.
            .tarjeta.bg-slyder2.p-4.pt-5(style="min-height: 350px")
              .row.justify-content-center.mb-3
                .col-5.mb-5
                  img(src='@/assets/curso/temas/tema2/n8.svg' alt='AvatarTop' style="width: 80px").m-auto
              p.text-center Supervisión y control de los aspectos de red referentes a cambios de estado y definición de rutinas de control.
    Separador.pt-1
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Gestión de prestaciones
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
        p Esta gestión a diferencia de la gestión de fallos, tiene por objetivo garantizar que la red tenga funcionamiento óptimo en el presente, mientras que la gestión de fallos busca el funcionamiento óptimo a futuro.
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/7.svg', alt='')
    p En la gestión de prestaciones se encuentran:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Medidas orientadas a servicios")
        .col-md-7.mb-4.mb-md-0
          p Recolectando datos sobre calidad del servicio (QoS #[em quality of service]) de los diferentes elementos de red, se realiza el monitoreo y control, con el objetivo claro de mantener la calidad desde la percepción usuario final, para lo cual son aspectos fundamentales la disponibilidad de #[em hardware] y #[em software], medida en el porcentaje de tiempo que la red esté disponible para usuario final, los tiempos de respuesta de los dispositivos y servicios a las acciones del usuario y la fiabilidad definida como el tiempo sin errores en transmisión y entrega; la información recolectada se emplea para procesar datos y generar informes que permitan evitar embotellamientos, ejecutar acciones correctivas y verificar los niveles o umbrales de satisfacción.
        .col-lg-3.col-7
          figure
            img(src='@/assets/curso/temas/tema2/8.jpg', alt='Texto que describa la imagen')
      .row(titulo="Medidas orientadas a la eficiencia")
        .col-md-7.mb-4.mb-md-0
          p La eficiencia busca definir las medidas necesarias para que los niveles de satisfacción siempre se encuentren cubiertos y que esta cobertura implique los mínimos costos para la red. Para alcanzar este objetivo, se tienen en cuenta factores como el #[em Throughput] (tasa de transferencia efectiva), conocida como la velocidad real del transporte de datos, la tasa de ocurrencia de un evento y la utilización, entendida como la capacidad de un recurso para responder, medidas que permite detectar escenarios próximos de congestión.
        .col-lg-3.col-7
          figure
            img(src='@/assets/curso/temas/tema2/9.jpg', alt='Texto que describa la imagen')
      .row(titulo="Funciones de gestión de prestaciones").justify-content-center
        .col-lg-3.col-7
          figure
            img(src='@/assets/curso/temas/tema2/10.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Las funciones de esta gestión de prestaciones están enfocadas al servicio buscando la calidad ajustada a la exigencia, incluyen:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-angle-right.me-4
              | Recaudar y analizar los datos de los parámetros definidos, recopilar los informes de rendimiento, emplear estadísticas de servicio útiles y pertinentes, monitorear el estado de la red.
            li.d-flex
              i.fas.fa-angle-right.me-4
              | Evaluar registros históricos del sistema (registros de actividad, registros de errores, etc.)
            li.d-flex
              i.fas.fa-angle-right.me-4
              | Vigilar, para lo cual define las acciones al respecto (puntos de vigilancia, valores medidos, especificaciones del informe de medición).
            li.d-flex
              i.fas.fa-angle-right.me-4
              | Supervisar, detectar y describir los cambios a los parámetros, los desbordamientos del umbral y las reacciones a esos cambios.
            li.d-flex
              i.fas.fa-angle-right.me-4
              | Establecer los parámetros, generar alertas o alarmas para la gestión de fallos.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Gestión de fallos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        p Dicho procesamiento se refiere a la identificación de las posibles causas de una falla y su posterior corrección.
          br
          br
          | La gestión de fallos está estrechamente vinculada al proceso de monitorización, pues es este último el que permite escudriñar todo lo que sucede al interior de la malla informática, y es el que avisa al administrador de la red por medio de alarmas, sobre posibles fallos o deficiencias que pongan en peligro la integridad de dicha malla.
      .col-lg-6.col-7: img(src='@/assets/curso/temas/tema2/11.svg', alt='')
    p Algunas herramientas valiosas para una gestión de fallos exitosa son:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right").mb-lg-0.mb-3
        TabsA.color-acento-botones.mb-5
          .tarjeta.p-4(titulo="Archivos históricos (.log)" style="background-color: #e9e2fe ")
            h5 Archivos históricos (.log)
            p Herramientas esenciales que registran la actividad de los recursos y permiten el posterior análisis y procesamiento de datos, mínimo el agente debe poder mantener un registro (.log) para eventos significativos y errores, de manera que provea datos concretos de la ocurrencia de fallos o eventos, y con base en estos, la monitorización informará cuando detecte condiciones de error en los registros, cruces de umbral en los parámetros definidos y demás factores establecidos para la generación de alertas.
          .tarjeta.p-4(titulo="Administrador de red" style="background-color: #e9e2fe ")
            h5 Administrador de red
            p Este proceso es coadyuvante del encargado de administrar la red en la tarea de identificación de fallas y sus correcciones, a través de herramientas lógicas que realicen constantemente escaneo de la red, efectuando acciones como pruebas de conectividad, de integridad de datos, de integridad de protocolos o de tiempos de respuesta. Es importante que para una adecuada gestión de fallos, se provea de una interfaz de usuario efectiva que permita desarrollar oportuna y adecuadamente la localización, aislamiento y diagnóstico del fallo.
          .tarjeta.p-4(titulo="Funciones de gestión <br>de fallos" style="background-color: #e9e2fe ")
            h5 Funciones de gestión de fallos
            p Las funciones propias de esta gestión se relacionan directamente con las producidas en la gestión de alertas y semáforos generados por la gestión de prestaciones con base en los datos, informes estadísticos y todo el material de apoyo suministrado por los procesos de monitoreo.
      .col-lg-2.col-4: img(src='@/assets/curso/temas/tema2/12.svg', alt='')
    p En las funciones de gestión de fallos, pueden resaltarse entre otras:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-angle-right.me-4
            | Reaccionar a las alarmas o alertas para identificar los fallos empleando todos los recursos disponibles, e informar al personal técnico y clientes, siguiendo el protocolo preestablecido.
          li.d-flex
            i.fas.fa-angle-right.me-4
            | Aislar la red para garantizar el funcionamiento continuo.
          li.d-flex
            i.fas.fa-angle-right.me-4
            | Diagnosticar el incidente e identificar causas y alcances.
          li.d-flex
            i.fas.fa-angle-right.me-4
            | Resolver la situación, efectuando las reparaciones y reconfiguraciones pertinentes para disminuir el impacto.
          li.d-flex
            i.fas.fa-angle-right.me-4
            | Documentar debidamente la base de conocimientos con todos los datos concernientes al fallo, los procedimientos y estándares empleados, para proveer datos históricos valiosos a la gestión.
      .col-lg-6.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/13.svg', alt='')








































</template>

<script>
export default {
  name: 'Tema2',
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
