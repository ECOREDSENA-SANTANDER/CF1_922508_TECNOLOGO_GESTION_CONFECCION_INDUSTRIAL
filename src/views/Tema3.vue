<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 3
      h1 Indicadores de productividad
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.br-tl.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/1.png')})`}"
      )
      .bloque-texto-g__texto.bri-tl.p-4.pt-5.ps-5
        p.mb-0 La productividad relaciona los resultados obtenidos con los recursos empleados para generarlos. En una planta de confección, su análisis requiere definir qué se reconoce como resultado y cuál recurso sirve como base de comparación. Las unidades terminadas por hora, los minutos estándar producidos, el consumo de material por prenda y la proporción de productos conformes representan dimensiones diferentes del desempeño. En consecuencia, ninguna cifra puede interpretarse correctamente sin conocer su fórmula, alcance, unidad de medida, periodo y fuente de información.
          br
          br
          | Un incremento de la producción no implica necesariamente una mejora de la productividad. El volumen puede aumentar por la incorporación de más personas, la ampliación de la jornada, el procesamiento de una referencia con menor contenido de trabajo o la liberación de unidades que permanecían acumuladas. De manera similar, una eficiencia elevada pierde valor cuando coincide con aumentos en los reprocesos, el desperdicio o el producto en proceso.
      
    p.mb-4 La norma ISO 22400 establece un marco para definir y utilizar indicadores clave en la gestión de operaciones de manufactura. Su aplicación exige documentar las variables, la relación matemática, el contexto y el propósito de cada medición. El nombre del indicador no garantiza que dos áreas estén midiendo lo mismo; la comparabilidad depende de que compartan definiciones, unidades, periodos y reglas de registro (ISO, 2014a, 2014b).

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 20.
          span Diferencias entre conceptos utilizados para interpretar el desempeño productivo
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25 Concepto
                th Base de comparación
                th Lectura técnica
            tbody
              tr
                td Productividad
                td Salida obtenida frente al recurso utilizado.
                td Muestra cuánto resultado se genera por unidad de recurso consumido.
              tr
                td Eficiencia
                td Minutos estándar producidos frente a minutos reales contabilizados.
                td Indica el grado de aprovechamiento del tiempo respecto de un referente técnico.
              tr
                td Cumplimiento
                td Producción real frente a producción programada.
                td Establece en qué proporción se alcanzó la meta del periodo.
              tr
                td Capacidad
                td Volumen que puede obtenerse bajo condiciones definidas de tiempo, recursos y eficiencia.
                td Estima la cantidad procesable dentro de un horizonte determinado.
              tr
                td Utilización
                td Tiempo efectivo de uso frente al tiempo disponible.
                td Muestra qué proporción de la disponibilidad fue empleada.
              tr
                td Rendimiento de materiales
                td Producción útil frente al material consumido.
                td Relaciona la salida conforme con los insumos utilizados.
              tr
                td Calidad a la primera
                td Unidades conformes sin reproceso frente al total procesado.
                td Expresa la capacidad para cumplir los requisitos desde la primera ejecución.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/2.png', alt='')
    
    p.mb-5 Estas métricas se complementan, pero no son intercambiables. Una línea puede cumplir la cantidad programada mediante horas adicionales y presentar, al mismo tiempo, una eficiencia inferior a la prevista. También puede registrar una eficiencia favorable mientras acumula paquetes entre operaciones, puesto que los minutos estándar producidos no describen por sí solos la continuidad del flujo.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Criterio para definir un indicador
    
    p.mb-0 La definición debe incluir el propósito, las variables, la fórmula, la unidad, el periodo, el alcance, la fuente de los datos y las exclusiones. Cualquier modificación en estos elementos debe quedar documentada para conservar la trazabilidad de la serie histórica.


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Eficiencia individual y del módulo

    img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t3/3.png', alt='')

    p La eficiencia compara el contenido estándar del trabajo realizado con el tiempo contabilizado para ejecutarlo. Su resultado se expresa en porcentaje y muestra qué proporción del tiempo empleado se convirtió en minutos estándar producidos. El cálculo no puede basarse únicamente en el número de unidades, porque las referencias y las operaciones presentan contenidos de trabajo diferentes.
    p.mb-4 El minuto estándar permitido (SAM), representa el tiempo asignado para ejecutar una operación o fabricar una unidad bajo un método definido y con las tolerancias correspondientes. Una operación con SAM de 0,80 minutos genera menos contenido estándar por unidad que otra con SAM de 1,25 minutos, aunque ambas registren la misma cantidad terminada. El SAM proporciona una unidad común para relacionar producción, tiempo y eficiencia (Nchalala et al., 2023).

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-7")
      .row.justify-content-center(titulo="Minutos estándar producidos")
        .col-11.col-lg-6
          p Los minutos estándar producidos se obtienen al multiplicar la cantidad aceptada por el SAM aplicable.   
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/4.png', alt='')
      .row.justify-content-center(titulo="Fórmula básica")
        .col-11.col-lg-6
          p.mb-4 Minutos estándar producidos = unidades aceptadas x SAM. Cuando durante el mismo periodo se ejecutan varias operaciones o referencias, los resultados deben calcularse por separado y sumarse posteriormente:
          h4 Fórmula para varias referencias
          p Minutos estándar totales = (unidades de la referencia A x SAM de la referencia A) + (unidades de la referencia B x SAM de la referencia B) + los resultados de las demás referencias incluidas.
          p Esta conversión evita tratar como equivalentes productos con contenidos de trabajo distintos.
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/5.png', alt='')
      .row.justify-content-center(titulo="Eficiencia individual")
        .col-11.col-lg-6
          p La eficiencia individual relaciona los minutos estándar generados por una persona con los minutos reales contabilizados durante el periodo.
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/6.png', alt='')
      .row.justify-content-center(titulo="Fórmula de eficiencia individual")
        .col-11.col-lg-6
          p Eficiencia individual = minutos estándar producidos ÷ minutos reales contabilizados x 100.
          p Si una operación tiene un SAM de 0,75 minutos y durante 420 minutos se obtienen 500 unidades aceptadas, el cálculo se realiza en dos pasos:
          p #[b a) Minutos estándar producidos:] 500 unidades x 0,75 minutos = 375 minutos estándar.
          p #[b b) Eficiencia individual:]  375 minutos estándar ÷ 420 minutos reales x 100 = 89,29 %.
        .col-lg-5.mb-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/7.png', alt='')
        .col-11
          p El resultado indica que los minutos estándar generados equivalen al 89,29 % del tiempo contabilizado. El porcentaje restante no debe atribuirse automáticamente a inactividad. La diferencia puede estar relacionada con abastecimiento, ajustes, cambios de referencia, esperas, fallas del equipo, reprocesos o registros incompletos.
          p El denominador requiere una definición estable. Algunas organizaciones utilizan los minutos de presencia, mientras otras descuentan pausas programadas, reuniones o tiempos clasificados como no productivos. Como estas decisiones modifican el resultado, deben aplicarse con el mismo criterio en todos los periodos comparados.
      .row.justify-content-center(titulo="Eficiencia del módulo")
        .col-11.col-lg-6.mb-4.mb-md-0
          p.mb-4 Minutos estándar producidos = unidades aceptadas x SAM. Cuando durante el mismo periodo se ejecutan varias operaciones o referencias, los resultados deben calcularse por separado y sumarse posteriormente:  
          h4 Fórmula para varias referencias
          p Minutos estándar totales = (unidades de la referencia A x SAM de la referencia A) + (unidades de la referencia B x SAM de la referencia B) + los resultados de las demás referencias incluidas.
          p Esta conversión evita tratar como equivalentes productos con contenidos de trabajo distintos.
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/8.png', alt='')
      .row.justify-content-center(titulo="Fórmula de eficiencia del módulo")
        .col-11.col-lg-6
          p Eficiencia del módulo = minutos estándar producidos por el módulo ÷ minutos reales totales del módulo x 100.
          p.mb-4 Cuando todas las personas participan durante el mismo intervalo, los minutos reales totales se obtienen multiplicando el número de integrantes por el tiempo contabilizado para cada uno:            
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/9.png', alt='')
        .col-11
          h4 Minutos reales del módulo
          p Minutos reales totales = número de personas x minutos contabilizados por persona.
          p Si existen entradas, salidas, permisos o asignaciones parciales, debe sumarse el tiempo real de cada persona. Utilizar una duración uniforme en esas condiciones produciría una disponibilidad superior a la realmente aportada.
          p Cuando el módulo entrega prendas completas, puede aplicarse el SAM total de la referencia. Si solo ejecuta una parte de la secuencia, deben sumarse los SAM de las operaciones desarrolladas. Aplicar el SAM completo a un conjunto que realiza únicamente algunas operaciones sobrestima los minutos estándar y altera la eficiencia. 
    
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 21.
          span Datos requeridos para calcular la eficiencia individual y del módulo
        .tabla-a.color-primario
          table
            thead
              tr
                th Dato
                th Eficiencia individual
                th Eficiencia del módulo
            tbody
              tr
                td Alcance
                td Debe identificar la persona, la operación y el periodo evaluado.
                td Debe delimitar las personas, las operaciones y las referencias incluidas.
              tr
                td Producción aceptada
                td Debe registrar las unidades que cumplen el criterio definido.
                td Debe consolidar las unidades aceptadas dentro del límite del módulo.
              tr
                td SAM aplicable
                td Debe corresponder con la operación efectivamente ejecutada.
                td Debe representar el contenido estándar desarrollado por el conjunto.
              tr
                td Tiempo contabilizado
                td Debe registrar los minutos reales incluidos en el cálculo.
                td Debe sumar los minutos individuales de todas las personas consideradas.
              tr
                td Novedades
                td Debe relacionar interrupciones, cambios, faltantes y ajustes.
                td Debe registrar eventos comunes y variaciones de disponibilidad.
              tr
                td Fuente
                td Debe identificar el registro de producción y tiempo utilizado.
                td Debe conservar la trazabilidad entre los reportes y la consolidación.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/10.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Ejemplo con referencias diferentes

    p Un módulo procesa 180 unidades de la referencia A, cuyo SAM es de 14,50 minutos, y 120 unidades de la referencia B, con SAM de 18,20 minutos.
    p.mb-4 Los minutos estándar se calculan por referencia:

    .row.bgcompl-2.align-items-center.p-4.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .bg-color-10.tarjeta.p-4
            .row.justify-content-center.align-items-center
              .col-lg-5.text-white
                ul.lista-ul.text-white.fa-lista
                  li 
                    i.lista-ul__vineta
                    span.mb-0 Referencia A: 180 unidades x 14,50 minutos = 2.610 minutos estándar.
                  li 
                    i.lista-ul__vineta
                    span.mb-0 Referencia B: 120 unidades x 18,20 minutos = 2.184 minutos estándar.
                  li 
                    i.lista-ul__vineta
                    span.mb-0 Total producido: 2.610 + 2.184 = 4.794 minutos estándar.
                p Si el módulo está integrado por 12 personas y cada una aporta 450 minutos, el tiempo real total corresponde a:
                p 12 personas x 450 minutos = 5.400 minutos reales.
                p La eficiencia obtenida es:
                p 4.794 minutos estándar ÷ 5.400 minutos reales x 100 = 88,78 %.
                p Sumar únicamente las 300 unidades impediría reconocer que la referencia B incorpora mayor contenido de trabajo. La conversión a minutos estándar establece una base común para la comparación.
              .col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/11.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Condiciones para interpretar la eficiencia

    p La confiabilidad del resultado depende de la vigencia del estándar y de la calidad del registro. Un SAM desactualizado, calculado con otro método o asociado con una versión anterior del producto puede generar porcentajes que no representan el desempeño real. También se producen distorsiones cuando se incluyen unidades defectuosas como producción aceptada, se omiten tiempos utilizados o se asignan al periodo unidades terminadas en otro corte.
    p.mb-4 Una comparación válida requiere:

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-3.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4.h-100
          p.text-center.mb-0 Utilizar el mismo método de cálculo.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4.h-100
          p.text-center.mb-0 Mantener estable la definición del tiempo contabilizado.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4.h-100
          p.text-center.mb-0 Aplicar el SAM vigente para la referencia.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4.h-100
          p.text-center.mb-0 Separar productos con distinto contenido estándar.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4.h-100
          p.text-center.mb-0 Evitar duplicidades entre unidades procesadas, reprocesadas y aceptadas.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4.h-100
          p.text-center.mb-0 Registrar cambios de personal, maquinaria, material y método.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4.h-100
          p.text-center.mb-0 Comparar periodos y alcances equivalentes.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4.h-100
          p.text-center.mb-0 Confirmar que la producción corresponda al mismo intervalo del tiempo utilizado.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Lectura técnica de la eficiencia
    
    p.mb-0 El porcentaje muestra la relación entre el trabajo estándar generado y el tiempo contabilizado. No identifica por sí solo la causa de una variación. Su interpretación debe considerar la disponibilidad de recursos, el abastecimiento, la calidad, el producto en proceso y las novedades operativas.


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Capacidad por turno a partir del SAM
    
    p La capacidad por turno estima la cantidad de unidades que puede procesarse con los recursos disponibles durante un periodo definido. Los minutos laborables representan la oferta de tiempo, mientras que el SAM expresa la cantidad requerida para producir cada unidad.
    p El cálculo debe diferenciar la capacidad teórica de la capacidad planificada. La primera supone un aprovechamiento del 100 % de los minutos disponibles. La segunda incorpora una eficiencia prevista y ofrece una estimación más cercana a las condiciones definidas para la producción.

    .tarjeta.bg-fondo-1.p-4.mb-4(data-aos='fade')
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.col-11
            h4 Minutos disponibles
            p.mb-4 Cuando todas las personas trabajan durante el mismo intervalo, los minutos disponibles se calculan así:
            h5 Fórmula de minutos disponibles
            p.mb-0 Minutos disponibles = número de personas x minutos laborables por persona.
            p Si los tiempos individuales son diferentes, deben sumarse los minutos realmente aportados por cada persona.
            p El tiempo laborable debe establecerse antes del cálculo. Si el turno nominal tiene 480 minutos y se descuentan 40 minutos de pausas programadas, la base corresponde a 440 minutos por persona. Las deducciones deben mantenerse constantes para que la capacidad sea comparable. 
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/12.png', alt='')
        .row.justify-content-center
          .col-lg-5.col-11
            h4 Capacidad teórica
            p.mb-4 La capacidad teórica supone una eficiencia del 100%.
            h5 Fórmula de capacidad teórica
            p Capacidad teórica = minutos disponibles ÷ SAM de la prenda.
            p Para un módulo de 12 personas, con 440 minutos laborables por persona y un SAM de 18 minutos por prenda:
            p.mb-0 #[b a) Minutos disponibles:] 12 personas x 440 minutos = 5.280 minutos.
            p #[b b) Capacidad teórica:] 5.280 minutos ÷ 18 minutos por prenda = 293,33 prendas.
            p Como la producción terminada se expresa en unidades completas, se reportan 293 prendas. La fracción puede registrarse como producto en proceso si existe evidencia de su estado al cierre.
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/13.png', alt='')
        .row.justify-content-center
          .col-lg-3.col-11
            h3 Capacidad planificada
            p La capacidad planificada incorpora la eficiencia prevista, expresada en forma decimal.
            h4 Fórmula de capacidad planificada
            p Capacidad planificada = minutos disponibles x eficiencia prevista ÷ SAM de la prenda.
            p Si el módulo dispone de 5.280 minutos, trabaja con una eficiencia prevista del 82 % y procesa una referencia con SAM de 18 minutos:
            p 5.280 minutos x 0,82 ÷ 18 minutos por prenda = 240,53 prendas.
            p La capacidad planificada corresponde a 240 prendas completas.
          .col-lg-7.col-11
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 22.
              span Construcción de la capacidad planificada por turno
            .tabla-a.color-primario.t3
              table
                thead
                  tr
                    th.w-25 Variable
                    th.w-25 Valor utilizado
                    th Interpretación
                tbody
                  tr
                    td Personas asignadas
                    td 12
                    td Corresponde a la dotación prevista para el turno.
                  tr
                    td Duración nominal
                    td 480 minutos
                    td Representa el tiempo total programado por persona.
                  tr
                    td Pausas programadas
                    td 40 minutos
                    td Corresponde al tiempo excluido según el criterio definido.
                  tr
                    td Tiempo laborable
                    td 440 minutos por persona
                    td Resulta de restar las pausas a la duración nominal.
                  tr
                    td Minutos disponibles
                    td 5.280 minutos
                    td Se obtienen al multiplicar 12 personas por 440 minutos.
                  tr
                    td SAM
                    td 18 minutos por prenda
                    td Representa el contenido estándar de una unidad terminada.
                  tr
                    td Eficiencia prevista
                    td 82 %
                    td Expresa el nivel de aprovechamiento esperado.
                  tr
                    td Capacidad planificada
                    td 240 prendas completas
                    td Corresponde al volumen estimado para el turno.
        .row.justify-content-center
          .col-lg-5.col-11
            h4 Capacidad para varias referencias
            p.mb-4 Cuando se procesan referencias con SAM diferentes, cada cantidad debe convertirse en minutos estándar.
            h5 Fórmula para una mezcla de referencias
            p Minutos requeridos = (unidades A x SAM A) + (unidades B x SAM B) + los resultados de las demás referencias programadas.
            p La mezcla puede ejecutarse cuando los minutos requeridos no superan los minutos estándar disponibles.
            p Si un módulo dispone de 4.329,60 minutos estándar y se programan 120 unidades con SAM de 18 minutos y 100 unidades con SAM de 20 minutos, el requerimiento es:
            ul.lista-ul.fa-lista
              li.mb-1 
                i.lista-ul__vineta
                span.mb-0 #[b Primera referencia:] 120 x 18 = 2.160 minutos estándar.
              li.mb-1 
                i.lista-ul__vineta
                span.mb-0 #[b Segunda referencia:] 100 x 20 = 2.000 minutos estándar.
              li.mb-1 
                i.lista-ul__vineta
                span.mb-0 #[b Requerimiento total:] 2.160 + 2.000 = 4.160 minutos estándar.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Margen disponible:] 4.329,60 - 4.160 = 169,60 minutos estándar. 
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/14.png', alt='')
    
    p El margen solo representa capacidad para otra unidad cuando resulta suficiente frente al SAM de la referencia adicional y cuando la secuencia puede completarse antes del cierre.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 23.
          span Variables que modifican la capacidad estimada
        .tabla-a.color-primario
          table
            thead
              tr
                th Variable
                th Modificación observada
                th Efecto sobre la capacidad
            tbody
              tr
                td Dotación
                td Aumento o reducción de personas disponibles.
                td Modifica la cantidad total de minutos laborables.
              tr
                td Duración del turno
                td Cambio en los minutos programados o en las pausas.
                td Altera la base temporal del cálculo.
              tr
                td SAM
                td Cambio de referencia, construcción o método aprobado.
                td Modifica los minutos requeridos para obtener cada unidad.
              tr
                td Eficiencia prevista
                td Ajuste del nivel esperado según los registros disponibles.
                td Cambia la cantidad de minutos estándar que se espera generar.
              tr
                td Maquinaria
                td Falta, avería o restricción de equipos específicos.
                td Puede limitar operaciones necesarias, aunque existan minutos disponibles.
              tr
                td Mezcla de referencias
                td Incorporación de productos con contenidos estándar diferentes.
                td Cambia la distribución de los minutos entre las unidades programadas.
              tr
                td Calidad
                td Incremento de defectos, retenciones o reprocesos.
                td Reduce la cantidad de unidades conformes obtenidas.
              tr
                td Abastecimiento
                td Entrega incompleta o tardía de piezas e insumos.
                td Disminuye el tiempo que puede convertirse en producción.
        
    p.mb-5 La eficiencia prevista debe sustentarse en registros comparables, características de la referencia, estabilidad del método y disponibilidad de recursos. Utilizar un porcentaje sin respaldo produce una capacidad nominal que no representa las condiciones operativas.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Criterio de capacidad

    p.mb-0 El resultado solo es válido para la referencia, la dotación, el tiempo y la eficiencia declarados. Cualquier cambio en estas condiciones exige realizar nuevamente el cálculo.


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3  Indicadores de flujo, materiales y calidad
    
    p Los indicadores de flujo muestran cómo avanza el producto entre las operaciones. Los indicadores de materiales examinan el consumo, el aprovechamiento y las pérdidas. Las métricas de calidad establecen qué proporción cumple los requisitos y cuánto trabajo adicional se requiere para corregir desviaciones.
    p.mb-5 Antes de calcularlos debe definirse el punto de medición. El producto en proceso puede contarse al final del turno o en una hora de corte determinada. El material puede medirse por masa, longitud, área o unidades, siempre que el numerador y el denominador utilicen la misma magnitud. En calidad, el número de defectos debe diferenciarse del número de unidades defectuosas, puesto que una prenda puede contener varios hallazgos.

    .subt-2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t3/subt.svg', alt='')
      .text.mx-1
        h4.mb-0.ms-2.me-4 Indicadores de flujo
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 24.
          span Indicadores para observar el flujo productivo
        .tabla-a.color-primario
          table
            thead 
              tr
                th Indicador
                th Fórmula o criterio
                th Lectura técnica
            tbody
              tr
                td Cumplimiento de producción
                td Producción real ÷ producción programada x 100.
                td Muestra la proporción de la meta alcanzada durante el periodo.
              tr
                td Tasa de salida
                td Unidades conformes terminadas ÷ tiempo observado.
                td Expresa la velocidad con la que se liberan productos aceptados.
              tr
                td Producto en proceso
                td Conteo de unidades situadas entre el inicio y la terminación.
                td Cuantifica la acumulación existente en un momento definido.
              tr
                td Tiempo de flujo
                td Hora de terminación menos hora de ingreso al proceso.
                td Mide el tiempo transcurrido desde la liberación hasta la salida.
              tr
                td Tiempo de espera
                td Suma de los intervalos sin transformación.
                td Identifica permanencias que no agregan procesamiento al producto.
              tr
                td Tasa de transferencia
                td Unidades trasladadas ÷ intervalo observado.
                td Describe la frecuencia de los movimientos entre operaciones.
              tr
                td Entrega completa
                td Lotes con cantidad e identificación correctas ÷ lotes transferidos x 100.
                td Evalúa la integridad documental y cuantitativa de las transferencias.                     
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/15.png', alt='')
    
    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/16.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .d-flex.align-items-start.mb-3
          img.w-80x.d-none.d-lg-block.me-3(src='@/assets/curso/temas/t3/17.svg', alt='')
          p.mb-0 El reporte debe mantener continuidad entre turnos sin convertirse en una narración extensa. Los campos estructurados permiten comparar periodos; la sección de novedades aporta el contexto que las cifras no contienen. Cuando se presenta una diferencia, conviene separar el hecho observado, su duración, el efecto y la acción inmediata. La causa solo se registra como confirmada si existe evidencia; de lo contrario, se identifica como preliminar o pendiente de verificación.
        p.mb-0 La identificación de la orden y la referencia evita atribuir a toda la planta una condición localizada. También permite relacionar el reporte con materiales, estándares y especificaciones. Si durante el turno se procesaron varias referencias, los datos deben segmentarse o indicar con claridad el alcance de cada registro. Consolidar productos diferentes bajo un único resultado puede ocultar variaciones de SAM, construcción, complejidad o requerimientos de calidad.
    
    p.mb-5 El producto en proceso se registra en una hora de corte. Además de la cantidad, deben identificarse la ubicación y el estado: pendiente de procesamiento, en espera, retenido, devuelto o listo para transferir.

    .subt-2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t3/subt.svg', alt='')
      .text.mx-1
        h4.mb-0.ms-2.me-4 Indicadores de materiales
    
    p El consumo real debe compararse con una referencia técnica correspondiente a la misma cantidad de producto, unidad de medida y condición del material. El estándar puede proceder de una ficha, un trazo aprobado, una lista de materiales o un cálculo validado.

    .row.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/18.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 25.
          span Indicadores de consumo y aprovechamiento de materiales     
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25 Indicador
                th Fórmula
                th Lectura técnica
            tbody
              tr
                td Variación de consumo
                td Consumo real menos consumo estándar.
                td Expresa la cantidad utilizada por encima o por debajo del referente.
              tr
                td Índice de consumo
                td Consumo real ÷ consumo estándar x 100.
                td Relaciona el consumo observado con la cantidad prevista.
              tr
                td Desperdicio
                td Material descartado ÷ material entregado x 100.
                td Muestra la proporción que no se incorpora al producto ni puede aprovecharse.
              tr
                td Aprovechamiento
                td Material incorporado al producto ÷ material consumido x 100.
                td Establece qué proporción del material consumido permanece en el resultado aceptado.
              tr
                td Rendimiento por unidad
                td Unidades conformes ÷ cantidad de material consumido.
                td Relaciona la salida conforme con el material utilizado.
              tr
                td Devolución aprovechable
                td Material devuelto en buen estado ÷ material entregado x 100.
                td Identifica la proporción que puede reintegrarse al inventario.
              tr
                td Diferencia no identificada
                td Material entregado menos los materiales incorporados, desperdiciados, devueltos y aún en proceso.
                td Evidencia cantidades cuyo destino no puede determinarse con los registros disponibles.
    
    p.mb-5 Un índice de consumo del 103 % indica que se utilizó una cantidad equivalente al 103 % del estándar. No representa un aprovechamiento del 103 %. En el índice de consumo, un valor superior a 100 % señala sobreconsumo; en el aprovechamiento, el porcentaje expresa qué parte del material consumido quedó incorporada al producto.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Balance de materiales

    p Material entregado = material incorporado al producto + desperdicio + material devuelto + material que continúa en proceso + diferencia no identificada.
    p Cada término cumple una función específica:

    .row.justify-content-center.mb-4
      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/19.svg', alt='')
          .tarjeta.bg-color-11
            .p-4
              h4.text-center Material incorporado al producto
              p.mb-0.text-center Cantidad utilizada efectivamente en las unidades fabricadas.
      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/20.svg', alt='')
          .tarjeta.bg-color-11
            .p-4
              h4.text-center Desperdicio
              p.mb-0.text-center Material descartado que no puede reincorporarse al proceso.
      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/21.svg', alt='')
          .tarjeta.bg-color-11
            .p-4
              h4.text-center Material devuelto
              p.mb-0.text-center Sobrante identificado que conserva condiciones de uso.
      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/22.svg', alt='')
          .tarjeta.bg-color-11
            .p-4
              h4.text-center Material en proceso
              p.mb-0.text-center Cantidad entregada que todavía permanece asociada con una orden activa.
      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/23.svg', alt='')
          .tarjeta.bg-color-11
            .p-4
              h4.text-center Diferencia no identificada
              p.mb-0.text-center Cantidad que no puede relacionarse con los destinos anteriores y requiere conciliación.
    
    p.mb-5 Todas las magnitudes deben expresarse en unidades compatibles. No es válido restar metros de tejido, kilogramos de retal y unidades de accesorios dentro del mismo balance. Cada material requiere un cálculo independiente.

    .subt-2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t3/subt.svg', alt='')
      .text.mx-1
        h4.mb-0.ms-2.me-4 Indicadores de calidad

    p La medición debe diferenciar unidad inspeccionada, unidad defectuosa, defecto y reproceso. Una unidad defectuosa contiene uno o más incumplimientos; un defecto corresponde a cada hallazgo. Por esta razón, diez prendas defectuosas pueden reunir más de diez defectos.

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 26.
          span Indicadores básicos de calidad en la producción de prendas
        .tabla-a.color-primario
          table
            thead
              tr
                th Indicador
                th Fórmula
                th Lectura técnica
            tbody
              tr
                td Unidades defectuosas
                td Unidades con uno o más defectos ÷ unidades inspeccionadas x 100.
                td Muestra la proporción de productos afectados por al menos un incumplimiento.
              tr
                td Defectos por cien unidades
                td Número de defectos ÷ unidades inspeccionadas x 100.
                td Expresa la frecuencia de hallazgos y puede superar 100.
              tr
                td Rendimiento a la primera
                td Unidades conformes sin reproceso ÷ unidades procesadas x 100.
                td Indica qué proporción cumplió los requisitos desde la primera ejecución.
              tr
                td Reproceso
                td Unidades intervenidas nuevamente ÷ unidades procesadas x 100.
                td Muestra la proporción que necesitó trabajo adicional.
              tr
                td Rechazo
                td Unidades no recuperables ÷ unidades inspeccionadas x 100.
                td Cuantifica la proporción que no puede liberarse.
              tr
                td Liberación conforme
                td Unidades aceptadas ÷ unidades verificadas x 100.
                td Relaciona la salida aprobada con el total evaluado.
              tr
                td Recurrencia de defecto
                td Defectos de una misma categoría ÷ defectos totales x 100.
                td Identifica la concentración de hallazgos repetitivos.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/24.png', alt='')
    
    .row.justify-content-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/25.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .d-flex.align-items-start.mb-3
          img.w-80x.d-none.d-lg-block.me-3(src='@/assets/curso/temas/t3/26.svg', alt='')
          p.mb-0 Si se inspeccionaron 300 unidades de una producción de 500, el indicador debe calcularse sobre las 300 unidades efectivamente evaluadas, salvo que exista un procedimiento estadístico definido. Tampoco deben contarse varias veces las unidades revisadas después de un reproceso.
        p El rendimiento a la primera ofrece una lectura más exigente que la liberación final. Una prenda puede cumplir los requisitos después de una corrección y formar parte de la salida aceptada, pero no del resultado conforme desde la primera ejecución.
    
    .subt-2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t3/subt.svg', alt='')
      .text.mx-1
        h4.mb-0.ms-2.me-4 Interpretación conjunta

    p.mb-4 Una conclusión sustentada no procede de una cifra aislada. La eficiencia debe contrastarse con la calidad; el cumplimiento, con el tiempo utilizado; el consumo, con la mezcla de referencias; el producto en proceso, con la tasa de salida y la ubicación de las acumulaciones.

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 27.
          span Relaciones para interpretar conjuntamente los indicadores
        .tabla-a.color-primario
          table
            thead
              tr
                th Comportamiento observado
                th Interpretación inicial
                th Verificación requerida
            tbody
              tr
                td Eficiencia alta y rendimiento a la primera bajo
                td La producción estándar coincide con una proporción elevada de correcciones.
                td Revisar el criterio de conteo y las unidades reprocesadas.
              tr
                td Cumplimiento alto con horas adicionales
                td La meta se alcanzó mediante una disponibilidad superior a la programada.
                td Comparar el tiempo planificado con el tiempo real utilizado.
              tr
                td Producto en proceso alto y salida estable
                td Puede existir una liberación por lotes o una acumulación controlada.
                td Examinar el tiempo de permanencia y la frecuencia de transferencia.
              tr
                td Producto en proceso alto y salida decreciente
                td Puede presentarse una restricción o interrupción.
                td Identificar la operación donde se concentra el material.
              tr
                td Consumo superior al estándar y desperdicio alto
                td Existe sobreconsumo acompañado de material descartado.
                td Revisar el estándar, el corte, las reposiciones y la clasificación del desperdicio.
              tr
                td Eficiencia baja y calidad a la primera alta
                td Se conserva la conformidad, pero se generan menos minutos estándar de los previstos.
                td Revisar abastecimiento, tiempos improductivos, SAM y disponibilidad de equipos.
              tr
                td Defectos altos y unidades defectuosas moderadas
                td Los hallazgos pueden concentrarse en pocas unidades.
                td Determinar cuántos defectos contiene cada producto.
              tr
                td Reproceso alto y liberación conforme alta
                td La aceptación final se logra mediante intervenciones adicionales.
                td Separar la conformidad inicial de la conformidad posterior al reproceso.
    
    p.mb-5 La consistencia de la medición requiere documentar para cada indicador su nombre, propósito, alcance, fórmula, unidad, fuente, frecuencia, responsable, meta, exclusiones y regla de redondeo. Los cambios de método deben registrar la fecha de aplicación y la justificación correspondiente.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Principio de interpretación

    p Un indicador orienta la revisión de una condición, pero no confirma su causa. Las variaciones deben contrastarse con los registros del proceso, las novedades del turno, la referencia fabricada y los recursos disponibles. Esta lectura conjunta evita que una cifra parcial sea presentada como explicación definitiva.
  



    



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
