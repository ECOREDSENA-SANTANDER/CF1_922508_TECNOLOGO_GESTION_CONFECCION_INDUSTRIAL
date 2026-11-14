<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Configuración del sistema productivo
      
      .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La configuración del sistema productivo comprende la articulación de los procesos, recursos, equipos, métodos de transferencia e información técnica necesarios para transformar materiales e insumos en productos confeccionados. Su análisis permite reconocer cómo se relacionan las entradas del sistema con las operaciones de transformación y con los resultados esperados de la producción.
            br
            br
            | En la industria de la confección, la configuración no depende únicamente de la cantidad de máquinas instaladas, sino que también intervienen el tipo de producto, las características de los materiales, el volumen requerido, la variedad de referencias, la secuencia operacional, las condiciones de procesamiento y el sistema empleado para trasladar las piezas entre puestos de trabajo. El sistema debe examinarse como una unidad interdependiente en la que el manejo de materiales, los procesos, el personal y los equipos determinan el comportamiento general de la producción (Das & Patnaik, 2015).
      
      .cajon.bg-color-3.p-4.mb-4
        p.mb-0 #[b Concepto técnico:] el sistema productivo transforma entradas en resultados mediante una estructura coordinada de procesos, personas, maquinaria, materiales e información. La modificación de uno de estos elementos puede alterar la continuidad, la capacidad o el desempeño del conjunto.
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1.
            span Preguntas para la caracterización inicial del sistema productivo
          .tabla-a.color-primario
            table
              thead
                tr
                  th Pregunta de caracterización
                  th Elemento analizado
              tbody
                tr
                  td ¿Qué producto debe elaborarse?
                  td Referencia, diseño, materiales, construcción y requisitos técnicos.
                tr
                  td ¿Qué procesos deben ejecutarse?
                  td Preparación, corte, ensamble, acabado y empaque.
                tr
                  td ¿Con qué recursos se cuenta?
                  td Personal, maquinaria, equipos, herramientas, información e infraestructura.
                tr
                  td ¿Cómo se desplazan los materiales?
                  td Secuencia, transferencia, almacenamiento temporal y recorridos.
        .col-lg-4
          img(src='@/assets/curso/temas/t1/2.png', alt='')
      
      p Responder estas preguntas requiere observar la planta desde dos planos que se complementan:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4 
          img(src='@/assets/curso/temas/t1/3.png', alt='')
        .col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="El primero corresponde a la condición documental")
              .col-md-12.mb-4.mb-md-0
                p Órdenes, fichas, tablas de medidas, secuencias y registros que expresan lo que debería ocurrir.    
            .row(titulo="El segundo se relaciona con la condición operativa")
              .col-md-12.mb-4.mb-md-0
                p Recursos efectivamente disponibles, recorridos reales, estados de las máquinas, acumulaciones y prácticas de transferencia. Cuando ambos planos coinciden, la caracterización ofrece una representación consistente, si difieren, la discrepancia debe quedar registrada como hallazgo y no resolverse mediante supuestos.

      p La unidad de análisis también debe definirse antes de iniciar la revisión. Una descripción puede referirse a toda la planta, a un área, a una línea, a un módulo, a una familia de productos o a una orden específica. Mezclar alcances produce interpretaciones imprecisas; la capacidad de una sección no representa necesariamente la capacidad global, y el comportamiento de una referencia no explica por sí solo el desempeño de todas las demás, de ahí que cada registro deba indicar qué se observó, durante qué periodo y bajo cuáles condiciones.

      .cajon.bg-color-3.p-4.mb-4
        p.mb-0 #[b Delimitación del análisis:] la caracterización es válida para el alcance declarado. Los resultados deben asociarse con la planta, área, línea, módulo, referencia, orden y periodo que dieron origen a la información; cualquier ampliación exige nueva evidencia.
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1  Tipos de plantas de confección y sistemas de producción
      
      p Las plantas de confección pueden caracterizarse según el alcance de sus procesos, el grado de especialización y la forma en que organizan la transformación del producto. Esta caracterización funciona como un referente para reconocer la estructura operativa y determinar los requerimientos generales del proceso; no corresponde a una clasificación universal e invariable.

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 2.
        span Caracterización de las plantas de confección
      .tabla-a.color-primario
        table
          thead
            tr
              th Tipo de planta
              th Configuración general
              th Características productivas
              th Requerimientos principales
          tbody
            tr
              td Integrada
              td Reúne varias etapas del proceso dentro de una misma organización.
              td Puede comprender recepción de materiales, extendido, corte, preparación, ensamble, acabado y empaque.
              td Exige coordinación entre áreas, compatibilidad de capacidades, continuidad del flujo e información técnica unificada.
            tr
              td Especializada
              td Concentra sus recursos en una operación, etapa o familia de productos.
              td Puede dedicarse al corte, ensamble, bordado, estampación, lavado, acabado u otra transformación específica.
              td Requiere una definición precisa de entradas y salidas, dominio técnico y coordinación con otras unidades productivas.
            tr
              td De subcontratación
              td Ejecuta operaciones asignadas por una organización contratante.
              td Trabaja con materiales, cantidades, especificaciones y fechas previamente determinadas.
              td Debe asegurar cumplimiento técnico, trazabilidad de materiales, control documental y compatibilidad de recursos.
      
      p Una planta integrada necesita sincronizar las áreas que intervienen en el producto, cuando una etapa libera cantidades superiores a las que puede procesar la siguiente, aumenta el producto en proceso; cuando entrega cantidades insuficientes, se interrumpe la continuidad operacional.  En una planta especializada, la estabilidad depende de la definición de los materiales recibidos, la transformación asignada y las condiciones de entrega.
      p Las unidades de subcontratación, por su parte, deben alinear sus recursos con las especificaciones del contratante y con los procedimientos de control establecidos (International Labour Organization, 1995).

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/temas/t1/4.png', alt='')
        .col-lg-7
          .row.mb-3
            .col-lg-2
              img(src='@/assets/curso/temas/t1/5.svg', alt='')
            .col-lg-10
              p El alcance de una planta puede modificarse entre productos o contratos. Una organización integrada para cierta familia de prendas podría externalizar un acabado especial que no realiza con sus propios recursos, del mismo modo, una unidad especializada puede incorporar temporalmente operaciones complementarias. Por ello, la clasificación no debe asumirse como una etiqueta permanente. Su función consiste en describir qué transformaciones se ejecutan dentro del alcance analizado y cuáles dependen de proveedores, talleres asociados u otras áreas.
          p Las fronteras entre procesos son especialmente relevantes cuando existe subcontratación. El envío de piezas, la devolución del producto intervenido, la identificación de lotes, la custodia de materiales y la aceptación de las entregas requieren información compatible entre las organizaciones participantes. La Organización Internacional del Trabajo (OIT) destaca que la estabilidad de estas unidades depende de instalaciones adecuadas, manejo ordenado de materiales, métodos definidos y comunicación precisa de las exigencias del contratante (International Labour Organization, 1995).
      
      .cajon.color-acento-contenido.p-4.mb-4
        p.mb-0 #[b Criterio de análisis:] el tipo de planta se reconoce por el alcance de los procesos realizados. El sistema de producción se identifica por la manera en que se distribuye el trabajo y se transfieren las piezas. Ambos conceptos se relacionan, pero cumplen funciones analíticas diferentes.
      
      p El sistema de producción determina la forma de organizar las operaciones, asignar el trabajo y movilizar las piezas. En confección industrial se emplean, entre otros, los sistemas por paquetes, paquetes progresivos, producción unitaria y organización modular o celular. Sus diferencias se relacionan con la unidad de transferencia, el nivel de especialización, la cantidad de producto en proceso y el método de manejo de materiales (Das & Patnaik, 2015).
      
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 3.
        span Sistemas de producción utilizados en confección
      .tabla-a.color-primario.mb-4
        table
          thead
            tr
              th Sistema
              th Unidad de transferencia
              th Organización del trabajo
              th Características del flujo
          tbody
            tr
              td Por paquetes
              td Lotes de piezas agrupadas.
              td Las piezas se procesan y trasladan en conjuntos identificados.
              td El paquete permanece unido durante una parte o la totalidad del recorrido.
            tr
              td Paquetes progresivos
              td Lotes que avanzan por una secuencia determinada.
              td Cada puesto ejecuta una operación especializada y entrega el paquete al proceso siguiente.
              td El flujo es secuencial y puede presentar acumulaciones entre puestos.
            tr
              td Producción unitaria
              td Una prenda o conjunto individual de piezas.
              td La unidad se dirige hacia las operaciones previstas mediante un sistema de transporte.
              td La transferencia individual reduce el manejo de paquetes y facilita la trazabilidad.
            tr
              td Modular o celular
              td Unidades individuales o lotes pequeños.
              td Un grupo atiende una secuencia relacionada de operaciones.
              td Los recorridos son cortos y existe mayor flexibilidad frente a cambios de referencia.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          img(src='@/assets/curso/temas/t1/6.png', alt='')
        .col-lg-9
          .row.justify-content-center.align-items-center.mb-4.bg-color-5
            .col-lg-5
              img(src='@/assets/curso/temas/t1/7.svg', alt='')
            .col-lg-7
              p Cada sistema modifica la forma en que se observa el avance, en el trabajo por paquetes, el control suele apoyarse en la identificación del lote, la cantidad de piezas y el punto del recorrido en el que se encuentra. La producción unitaria demanda un seguimiento más individualizado, mientras que la organización modular exige registrar el comportamiento colectivo de una secuencia corta. Estas diferencias no alteran los requisitos del producto, pero sí cambian la unidad de transferencia, la frecuencia de actualización y el tipo de evidencia disponible para reconstruir el flujo.
          p La cantidad de producto en proceso constituye una señal útil para distinguir el comportamiento de los sistemas. Los lotes grandes pueden simplificar ciertos registros, aunque incrementan el tiempo de permanencia y retrasan la detección de una desviación. Las transferencias pequeñas permiten identificar antes los cambios del flujo, pero requieren coordinación y abastecimiento más frecuentes. La decisión debe considerar el equilibrio entre continuidad, trazabilidad, manipulación y capacidad de respuesta, sin atribuir a una modalidad ventajas universales que dependen del contexto técnico (Das & Patnaik, 2015).
      
      p También conviene examinar la relación entre variedad y repetición. Cuando la planta procesa referencias estables y volúmenes altos, la especialización puede sostener una secuencia relativamente constante. Si la mezcla de productos cambia con frecuencia, la preparación, los ajustes y la reasignación de recursos adquieren mayor relevancia. Este contraste ayuda a explicar por qué dos plantas con maquinaria semejante pueden organizar el trabajo de manera distinta y obtener comportamientos diferentes en sus recorridos y tiempos de espera.

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 4.
        span Evidencias para reconocer el sistema de producción
      
      .row.mb-4
        .col-lg-4
          img(src='@/assets/curso/temas/t1/8.png', alt='')
        .col-lg-8
          .tabla-a.color-primario
            table
              thead
                tr
                  th Evidencia observable
                  th Pregunta técnica
                  th Interpretación inicial
              tbody
                tr
                  td Unidad de transferencia
                  td ¿Las piezas avanzan por lote, por prenda o en cantidades reducidas?
                  td Permite distinguir la forma básica de movilización del producto.
                tr
                  td Secuencia entre puestos
                  td ¿El recorrido es fijo, dirigido o reorganizable según la referencia?
                  td Muestra el grado de rigidez o adaptación del flujo.
                tr
                  td Identificación del producto
                  td ¿Cómo se conserva la relación entre piezas, talla, color y orden?
                  td Establece el nivel de trazabilidad durante la transformación.
                tr
                  td Acumulación intermedia
                  td ¿Dónde permanecen las piezas antes de la operación siguiente?
                  td Evidencia diferencias de ritmo o liberación por lotes.
                tr
                  td Responsabilidad de ejecución
                  td ¿La operación se asigna a un puesto especializado o a un grupo?
                  td Ayuda a reconocer la organización del trabajo.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          p.bg-color-6 La selección del sistema debe considerar el volumen, la variedad de referencias, la complejidad constructiva, el nivel de especialización, la infraestructura y el método de transferencia. El sistema por paquetes favorece la agrupación y el control por lotes; la producción unitaria facilita la trazabilidad individual; la configuración modular acerca operaciones relacionadas y mejora la capacidad de adaptación. La pertinencia depende de las condiciones reales de la planta y no de una preferencia general por una modalidad determinada.
          p Por lo anterior, la modalidad identificada debe contrastarse con la práctica observada. El nombre utilizado por la organización puede no coincidir plenamente con su funcionamiento; una línea denominada modular podría transferir paquetes grandes y mantener puestos altamente especializados, mientras que una planta por paquetes puede introducir transferencias reducidas en operaciones críticas. La descripción técnica debe privilegiar la evidencia del flujo y señalar las combinaciones que realmente se presentan.
        .col-lg-4
          img(src='@/assets/curso/temas/t1/9.png', alt='')
      
      .bg-color-3.mb-4
        img(src='@/assets/curso/temas/t1/10.png', alt='')
        .bg-color-1.p-4
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones(
            texto="<b>Pódcast:</b> Recursos técnicos, maquinaria y flujo de materiales"
            :audio="require_src('@/assets/actividad/audio/success.mp3')")
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p Explore el pódcast #[b Recursos técnicos, maquinaria y flujo de materiales] para reconocer los equipos, las herramientas y los procesos que intervienen en la producción de prendas de vestir, e identificar cómo contribuyen a la organización y eficiencia del proceso productivo.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Clasificación funcional de los recursos técnicos

      p Los recursos productivos pueden organizarse según la función que cumplen durante la transformación. Esta clasificación facilita la identificación de necesidades porque diferencia los elementos que actúan directamente sobre el producto de aquellos que proporcionan soporte, información, control o movimiento. También evita considerar como equivalentes recursos cuya presencia responde a exigencias técnicas distintas.

      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 5.
            span Clasificación funcional de los recursos empleados en la producción de prendas
          .tabla-a.color-primario
            table
              thead
                tr
                  th Categoría
                  th Recursos comprendidos
                  th Función técnica
              tbody
                tr
                  td Materiales directos
                  td Tejidos, no tejidos, hilos, entretelas, elásticos, cierres, botones, etiquetas y materiales de empaque.
                  td Forman parte del producto o se incorporan durante su procesamiento.
                tr
                  td Maquinaria principal
                  td Equipos de extendido, corte, fusionado, costura, unión, acabado, planchado e inspección.
                  td Ejecutan las transformaciones definidas en la secuencia operacional.
                tr
                  td Equipos auxiliares
                  td Generadores de vapor, compresores, sistemas de aspiración, mesas técnicas, equipos de iluminación y unidades de alimentación.
                  td Proporcionan las condiciones de soporte requeridas por las máquinas y las operaciones.
                tr
                  td Herramientas y dispositivos
                  td Tijeras, calibradores, plantillas, guías, carpetas, prensatelas, topes y aditamentos.
                  td Facilitan el posicionamiento, la conducción, el doblado, la medición o la repetibilidad del método.
                tr
                  td Instrumentos de medición
                  td Cintas métricas, reglas, escuadras, galgas, termómetros, medidores de presión y dispositivos de comprobación.
                  td Verifican dimensiones, parámetros de proceso y condiciones de operación.
                tr
                  td Medios de manejo
                  td Carros, bandejas, contenedores, estanterías, soportes, transportadores y sistemas suspendidos.
                  td Trasladan, protegen y organizan materiales, piezas y productos en proceso.
                tr
                  td Recursos documentales
                  td Fichas técnicas, secuencias operacionales, órdenes de producción, tablas de medidas, muestras y especificaciones.
                  td Comunican requisitos, métodos, parámetros y criterios de identificación.
                tr
                  td Infraestructura técnica
                  td Redes eléctricas, suministro de aire comprimido, vapor, ventilación, iluminación y áreas de almacenamiento.
                  td Mantienen las condiciones necesarias para la operación segura y estable de los equipos.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/temas/t1/11.png', alt='')
        .col-lg-7
          .row.mb-3
            .col-lg-2
              img(src='@/assets/curso/temas/t1/12.svg', alt='')
            .col-lg-10
              p No todos los recursos intervienen con la misma intensidad en cada referencia. Una prenda básica elaborada con tejido plano puede requerir máquinas convencionales de pespunte, fileteado y ojalado, además de equipos de corte y planchado. En cambio, una prenda confeccionada con tejido de punto elástico puede necesitar sistemas de alimentación diferencial, recubridoras, agujas de punta adecuada y dispositivos que controlen el estiramiento durante la costura. La variación del producto modifica la configuración técnica, incluso cuando la planta conserva las mismas áreas generales.
          p La identificación de recursos debe registrar tanto la existencia física como el estado funcional. Una máquina instalada, pero fuera de servicio, no representa capacidad disponible. Tampoco puede considerarse plenamente habilitado un equipo que opera sin el aditamento necesario, carece de mantenimiento, presenta inestabilidad en sus parámetros o no cuenta con los servicios de soporte exigidos. La diferencia entre recurso existente y recurso utilizable resulta decisiva al establecer si una orden puede ejecutarse bajo las condiciones especificadas.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Principio de correspondencia técnica
      
      p Un recurso se considera pertinente cuando responde simultáneamente a la operación, al material, al tipo de unión, a las características constructivas y a los requisitos de acabado. La coincidencia parcial puede resultar insuficiente: dos máquinas capaces de generar una puntada semejante pueden comportarse de forma diferente debido al sistema de alimentación, la geometría del cabezal, la configuración de la cama o los dispositivos instalados.

      .bg-color-3.mb-4
        img(src='@/assets/curso/temas/t1/13.png', alt='')
        .bg-color-1.p-4
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones(
            texto="<b>Pódcast:</b> Maquinaria para preparación, extendido y corte"
            :audio="require_src('@/assets/actividad/audio/success.mp3')")
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p Explore el pódcast #[b Maquinaria para preparación, extendido y corte] para identificar los equipos utilizados en estas etapas de la confección y comprender su importancia en el aprovechamiento de los materiales, la precisión del corte y la eficiencia del proceso productivo.

      p Después del corte, las piezas deben separarse sin perder la relación establecida por talla, color, lote u orden. Los piquetes, perforaciones y demás señales utilizadas para orientar el ensamble requieren una ejecución precisa, ya que una marca desplazada puede inducir errores de posicionamiento. La preparación también puede incluir numeración, clasificación, formación de paquetes y asociación de componentes complementarios.

      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 6.
            span Variables técnicas para la selección de equipos de corte
          .tabla-a.color-primario
            table
              thead
                tr
                  th Variable de análisis
                  th Verificación requerida
                  th Consecuencia técnica
              tbody
                tr
                  td Altura del tendido
                  td Comprobar el número de capas y el espesor total del material.
                  td Determina la capacidad de penetración y la estabilidad del corte.
                tr
                  td Geometría de las piezas
                  td Revisar curvas, ángulos, entrantes y dimensiones reducidas.
                  td Condiciona la maniobrabilidad y la precisión del equipo.
                tr
                  td Comportamiento del material
                  td Identificar elasticidad, deslizamiento, rigidez, recubrimientos o tendencia al deshilachado.
                  td Define las precauciones necesarias para evitar desplazamientos y alteraciones en los bordes.
                tr
                  td Volumen de producción
                  td Relacionar la cantidad requerida con la frecuencia de repetición del corte.
                  td Orienta la elección entre herramientas manuales, equipos convencionales o soluciones automatizadas.
                tr
                  td Exactitud dimensional
                  td Contrastar las tolerancias del producto con la precisión alcanzable por el método.
                  td Evita que la variación del corte se traslade al ensamble y a las dimensiones finales.
                tr
                  td Condiciones de seguridad
                  td Verificar guardas, dispositivos de protección, mantenimiento y procedimiento de uso.
                  td Reduce la exposición a cortes, atrapamientos y otros peligros asociados con la operación.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Maquinaria de fusionado y preparación de componentes
      
      p Algunas referencias incorporan entretelas termoadhesivas para aportar estabilidad, refuerzo, forma o comportamiento superficial. La unión se obtiene mediante la combinación controlada de temperatura, presión y tiempo. Estos parámetros no pueden establecerse de manera independiente, debido a que la modificación de uno de ellos altera la transferencia térmica y la adhesión alcanzada.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          img(src='@/assets/curso/temas/t1/14.png', alt='')
        .col-lg-9
          .row.justify-content-center.align-items-center.mb-4.bg-color-5
            .col-lg-5
              img(src='@/assets/curso/temas/t1/15.svg', alt='')
            .col-lg-7
              p Las prensas pueden funcionar por placas o mediante sistemas continuos. En ambos casos, la superficie de contacto debe distribuir de forma uniforme la presión y la temperatura. Antes de procesar una referencia es necesario comprobar la compatibilidad entre el tejido exterior y la entretela, dado que una regulación excesiva puede generar brillo, endurecimiento, migración del adhesivo o cambios dimensionales. Si la energía aplicada resulta insuficiente, la unión puede presentar baja adherencia, desprendimiento localizado o inestabilidad durante operaciones posteriores.
          p La preparación de componentes también comprende tareas como marcado, doblado, preformado, ubicación de refuerzos y conformación de piezas. Plantillas, guías y dispositivos deben reproducir la geometría prevista sin forzar el material. Cuando un accesorio modifica el borde, genera tensión desigual o dificulta la alimentación, la variación se transfiere a la costura y afecta la apariencia del producto.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Maquinaria de costura y unión
      
      img(src='@/assets/curso/temas/t1/16.png', alt='')

      p La máquina de costura forma una puntada mediante la interacción coordinada de aguja, hilo y mecanismos de enlace. Su elección no debe basarse únicamente en la denominación comercial del equipo. El análisis comienza por la unión especificada, continúa con la clase de puntada y considera después la estructura de la máquina, el sistema de alimentación, el tipo de aguja, el hilo, la densidad de puntadas y los dispositivos auxiliares.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7
          .row.mb-3
            .col-lg-2
              img(src='@/assets/curso/temas/t1/18.svg', alt='')
            .col-lg-10
              p La norma ISO 4915 establece una clasificación de las puntadas utilizadas en la confección de prendas, según su estructura y forma de formación. Entre las más comunes se encuentran las de clase 300, correspondientes al pespunte; las de clase 400, asociadas con la puntada de cadeneta; las de clase 500, empleadas para sobrehilar y proteger los bordes del tejido, y las de clase 600, utilizadas en costuras de recubrimiento. Es importante diferenciar la clasificación de las puntadas de la clasificación de las costuras, ya que esta última considera la disposición y configuración de los materiales que se unen.
          p Una misma clase de puntada puede requerir máquinas con configuraciones diferentes. La cama plana favorece el trabajo sobre componentes que pueden extenderse sobre una superficie horizontal; la cama cilíndrica facilita el procesamiento de formas tubulares o zonas de acceso restringido; la cama de poste ofrece apoyo para piezas tridimensionales y trayectorias curvas. La selección depende de la forma que adquiere el producto en el momento de la operación, no únicamente de su apariencia final.
        .col-lg-5
          img(src='@/assets/curso/temas/t1/17.png', alt='')
      
      p El mecanismo de alimentación controla el avance del material entre puntadas. El arrastre inferior resulta adecuado para numerosas operaciones convencionales, aunque puede ser insuficiente cuando las capas presentan deslizamiento relativo o cuando el material exige mayor control. La alimentación por aguja acompaña el desplazamiento de las capas durante una parte del ciclo. El transporte compuesto combina mecanismos para reducir el movimiento diferencial, mientras que la alimentación diferencial regula de manera distinta los elementos de arrastre y resulta especialmente relevante en materiales elásticos.

      .row.justify-content-center.align-items-center.mb-4.bg-color-4
        .col-lg-5
          img(src='@/assets/curso/temas/t1/19.png', alt='')
        .col-lg-7
          p La aguja actúa directamente sobre la estructura textil. Su diámetro, sistema, longitud y forma de punta deben corresponder con la máquina, el hilo y el material. Una aguja demasiado gruesa puede producir perforaciones visibles o daño en los hilos del tejido; una aguja excesivamente fina puede flexionarse, desviarse o romperse. En tejidos de punto, la punta debe atravesar la estructura sin cortar innecesariamente los bucles. Para materiales densos, recubiertos o con acabados particulares se requieren configuraciones capaces de penetrar sin deteriorar la superficie.
          p El hilo también participa en el comportamiento mecánico y visual de la costura. La composición, el título, la torsión, la lubricación, la resistencia y la elongación influyen en la regularidad de la formación. Su compatibilidad con la aguja debe verificarse para que el hilo atraviese el ojo sin fricción excesiva y pueda desplazarse por los mecanismos de tensión. Una regulación inadecuada puede generar puntadas sueltas, fruncimiento, roturas, bucles irregulares o desequilibrio entre los hilos.
      
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 7.
            span Relación entre la operación de costura y la configuración del equipo
          .tabla-a.color-primario
            table
              thead
                tr
                  th Parámetro
                  th Aspecto técnico que debe definirse
                  th Efecto sobre la operación
              tbody
                tr
                  td Tipo de costura
                  td Disposición de las capas, posición del borde y finalidad de la unión.
                  td Establece la configuración constructiva que debe obtenerse.
                tr
                  td Clase de puntada
                  td Forma de entrelazamiento y número de hilos requeridos.
                  td Determina la estructura de la unión, su apariencia y su comportamiento.
                tr
                  td Sistema de alimentación
                  td Arrastre inferior, alimentación por aguja, transporte compuesto o alimentación diferencial.
                  td Controla el avance relativo de las capas durante la costura.
                tr
                  td Tipo de cama
                  td Plana, cilíndrica, de poste u otra configuración especializada.
                  td Facilita el acceso y el posicionamiento según la geometría del componente.
                tr
                  td Aguja
                  td Sistema, diámetro y forma de punta.
                  td Influye en la penetración, la formación de la lazada y la integridad del material.
                tr
                  td Hilo
                  td Composición, título, torsión, resistencia y elongación.
                  td Afecta la formación, la estabilidad y la apariencia de la puntada.
                tr
                  td Densidad de puntadas
                  td Número de puntadas definido para una longitud determinada.
                  td Modifica la apariencia, la flexibilidad y el comportamiento de la costura.
                tr
                  td Guías y aditamentos
                  td Dispositivos de posicionamiento, doblado, alimentación o control del margen.
                  td Favorecen la repetibilidad del método y la uniformidad de la operación.
                tr
                  td Velocidad de operación
                  td Régimen compatible con el material, la máquina y el control requerido.
                  td Incide en la estabilidad del proceso, el calentamiento de la aguja y la precisión del manejo.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Compatibilidad de la máquina
      
      p La capacidad nominal del equipo no basta para justificar su asignación. Deben comprobarse la puntada requerida, la configuración de la cama, el sistema de alimentación, el rango de aguja e hilo, los aditamentos instalados, la regulación disponible y las condiciones de seguridad. Solo la correspondencia conjunta de estas variables permite establecer la aptitud técnica para una operación específica.

      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Equipos auxiliares, guías y aditamentos
      
      p La productividad y la repetibilidad de una operación no dependen exclusivamente del cabezal de costura. En numerosas tareas, el resultado está condicionado por elementos que posicionan, doblan, alimentan o estabilizan el material. Una guía de borde mantiene una distancia definida respecto de la trayectoria de la aguja; un dispositivo doblador forma el material antes de la costura; un prensatelas especializado mejora el contacto con superficies difíciles, y una plantilla limita la variación en contornos repetitivos.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/temas/t1/20.png', alt='')
        .col-lg-7
          .row.mb-3
            .col-lg-2
              img(src='@/assets/curso/temas/t1/21.svg', alt='')
            .col-lg-10
              p La incorporación de aditamentos exige comprobar su compatibilidad geométrica y funcional. El ancho de entrada debe admitir el espesor del material sin comprimirlo de manera irregular. La salida debe coincidir con la forma requerida por la operación. También se revisan la alineación respecto de la aguja, la estabilidad del montaje y la posibilidad de alimentar las piezas sin introducir torsiones. Un dispositivo mal ajustado puede aumentar la velocidad aparente y, al mismo tiempo, producir variaciones sistemáticas difíciles de corregir en procesos posteriores.
          p Entre los equipos de soporte se encuentran compresores, unidades de vacío, sistemas de extracción, generadores de vapor y reguladores eléctricos. Su capacidad debe responder al consumo simultáneo de las máquinas conectadas. Las variaciones en presión, temperatura, voltaje o suministro de vapor afectan la estabilidad de los equipos, razón por la cual estos servicios requieren control y mantenimiento. La OIT, como se citó en Citaristi (2022), señala que las instalaciones, herramientas, equipos y máquinas deben mantenerse en condiciones que permitan controlar los peligros asociados con su uso.
      
      p La verificación técnica de una máquina comprende, como mínimo, los siguientes aspectos:

      .row.justify-content-center.align-items-center.mb-4.bg-color-7
        .col-lg-4
          img(src='@/assets/curso/temas/t1/22.png', alt='')
        .col-lg-8
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/23.svg' alt='')
              p.text-center Confirmar que el equipo corresponde con la operación especificada.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/24.svg' alt='')
              p.text-center Revisar el estado de agujas, cuchillas, superficies, correas, guías y elementos móviles.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/25.svg' alt='')
              p.text-center Comprobar la estabilidad de las regulaciones y la respuesta de los controles.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/26.svg' alt='')
              p.text-center Verificar guardas, protectores y dispositivos de parada.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/27.svg' alt='')
              p.text-center Validar la disponibilidad de energía, aire comprimido, vapor o extracción cuando se requieran.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/28.svg' alt='')
              p.text-center Realizar una prueba con el material y los insumos definidos para la referencia.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/29.svg' alt='')
              p.text-center Registrar las condiciones bajo las cuales se obtuvo el resultado aceptable.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Maquinaria de acabado, planchado y presentación
      
      p Las operaciones de acabado eliminan residuos, estabilizan superficies, conforman partes de la prenda y preparan el producto para su presentación. Dependiendo de la referencia, pueden intervenir equipos de corte de hilos, ojalado, colocación de botones, presillado, limpieza, vaporizado, planchado, doblado y empaque.

      .row.justify-content-center.align-items-center.mb-4.bg-color-4
        .col-lg-5
          img(src='@/assets/curso/temas/t1/30.png', alt='')
        .col-lg-7
          p El planchado industrial combina energía térmica, humedad, presión y enfriamiento. La respuesta del material varía según la composición de la fibra, la estructura textil, el acabado superficial y los elementos incorporados. Un tejido termoplástico puede adquirir brillo o deformarse si se expone a una temperatura excesiva; ciertos adhesivos pueden reactivarse de manera no prevista, mientras que accesorios sensibles pueden cambiar de forma o color. Por esta razón, los parámetros deben establecerse mediante pruebas controladas y mantenerse durante el procesamiento.
          p Las mesas aspirantes ayudan a fijar la prenda sobre la superficie y facilitan la extracción de humedad. Los equipos con soplado reducen el contacto directo en artículos que no deben comprimirse. Las prensas proporcionan presión uniforme sobre áreas determinadas, y las formas vaporizadas permiten trabajar prendas tridimensionales. La selección depende del efecto de presentación que se busca, de la tolerancia térmica del material y de la geometría del producto.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Compatibilidad entre material, operación y maquinaria
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7
          .row.mb-3
            .col-lg-2
              img(src='@/assets/curso/temas/t1/32.svg', alt='')
            .col-lg-10
              p Las propiedades del material afectan todas las etapas. El espesor modifica la altura del tendido y la penetración de la aguja; la elasticidad altera la estabilidad dimensional y el avance durante la costura; el deslizamiento puede desplazar las capas, y una superficie sensible puede marcarse por presión o fricción. Los materiales recubiertos restringen el paso de aire y reaccionan de manera distinta al calor. Aquellos que presentan pelo o dirección visual deben conservar una orientación uniforme desde el corte hasta el ensamble.
          p La valoración técnica no debe limitarse a la composición declarada. Dos tejidos elaborados con la misma fibra pueden responder de manera diferente debido a su estructura, densidad, acabado, masa por unidad de área o estabilidad. La prueba sobre el material real permite observar alimentación, penetración, formación de la puntada, recuperación, fruncimiento y apariencia. Nayak y Padhye (2015) relacionan expresamente las propiedades de los tejidos con su comportamiento durante el extendido, el corte, la costura y el acabado.
        .col-lg-5
          img(src='@/assets/curso/temas/t1/31.png', alt='')
      
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 8.
            span Comportamiento del material y requerimientos de procesamiento
          .tabla-a.color-primario
            table
              thead
                tr
                  th Condición del material
                  th Riesgo durante el proceso
                  th Requerimiento técnico
              tbody
                tr
                  td Alta elasticidad
                  td Estiramiento durante el extendido o la costura.
                  td Controlar la tensión, utilizar alimentación compatible y verificar la recuperación dimensional.
                tr
                  td Superficie deslizante
                  td Desplazamiento entre capas y pérdida de alineación.
                  td Reducir la altura del tendido, estabilizar las capas y ajustar el sistema de alimentación.
                tr
                  td Estructura delicada
                  td Perforaciones, enganches, marcas o deterioro superficial.
                  td Seleccionar aguja, prensatelas, presión y dispositivos que reduzcan la agresión mecánica.
                tr
                  td Espesor elevado
                  td Dificultad de penetración y variación en cruces de costura.
                  td Verificar capacidad de la máquina, sistema de arrastre, aguja, hilo y elevación del prensatelas.
                tr
                  td Pelo o dirección visual
                  td Diferencias de tono o apariencia entre componentes.
                  td Mantener orientación uniforme durante extendido, corte, identificación y ensamble.
                tr
                  td Sensibilidad térmica
                  td Brillo, deformación, contracción o daño del acabado.
                  td Definir temperatura, tiempo, presión y método de enfriamiento mediante pruebas previas.
                tr
                  td Tendencia al deshilachado
                  td Pérdida de estabilidad en los bordes cortados.
                  td Proteger los bordes, controlar la manipulación y seleccionar la unión correspondiente.
                tr
                  td Recubrimiento superficial
                  td Marcas, adherencia no deseada o dificultad de alimentación.
                  td Regular presión y fricción, proteger las superficies y validar la compatibilidad térmica.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Flujo de materiales y producto en proceso

      p El flujo de materiales describe el recorrido físico seguido por materias primas, piezas cortadas, componentes, subconjuntos y prendas a medida que avanzan por las operaciones. No equivale a una simple sucesión de áreas. Para caracterizarlo deben reconocerse el origen y el destino de cada traslado, la unidad de transferencia, la cantidad movilizada, el tiempo de permanencia y el medio utilizado.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          img(src='@/assets/curso/temas/t1/33.png', alt='')
        .col-lg-9
          .row.justify-content-center.align-items-center.mb-4.bg-color-5
            .col-lg-5
              img(src='@/assets/curso/temas/t1/34.svg', alt='')
            .col-lg-7
              p Junto al desplazamiento físico circula información. La pieza necesita conservar su relación con una orden, una referencia, una talla, un color y un lote. Cuando el material se traslada sin identificación suficiente, el flujo pierde trazabilidad, aunque las piezas lleguen al puesto correcto. De igual manera, una etiqueta completa no compensa un recorrido que provoca esperas, devoluciones o acumulaciones. La continuidad depende de que el movimiento físico y el registro documental permanezcan sincronizados.
          p La unidad de transferencia puede estar formada por una pieza individual, un conjunto correspondiente a una prenda, un paquete, una bandeja o un contenedor. Su tamaño influye en la frecuencia de los movimientos y en la cantidad de producto que permanece entre operaciones. Los lotes grandes reducen el número de traslados, pero aumentan el tiempo necesario para completar y liberar cada conjunto. Las unidades pequeñas facilitan una transferencia más frecuente, aunque exigen mayor control de identificación y una coordinación más precisa.
      
      p El producto en proceso comprende las piezas y subconjuntos que han ingresado a transformación, pero aún no alcanzan la condición final. Una parte puede encontrarse en ejecución, en espera, en transporte, retenida para verificación o pendiente de completar un conjunto. Por ello, su cantidad debe interpretarse según la ubicación y el estado. La acumulación frente a una operación puede evidenciar diferencias de ritmo, interrupciones, liberaciones por lotes o ausencia de recursos; el dato aislado no identifica automáticamente la causa.

      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 9.
            span Etapas del flujo y controles asociados
          .tabla-a.color-primario
            table
              thead
                tr
                  th Etapa
                  th Condición del material
                  th Control requerido
              tbody
                tr
                  td Recepción
                  td Materiales e insumos entregados a la planta.
                  td Verificar identificación, cantidad, referencia, lote y estado físico.
                tr
                  td Almacenamiento
                  td Material pendiente de liberación o procesamiento.
                  td Mantener localización, protección, rotación y separación de referencias.
                tr
                  td Preparación
                  td Material acondicionado para extendido, corte o transformación.
                  td Confirmar orientación, alistamiento, correspondencia documental y disponibilidad de componentes.
                tr
                  td Corte
                  td Piezas obtenidas según el trazo y la orden.
                  td Conservar precisión, numeración, talla, color y pertenencia al lote.
                tr
                  td Formación de paquetes
                  td Componentes organizados para ingresar a ensamble.
                  td Comprobar integridad, cantidad, secuencia e identificación del conjunto.
                tr
                  td Transformación
                  td Piezas y subconjuntos sometidos a operaciones sucesivas.
                  td Registrar avance, operación realizada, condición y destino siguiente.
                tr
                  td Almacenamiento temporal
                  td Material detenido entre dos operaciones.
                  td Controlar cantidad, tiempo de permanencia, protección y estado.
                tr
                  td Terminación
                  td Prendas sometidas a acabado, planchado, inspección y presentación.
                  td Mantener correspondencia con la orden y evitar mezclas después del ensamble.
                tr
                  td Salida
                  td Producto liberado para empaque, almacenamiento o despacho.
                  td Confirmar integridad, identificación, cantidad y destino.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Medios de transferencia y manejo
      
      p Los medios de manejo deben conservar la forma, el orden y la identificación de los materiales. Las bandejas resultan útiles para componentes pequeños o delicados; los carros movilizan paquetes entre áreas; las estanterías separan referencias y estados; los contenedores protegen piezas sueltas, y los sistemas suspendidos trasladan unidades individuales mediante soportes aéreos. La automatización puede incorporar transportadores, lectores, identificadores y rutas programadas que registran la ubicación de cada unidad (Nayak & Padhye, 2018).

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7
          .row.mb-3
            .col-lg-2
              img(src='@/assets/curso/temas/t1/36.svg', alt='')
            .col-lg-10
              p La elección del medio depende de la masa, el volumen, la flexibilidad y la sensibilidad del material, además de la distancia y la frecuencia del traslado. Colocar piezas estructuradas en un recipiente de tamaño insuficiente puede deformarlas. Apilar componentes con superficies sensibles aumenta el riesgo de marcas. Transportar paquetes demasiado pesados incrementa la exigencia física y dificulta la manipulación. La OIT, como se citó en Citaristi (2022), recomienda considerar el tamaño, la forma y la naturaleza de los objetos al evaluar los riesgos derivados del manejo manual.pueden responder de manera diferente debido a su estructura, densidad, acabado, masa por unidad de área o estabilidad. La prueba sobre el material real permite observar alimentación, penetración, formación de la puntada, recuperación, fruncimiento y apariencia. Nayak y Padhye (2015) relacionan expresamente las propiedades de los tejidos con su comportamiento durante el extendido, el corte, la costura y el acabado.
          p Un medio de transferencia tampoco debe convertirse en almacenamiento permanente. Cuando los carros permanecen ocupados por material detenido, se reduce su disponibilidad y se crean reservas difíciles de visualizar. La situación puede inducir movimientos adicionales, uso de recipientes improvisados o colocación de piezas en superficies no destinadas al almacenamiento.
        .col-lg-5
          img(src='@/assets/curso/temas/t1/35.png', alt='')
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Criterio para el manejo de materiales
      
      p Todo traslado debe conservar cinco condiciones: identificación, integridad, cantidad, secuencia y destino. Si alguna se pierde durante el movimiento, el flujo deja de ser controlado, aunque el material continúe avanzando físicamente.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Reconocimiento de alteraciones en el flujo
      
      p La observación directa permite localizar recorridos que no aportan transformación. Entre ellos se encuentran los retornos hacia operaciones anteriores, el cruce de materiales con destinos opuestos, la búsqueda de componentes, el traslado hacia zonas temporales no identificadas y la manipulación repetida del mismo paquete. La Organización Internacional del Trabajo propone reducir transportes y manipulaciones innecesarias, utilizar recipientes apropiados y mantener los materiales próximos a los puntos donde serán requeridos (International Labour Organization, 1995).

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/37.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Una acumulación debe describirse mediante datos verificables. Conviene registrar el punto donde se encuentra, la referencia, la cantidad, la hora de observación, la operación anterior y el destino previsto. Expresiones como “hay demasiado material” o “el flujo está lento” no proporcionan información suficiente para establecer la magnitud ni comparar observaciones.
            br
            br
            | Las devoluciones requieren una identificación diferenciada. Una pieza puede regresar debido a una operación incompleta, una verificación pendiente, una mezcla de componentes o una instrucción técnica contradictoria. Si se reincorpora al flujo sin señalar su estado, existe el riesgo de que sea procesada como una unidad nueva o de que se pierda la relación con la causa del retorno.
      
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 10.
            span Manifestaciones observables de alteraciones en el flujo de materiales
          .tabla-a.color-primario
            table
              thead
                tr
                  th Manifestación
                  th Evidencia que debe registrarse
                  th Posible implicación técnica
              tbody
                tr
                  td Acumulación entre operaciones
                  td Cantidad, ubicación, referencia y tiempo de permanencia.
                  td Diferencia de ritmo, interrupción, liberación por lotes o restricción de recursos.
                tr
                  td Espera por material
                  td Operación detenida, componente faltante y hora de inicio.
                  td Abastecimiento incompleto, secuencia interrumpida o pérdida de identificación.
                tr
                  td Retorno de piezas
                  td Operación de origen, motivo registrado y destino de la devolución.
                  td Ejecución incompleta, necesidad de corrección o contradicción documental.
                tr
                  td Mezcla de referencias
                  td Códigos, tallas, colores o lotes encontrados en una misma unidad de transferencia.
                  td Pérdida de trazabilidad y riesgo de ensamble incorrecto.
                tr
                  td Recorrido inverso
                  td Punto de origen, destino y distancia recorrida.
                  td Secuencia física no correspondiente con el orden operacional.
                tr
                  td Manipulación repetida
                  td Número de transferencias o cambios de recipiente observados.
                  td Incremento del tiempo de manejo y exposición del material a daño o pérdida.
                tr
                  td Contenedores ocupados
                  td Cantidad de medios inmovilizados y material almacenado.
                  td Reducción de la disponibilidad logística y formación de inventario oculto.
                tr
                  td Piezas sin identificación
                  td Ubicación, cantidad y estado de transformación.
                  td Imposibilidad de confirmar su pertenencia y su siguiente operación.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Trazabilidad durante la transferencia
      
      p La trazabilidad permite reconstruir el recorrido de los materiales y reconocer su estado dentro de la secuencia. Un sistema básico de identificación incluye la orden de producción, la referencia, la talla, el color, el lote, la cantidad contenida y la operación de destino. Cuando la organización maneja numeración de piezas, esta debe permanecer asociada con los componentes que conformarán una misma prenda.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7
          .row.mb-3
            .col-lg-2
              img(src='@/assets/curso/temas/t1/39.svg', alt='')
            .col-lg-10
              p Los registros pueden mantenerse mediante etiquetas impresas, códigos de barras, identificadores por radiofrecuencia o controles digitales integrados. La tecnología seleccionada debe corresponder con la escala de producción y con la capacidad para actualizar los datos. Un código visible pierde utilidad si no se registra la transferencia; del mismo modo, un sistema electrónico no corrige errores originados por etiquetas duplicadas, lecturas omitidas o estados mal definidos.
          p La identificación debe acompañar al material sin deteriorarlo. Grapas, adhesivos, tintas o perforaciones pueden afectar tejidos delicados, superficies recubiertas o zonas visibles. El método de marcación se selecciona según la localización, la permanencia requerida y la sensibilidad del producto. También se controla que las etiquetas temporales sean retiradas en la etapa prevista y que su eliminación no deje residuos.
        .col-lg-5
          img(src='@/assets/curso/temas/t1/38.png', alt='')
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Verificación técnica del recorrido

      p La caracterización del flujo se construye siguiendo físicamente una referencia desde el ingreso de los materiales hasta la salida del producto. En cada punto se identifica la operación realizada, los recursos utilizados, la unidad de transferencia, el estado del material y la información que acompaña el movimiento. El registro debe diferenciar la transformación del traslado, la espera y el almacenamiento temporal, puesto que estas actividades cumplen funciones distintas.
      p Una revisión técnicamente estructurada considera los siguientes elementos:

      .row.justify-content-center.align-items-center.mb-4.bg-color-7
        .col-lg-4
          img(src='@/assets/curso/temas/t1/40.png', alt='')
        .col-lg-8
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/41.svg' alt='')
              p.text-center Identificar el material, componente o subconjunto que se desplaza.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/42.svg' alt='')
              p.text-center Precisar el origen y el destino de cada transferencia.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/43.svg' alt='')
              p.text-center Registrar el medio de manejo y la unidad trasladada.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/44.svg' alt='')
              p.text-center Comprobar la correspondencia con la secuencia operacional.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/45.svg' alt='')
              p.text-center Verificar la identificación de orden, referencia, talla, color y lote.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/46.svg' alt='')
              p.text-center Reconocer los puntos de espera, acumulación, devolución o mezcla.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/47.svg' alt='')
              p.text-center Examinar las condiciones de protección y conservación.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/48.svg' alt='')
              p.text-center Confirmar que los equipos y dispositivos utilizados sean compatibles con el material.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/49.svg' alt='')
              p.text-center Diferenciar los recursos disponibles de aquellos que se encuentran efectivamente habilitados.
            .tarjeta.bg-color-2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/50.svg' alt='')
              p.text-center Documentar las brechas entre las necesidades de la operación y los medios existentes.
      
      p La lectura conjunta de recursos, maquinaria y flujo muestra el funcionamiento real de la planta. Una interrupción atribuida inicialmente a la máquina puede originarse en la ausencia de piezas, en un aditamento incompatible o en una instrucción técnica incompleta. Del mismo modo, una acumulación de material puede relacionarse con la capacidad de una operación, con el tamaño de los paquetes o con la forma de liberar las órdenes. El análisis técnico debe conservar estas relaciones y evitar conclusiones basadas en un único elemento observado.

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2  Especificaciones y necesidades de producción
      
      p Las especificaciones convierten los requisitos del producto en información utilizable por las áreas de fabricación. Constituyen la base para identificar materiales, procesos, equipos, métodos y condiciones de ejecución. La información debe ser clara, coherente, actualizada y trazable respecto de la referencia o la orden correspondiente.

      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 11.
            span Relación entre especificaciones y necesidades de producción
          .tabla-a.color-primario
            table
              thead
                tr
                  th Especificación
                  th Información contenida
                  th Necesidad asociada
              tbody
                tr
                  td Identificación de la referencia
                  td Código, descripción, talla, color y orden.
                  td Sistema de identificación y trazabilidad.
                tr
                  td Representación técnica
                  td Dibujos, vistas, detalles constructivos y muestra física.
                  td Interpretación del diseño y definición de operaciones.
                tr
                  td Materiales e insumos
                  td Composición, referencia, características y cantidades.
                  td Abastecimiento, almacenamiento y métodos de manipulación.
                tr
                  td Tabla de medidas
                  td Dimensiones, puntos de medición y tolerancias.
                  td Instrumentos de medición y criterios de verificación.
                tr
                  td Costuras y puntadas
                  td Tipo de unión, puntada, margen y densidad.
                  td Máquinas, hilos, agujas, aditamentos y parámetros técnicos.
                tr
                  td Secuencia general
                  td Orden previsto para las operaciones.
                  td Organización del recorrido y disponibilidad de recursos.
                tr
                  td Acabado y presentación
                  td Planchado, limpieza, doblado, etiquetado y empaque.
                  td Equipos de terminación, materiales de empaque y condiciones de entrega.
                tr
                  td Criterios de aceptación
                  td Requisitos dimensionales, constructivos y visuales.
                  td Referentes para verificar la conformidad del producto.

      p Las especificaciones deben leerse como un sistema documental. Un dibujo técnico puede definir la ubicación de una pieza, mientras la secuencia indica cuándo se incorpora y la ficha de materiales establece con qué insumo debe ejecutarse. La tabla de medidas aporta dimensiones y tolerancias; los criterios de aceptación delimitan la condición final esperada. Ningún documento responde por sí solo a todas las preguntas de producción. La interpretación resulta confiable cuando se contrastan los elementos relacionados y se identifica cuál versión se encuentra autorizada.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          img(src='@/assets/curso/temas/t1/51.png', alt='')
        .col-lg-9
          .row.justify-content-center.align-items-center.mb-4.bg-color-5
            .col-lg-5
              img(src='@/assets/curso/temas/t1/52.svg', alt='')
            .col-lg-7
              p La vigencia documental adquiere especial importancia ante cambios de referencia. Una modificación en el material, la construcción o el acabado puede exigir otras máquinas, agujas, hilos, aditamentos o condiciones de manipulación. Si la actualización llega a unas áreas y no a otras, la planta trabaja con criterios diferentes. Por ello, la caracterización debe registrar códigos de versión, fechas o señales equivalentes que permitan comprobar que la información utilizada corresponde a la orden analizada.
          p También debe establecerse una jerarquía frente a posibles contradicciones. La muestra física, el dibujo, la tabla de medidas y la instrucción de costura pueden contener diferencias que no deben resolverse mediante interpretación individual. El procedimiento aplicable debe definir la fuente autorizada y el canal para solicitar aclaración. Mientras se obtiene una respuesta, la inconsistencia se registra como una necesidad de información y se evita convertirla en una especificación no aprobada.
      
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 12.
        span Controles de consistencia de la información técnica
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .tabla-a.color-primario
            table
              thead
                tr
                  th Control
                  th Comprobación
                  th Resultado esperado
              tbody
                tr
                  td Correspondencia
                  td Relacionar documentos, muestra, referencia y orden.
                  td Todos los elementos pertenecen al mismo producto y versión.
                tr
                  td Integridad
                  td Revisar que estén presentes los campos necesarios.
                  td La información permite identificar materiales, operaciones y criterios.
                tr
                  td Coherencia
                  td Comparar medidas, construcción, puntadas y secuencia.
                  td No existen instrucciones incompatibles entre documentos.
                tr
                  td Vigencia
                  td Confirmar versión, fecha o autorización de cambio.
                  td Se utiliza la información aprobada para el periodo.
                tr
                  td Trazabilidad
                  td Identificar origen, responsable y distribución.
                  td Puede reconstruirse quién emitió y dónde se aplicó la información.
        .col-lg-4
          img(src='@/assets/curso/temas/t1/53.png', alt='')

      p La identificación de necesidades productivas se realiza mediante la comparación entre lo solicitado y lo disponible. Deben revisarse los materiales, las máquinas, los equipos auxiliares, las herramientas, los perfiles técnicos, los medios de transporte interno, la documentación, los espacios de almacenamiento temporal y los servicios de soporte. Cuando un requisito no puede atenderse con los recursos instalados, se configura una brecha técnica que debe registrarse antes de iniciar la producción. 

      .cajon.color-acento-contenido.p-4.mb-4
        p.mb-0 #[b Brecha técnica:] diferencia verificable entre los requerimientos del producto y las condiciones disponibles. Puede originarse por ausencia de maquinaria, incompatibilidad con el material, falta de aditamentos, información incompleta o limitaciones del flujo.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/temas/t1/55.png', alt='')
        .col-lg-7
          .row.mb-3
            .col-lg-2
              img(src='@/assets/curso/temas/t1/54.svg', alt='')
            .col-lg-10
              p El reconocimiento de necesidades comienza con una comparación organizada. Para cada requisito se identifica el recurso relacionado, su estado y la evidencia utilizada para verificarlo. La respuesta no se limita a disponible o no disponible: pueden existir recursos parcialmente habilitados, capacidades restringidas, cantidades insuficientes o condiciones que requieren ajuste. Una descripción precisa facilita que la decisión posterior se tome con base en la brecha real y evita que diferentes situaciones queden agrupadas bajo una categoría genérica.
          p Las necesidades tampoco se reducen a adquisiciones. En algunos casos el equipo existe, pero requiere preparación; el material está disponible, aunque carece de identificación; la instrucción fue emitida, pero no llegó al punto de uso. Distinguir entre ausencia, insuficiencia, incompatibilidad y falta de habilitación permite documentar el hallazgo sin anticipar una solución. Esta separación resulta necesaria para conservar el alcance del componente y remitir cada decisión al proceso responsable.
      
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 13.
        span Clasificación inicial de brechas productivas
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .tabla-a.color-primario
            table
              thead
                tr
                  th Tipo de brecha
                  th Condición observada
                  th Registro requerido
              tbody
                tr
                  td Ausencia
                  td El recurso o la información no se encuentra disponible.
                  td Requisito afectado, evidencia de consulta y punto de uso.
                tr
                  td Insuficiencia
                  td La cantidad o capacidad disponible no cubre el alcance previsto.
                  td Cantidad requerida, cantidad disponible y periodo.
                tr
                  td Incompatibilidad
                  td El recurso existe, pero no responde al material o la operación.
                  td Parámetro técnico que impide su utilización.
                tr
                  td Falta de habilitación
                  td El recurso requiere ajuste, montaje, mantenimiento o autorización.
                  td Estado actual, condición pendiente y responsable de validación.
                tr
                  td Inconsistencia documental
                  td Las fuentes presentan vacíos o instrucciones contradictorias.
                  td Documentos comparados, versión y discrepancia encontrada.
        .col-lg-4
          img(src='@/assets/curso/temas/t1/56.png', alt='')


  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
