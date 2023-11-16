export default {
  global: {
    componenteFormativo:
      'Gestión de dispositivos de cómputo y servicios de red',
    descripcionCurso:
      'A través de este componente formativo, el aprendiz se apropiará los elementos y conceptos necesarios para la gestión de los dispositivos de cómputo y servicios de red.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/a4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evolución de la gestión de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Gestión de red',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos de la gestión de red',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Proceso de la gestión de red',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Áreas funcionales de gestión de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Gestión de configuración',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Gestión de prestaciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Gestión de fallos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de seguridad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228183_CF13_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.1 Gestión de configuración',
      referencia:
        'Osaba, M. N. (2016). Virtualización en redes definidas por <em>software</em>. [Trabajo final de Maestría, Instituto Tecnológico de Buenos Aires].',
      tipo: 'PDF',
      link:
        'https://ri.itba.edu.ar/server/api/core/bitstreams/799820b7-b9df-406e-ab36-1c45db60629f/content',
    },
  ],
  glosario: [
    {
      termino: 'Administrador',
      significado:
        'rol asignado en una red y que otorga permisos para realizar cualquier tarea y acceder a cualquier recurso.',
    },
    {
      termino: 'Enrutador',
      significado:
        'dispositivo de red que dirige o enruta paquetes a través de las redes.',
    },
    {
      termino: 'Estación de trabajo',
      significado: 'computadora que se ha unido a una red.',
    },
    {
      termino: 'Red',
      significado:
        'dos o más computadoras o dispositivos periféricos conectados entre sí.',
    },
    {
      termino: 'Repetidor',
      significado:
        'dispositivo de <em>hardware</em> que regenera cualquier señal que recibe y la envía de nuevo.',
    },
    {
      termino: 'Tarjeta de red',
      significado:
        'adaptador de red que se instala en el interior de la caja de la computadora.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banquet, P., & Bobillier, S. (2015). Linux: administración del sistema y explotación de los servicios de red. Ediciones ENI.',
      link: '',
    },
    {
      referencia: 'Barba Martí, A. (1999). Gestión de Red. Ediciones UPC.',
      link: '',
    },
    {
      referencia:
        'Beekman, G. (2005). Introducción a la informática. Pearson educación.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Experto temático',
          centro:
            'Centros de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Experto temático',
          centro:
            'Centros de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Heidi Zuleyma Gil Castañeda',
          cargo: 'Experta temática',
          centro:
            'Centro de la Industria, la empresa y los servicios - CIES Regional Norte de Santander',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Wilson Andres Arenales Cáceres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Producción Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Producción Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
