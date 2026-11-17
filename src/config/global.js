export default {
  global: {
    Name: 'Caracterización y medición del proceso productivo',
    Description:
      'Aborda los fundamentos técnicos para interpretar la estructura operativa de una planta de confección industrial y medir su desempeño productivo. Sus contenidos integran la configuración del sistema productivo, los tipos de plantas y sistemas de producción, los recursos técnicos, la maquinaria, el flujo de materiales, las especificaciones de producción, el análisis de capacidad, los puntos críticos, los cuellos de botella, los estándares técnicos, los indicadores de productividad y la gestión visual para la respuesta operativa.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        titulo: 'Configuración del sistema productivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de plantas de confección y sistemas de producción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Especificaciones y necesidades de producción',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis del desempeño del proceso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Capacidad teórica y puntos críticos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Cuellos de botella y curvas de experiencia',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estándares técnicos de la planta',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores de productividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Eficiencia individual y del módulo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Capacidad por turno a partir del SAM',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Indicadores de flujo, materiales y calidad',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión visual y respuesta operativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Gráficas, semáforos y tableros de control',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Reportes de turno y registro de tiempos improductivos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Contingencias y acciones correctivas',
            hash: 't_4_3',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'Intervención orientada a eliminar o controlar la causa confirmada de una desviación.',
    },
    {
      termino: 'Capacidad operativa',
      significado:
        'Volumen de producción alcanzable bajo las condiciones reales de recursos, disponibilidad y eficiencia.',
    },
    {
      termino: 'Capacidad teórica',
      significado:
        'Máximo calculado bajo condiciones ideales a partir del tiempo disponible y el estándar técnico.',
    },
    {
      termino: 'Cuello de botella',
      significado:
        'Recurso, operación o condición que limita el ritmo general del sistema productivo.',
    },
    {
      termino: 'Curva de experiencia',
      significado:
        'Representación de la variación del tiempo o esfuerzo unitario conforme aumenta la producción acumulada.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Relación porcentual entre los minutos estándar producidos y los minutos utilizados.',
    },
    {
      termino: 'Especificación técnica',
      significado:
        'Información documentada que establece requisitos del producto, los materiales o el proceso.',
    },
    {
      termino: 'Estándar técnico',
      significado:
        'Referencia aprobada utilizada para comparar la ejecución real con una condición definida.',
    },
    {
      termino: 'Flujo de materiales',
      significado:
        'Recorrido de materias primas, piezas y productos a través de las etapas de transformación.',
    },
    {
      termino: 'Gestión visual',
      significado:
        'Presentación estructurada de datos operativos mediante gráficas, colores, señales o tableros.',
    },
    {
      termino: 'Indicador',
      significado:
        'Medida definida mediante variables, fórmula, unidad y periodo para interpretar el comportamiento de un proceso.',
    },
    {
      termino: 'Producto en proceso',
      significado:
        'Cantidad de piezas o unidades que permanece entre operaciones sin completar la totalidad de la transformación.',
    },
    {
      termino: 'SAM',
      significado:
        'Minutos estándar permitidos para ejecutar una operación o fabricar una unidad bajo el método definido.',
    },
    {
      termino: 'Sistema productivo',
      significado:
        'Conjunto articulado de recursos, procesos, personas e información que transforma entradas en productos.',
    },
    {
      termino: 'Tiempo improductivo',
      significado:
        'Intervalo programado en el que no se genera el resultado previsto debido a una interrupción identificada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Citaristi, I. (2022). International Labour Organization - ILO. En Europa Publications (Ed.), The Europa directory of international organizations 2022 (24.ª ed., pp. 343-349). Routledge.',
      link: '',
    },
    {
      referencia:
        'Das, S., & Patnaik, A. (2015). Production planning in the apparel industry. En R. Nayak & R. Padhye (Eds.), Garment manufacturing technology (pp. 81-108). Woodhead Publishing.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2014a). Automation systems and integration—Key performance indicators (KPIs) for manufacturing operations management - Part 1: Overview, concepts and terminology (ISO 22400-1:2014).',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2014b). Automation systems and integration - Key performance indicators for manufacturing operations management - Part 2: Definitions and descriptions (ISO 22400-2:2014).',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2015). Safety of machinery - Emergency stop function - Principles for design (ISO 13850:2015).',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (1991). Textiles - Stitch types - Classification and terminology (ISO 4915:1991).',
      link: '',
    },
    {
      referencia:
        'Nayak, R., & Padhye, R. (Eds.). (2015). Garment manufacturing technology. Woodhead Publishing.',
      link: '',
    },
    {
      referencia:
        'Nchalala, A., Alexander, T., & Taifa, I. W. R. (2023). Establishing standard allowed minutes and sewing efficiency for the garment industry in Tanzania. Research Journal of Textile and Apparel, 27(2), 246-263.',
      link: '',
    },
    {
      referencia:
        'Wright, T. P. (1936). Factors affecting the cost of airplanes. Journal of the Aeronautical Sciences, 3(4), 122-128.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar ',
          cargo: 'Experta temática ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón ',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
