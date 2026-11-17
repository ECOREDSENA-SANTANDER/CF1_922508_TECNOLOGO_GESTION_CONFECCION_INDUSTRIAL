<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 2
      h1 Análisis del desempeño del proceso
    
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/1.png', alt='')
      .col-lg-7.ps-lg-0
        .bg-color-4.br-tr.p-4.pt-5.h-100
          img.w-80x.d-none.d-lg-block.me-3.mb-3(src='@/assets/curso/temas/t2/2.svg', alt='')
          p El análisis del desempeño relaciona la capacidad disponible, el comportamiento de las operaciones y los estándares definidos para la planta. Su propósito es establecer una línea de referencia que permita interpretar resultados sin confundir el potencial técnico con la producción realmente alcanzada. La medición debe utilizar datos comparables, periodos claramente definidos y unidades consistentes (International Organization for Standardization [ISO], 2014a, 2014b).
          p.mb-0 La lectura comienza con la distinción entre condición prevista y resultado observado. La primera se deriva de estándares, tiempos disponibles, recursos habilitados y requisitos del producto; la segunda procede de registros generados durante la ejecución. La diferencia entre ambas no explica por sí misma una causa. Funciona como una señal que orienta la revisión hacia el abastecimiento, la disponibilidad, la secuencia, el método, la calidad del dato o cualquier novedad documentada en el periodo.
    
    p Para que la comparación sea válida deben mantenerse constantes las unidades y el alcance. No resulta técnicamente adecuado confrontar minutos de una operación con unidades de una prenda completa, ni combinar resultados de referencias con estándares diferentes. La norma ISO 22400-2 subraya la necesidad de definir elementos, fórmulas, unidades y comportamiento temporal para los indicadores de manufactura; esta misma disciplina es aplicable a la construcción de una base de desempeño (ISO, 2014b).

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Capacidad teórica y puntos críticos
    
    p La capacidad teórica expresa el máximo calculado bajo condiciones ideales, sin considerar pérdidas por interrupciones, ausencias, cambios, fallas o variaciones del proceso. En confección, puede estimarse a partir de los minutos disponibles y del tiempo estándar asignado a la confección del producto u operación (Standard Allowed Minutes, SAM). La capacidad operativa representa un nivel más cercano a las condiciones reales porque incorpora disponibilidad efectiva, eficiencia esperada y restricciones identificadas.

    .cajon.color-acento-contenido.bg-color-8.p-4.mb-4(data-aos="fade")
      p.mb-0.text-center #[b Capacidad teórica en unidades = minutos totales disponibles ÷ SAM del producto]
    
    p Los minutos totales disponibles corresponden a la suma del tiempo asignado a los recursos considerados. El SAM debe pertenecer al mismo producto, versión del método y alcance del cálculo. Si se mezclan referencias, periodos o estándares diferentes, el resultado pierde comparabilidad.

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 14.
          span Variables para interpretar la capacidad del proceso
        .tabla-a.color-primario
          table
            thead
              tr
                th Variable
                th Definición operativa
                th Verificación requerida
            tbody
              tr
                td Tiempo disponible
                td Minutos programados para ejecutar las operaciones dentro del periodo analizado.
                td Excluir tiempos no asignados y declarar el periodo de cálculo.
              tr
                td SAM
                td Minutos estándar permitidos para fabricar una unidad o completar una operación.
                td Usar el estándar vigente para la referencia y el método.
              tr
                td Número de recursos
                td Cantidad de puestos o personas incluidos en el cálculo.
                td Confirmar disponibilidad y correspondencia con el proceso.
              tr
                td Eficiencia prevista
                td Proporción del tiempo disponible que se espera convertir en minutos estándar producidos.
                td Sustentarla en datos históricos o parámetros aprobados.
              tr
                td Restricciones
                td Condiciones que limitan el volumen alcanzable.
                td Registrar fallas, esperas, abastecimiento y variaciones del flujo.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/3.png', alt='')
    
    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .d-flex.align-items-start.mb-3
          img.w-80x.d-none.d-lg-block.me-3(src='@/assets/curso/temas/t2/5.svg', alt='')
          p.mb-0 La capacidad teórica cumple una función de referencia: muestra cuánto podría producirse si todos los minutos incluidos se convirtieran en trabajo estándar bajo las condiciones declaradas. No representa una promesa de salida, porque omite pérdidas, variaciones y restricciones. Su valor depende de la precisión del tiempo disponible y del estándar utilizado. Si el turno incluye pausas no productivas o el SAM pertenece a otra versión del producto, el resultado puede parecer exacto, aunque parta de datos incompatibles.
        p La capacidad operativa introduce condiciones más próximas a la ejecución. Puede considerar eficiencia prevista, disponibilidad real, mezcla de referencias o limitaciones conocidas, siempre que el procedimiento declare cómo se incorpora cada factor. No existe una única cifra válida para todos los propósitos. La capacidad utilizada para caracterizar una planta puede diferir de la empleada en programación, debido a que esta última integra compromisos, secuencias y restricciones que se desarrollan en otros componentes.

    .cajon.color-acento-contenido.bg-color-8.p-4.mb-4(data-aos="fade")
      p.mb-0 #[b Lectura de la capacidad:] la capacidad teórica indica un potencial calculado; la capacidad operativa aproxima una condición realizable. Ambas deben presentar alcance, periodo, recursos, estándar y supuestos para evitar que se interpreten como resultados equivalentes. 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-lg-5.pe-lg-0.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/6.svg', alt='')
          .col-lg-7.ps-lg-0
            .bg-color-5.h-100.p-4
              p.mb-0 Un punto crítico es una condición cuya variación puede comprometer el flujo, la calidad, la seguridad o el cumplimiento. No todos los puntos críticos son cuellos de botella. Algunos corresponden a controles indispensables, como la verificación de materiales, la disponibilidad de equipos especializados o la liberación de información técnica. Su reconocimiento exige observar la secuencia y registrar evidencias, no asumir causas a partir de una sola medición.
        p.mb-0 El carácter crítico depende de la consecuencia asociada. La ausencia de una etiqueta puede interrumpir el empaque; una especificación no liberada puede detener varias operaciones; una máquina especializada sin alternativa puede limitar una familia completa de productos. En cambio, un recurso con alta ocupación no siempre constituye un punto crítico si dispone de capacidad suficiente y no afecta el ritmo global. La revisión debe relacionar la condición observada con su efecto verificable sobre el producto o el proceso.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/7.png', alt='')
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6
        .bg-color-9
          p.fw-bold.mb-0 Identificar operaciones con acumulación persistente de trabajo.
      .col-lg-4.col-md-6
        .bg-color-9
          p.fw-bold.mb-0 Comparar el ritmo de entrada y salida de cada etapa.
      .col-lg-4.col-md-6
        .bg-color-9
          p.fw-bold.mb-0 Verificar paradas, esperas, abastecimiento y cambios de referencia.
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6
        .bg-color-9
          p.fw-bold.mb-0 Relacionar la restricción observada con el periodo y la orden analizada.
      .col-lg-4.col-md-6
        .bg-color-9
          p.fw-bold.mb-0 Registrar la fuente del dato y la condición en la que fue obtenido.
        
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 15.
          span Diferencias entre capacidad, punto crítico y restricción
        .tabla-a.color-primario
          table
            thead
              tr
                th Concepto
                th Pregunta de análisis
                th Evidencia principal
            tbody
              tr
                td Capacidad
                td ¿Qué volumen puede obtenerse con los recursos y el tiempo definidos?
                td Minutos disponibles, SAM, recursos y condiciones de cálculo.
              tr
                td Punto crítico
                td ¿Qué condición puede comprometer continuidad, calidad, seguridad o cumplimiento?
                td Control requerido, consecuencia y relación con la secuencia.
              tr
                td Restricción
                td ¿Qué recurso o condición limita el ritmo del sistema durante el periodo?
                td Acumulación, esperas, utilización, salida y persistencia.      
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/8.png', alt='')
  
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Cuellos de botella y curvas de experiencia
    
    p Un cuello de botella es el recurso, operación o condición que limita el ritmo del sistema, se manifiesta cuando la demanda sobre una etapa supera su capacidad efectiva durante un periodo suficiente para generar acumulación, esperas o incumplimiento. La identificación debe realizarse con datos del flujo, pues una acumulación ocasional puede obedecer a liberaciones por lotes, cambios de referencia o interrupciones temporales.

    .row.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/9.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 16.
          span Señales para reconocer una restricción del flujo     
        .tabla-a.color-primario
          table
            thead
              tr
                th Señal
                th Interpretación técnica
                th Evidencia por revisar
            tbody
              tr
                td Acumulación recurrente
                td El material llega con mayor rapidez de la que puede procesarse.
                td Cantidad de producto en proceso y tiempo de permanencia.
              tr
                td Espera aguas abajo
                td Las operaciones siguientes carecen de piezas para continuar.
                td Frecuencia y duración de las esperas.
              tr
                td Utilización elevada
                td El recurso permanece ocupado y dispone de poca holgura.
                td Tiempo activo, paradas y volumen procesado.
              tr
                td Incumplimiento de salida
                td El flujo final no alcanza la meta del periodo.
                td Producción real frente a meta y estándar.
              tr
                td Desviación persistente
                td La diferencia se repite en varios periodos comparables.
                td Registros de turno y condiciones de operación.
    
    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/10.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .d-flex.align-items-start.mb-3
          img.w-80x.d-none.d-lg-block.me-3(src='@/assets/curso/temas/t2/11.svg', alt='')
          p.mb-0 La observación debe abarcar más de un punto del proceso. Cuando una operación limita el ritmo, suele presentarse una combinación de señales: acumulación antes del recurso, escasez de trabajo después de él, utilización sostenida y efecto sobre la salida. Una sola evidencia puede ser ambigua. Por ejemplo, la acumulación previa también aparece cuando se libera un lote completo o cuando la operación siguiente se detiene por una causa ajena al recurso examinado.
        p La persistencia diferencia una restricción estructural de una alteración temporal. Si la condición desaparece al restablecer el abastecimiento o completar un ajuste, el evento debe registrarse como novedad del periodo. Si se reproduce en condiciones comparables y mantiene su influencia sobre la salida, existe una base más sólida para considerarla una limitación del sistema. Aun así, la conclusión debe conservar el alcance observado y evitar generalizaciones hacia productos o turnos que no fueron analizados.
    
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 17.
          span Secuencia básica para verificar una posible restricción.
        .tabla-a.color-primario
          table
            thead
              tr
                th Paso
                th Acción de verificación
                th Criterio de decisión
            tbody
              tr
                td Localizar
                td Identificar dónde se acumula o se interrumpe el flujo.
                td La señal corresponde con una operación o condición delimitada.
              tr
                td Comparar
                td Revisar entradas, salidas y tiempos en periodos equivalentes.
                td La diferencia se mantiene con unidades comparables.
              tr
                td Contextualizar
                td Examinar cambios, fallas, abastecimiento y liberación por lotes.
                td Se descartan explicaciones temporales documentadas.
              tr
                td Confirmar
                td Relacionar la condición con la salida del sistema.
                td Existe efecto verificable sobre continuidad o cumplimiento.
              tr
                td Registrar
                td Conservar datos, periodo, referencia y evidencia.
                td La conclusión puede reproducirse y revisarse.      
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/12.png', alt='')
    
    .cajon.color-acento-contenido.bg-color-8.p-4.mb-4(data-aos="fade")
      p.mb-0 #[b Precaución metodológica:] la reducción del tiempo no debe atribuirse automáticamente a la experiencia. La comparación exige conservar el mismo método, producto, estándar, condiciones técnicas y unidad de medida. Si alguno de estos elementos cambia, la serie debe segmentarse.
    
    p El análisis preliminar del efecto de experiencia puede estructurarse mediante una serie cronológica que relacione la producción acumulada con el tiempo promedio empleado por unidad. Para que la comparación sea técnicamente válida, los registros deben corresponder a periodos homogéneos y conservar la misma unidad de medida, referencia productiva y criterio de cálculo. La tendencia resultante se interpreta junto con las novedades documentadas durante la operación. Su lectura permite reconocer cambios asociados con la repetición, pero no sustituye la determinación del tiempo estándar ni el estudio detallado de los movimientos que integran el método de trabajo.

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/13.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .d-flex.align-items-start.mb-3
          img.w-80x.d-none.d-lg-block.me-3(src='@/assets/curso/temas/t2/14.svg', alt='')
          p.mb-0 Atribuir una reducción del tiempo exclusivamente a la experiencia exige descartar modificaciones simultáneas en las condiciones de producción. La incorporación de una guía, el cambio de maquinaria, el ajuste de la secuencia, la sustitución del material o la variación del tamaño del lote pueden modificar el desempeño observado. En sentido contrario, un incremento transitorio puede estar relacionado con una referencia de mayor complejidad, una combinación distinta de tallas, una interrupción técnica o una disponibilidad irregular de insumos. Cuando estas circunstancias se registran junto con los datos de producción, resulta posible diferenciar la tendencia histórica de los factores que alteran temporalmente el proceso y evitar que una relación estadística sea presentada como causalidad confirmada.

    p La disminución asociada con la experiencia no mantiene un comportamiento indefinido ni necesariamente lineal. Durante las primeras repeticiones suelen producirse ajustes en la coordinación, la manipulación de materiales y la secuencia de ejecución; posteriormente, la magnitud de esas mejoras tiende a reducirse a medida que el método adquiere estabilidad. Al aproximarse a una condición relativamente constante, las variaciones del tiempo pueden relacionarse con cambios técnicos, disponibilidad de recursos, condiciones del material o confiabilidad del registro. Por consiguiente, la interpretación debe considerar la trayectoria de los datos, las condiciones bajo las cuales fueron obtenidos y los límites del efecto observado, sin reemplazar el estándar técnico vigente por el comportamiento histórico de la serie (Wright, 1936; Taifa et al., 2022).

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Estándares técnicos de la planta

    p Los estándares técnicos son referencias documentadas utilizadas para comparar la ejecución real con una condición definida. Pueden establecer requisitos del producto, parámetros de operación, tiempos, capacidades, métodos de registro y criterios de aceptación. Su función consiste en proporcionar una base común para la medición y evitar que cada área interprete de manera distinta la misma orden.

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 18.
          span Estándares técnicos considerados en la caracterización.
        .tabla-a.color-primario
          table
            thead
              tr
                th Tipo de estándar
                th Contenido principal
                th Aplicación inicial
            tbody
              tr
                td Producto
                td Materiales, medidas, construcción, costuras, puntadas, presentación y empaque.
                td Verificar correspondencia con la ficha y la orden.
              tr
                td Proceso
                td Secuencia, método, recursos y condiciones de ejecución.
                td Comparar la operación observada con el método definido.
              tr
                td Tiempo
                td SAM, tiempo de ciclo, tiempo disponible y periodo de medición.
                td Calcular capacidad y eficiencia con unidades consistentes.
              tr
                td Maquinaria
                td Capacidad, configuración, aditamentos y parámetros de funcionamiento.
                td Confirmar compatibilidad con la operación y el material.
              tr
                td Registro
                td Campos, responsables, frecuencia, fuente y trazabilidad del dato.
                td Asegurar información comparable y verificable.          
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/15.png', alt='')
    
    .bloque-texto-g.bg-color-2.br-tr.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/16.png')})`}"
      )
      .bloque-texto-g__texto.bri.p-4
        p.mb-0 Un estándar adquiere valor cuando puede aplicarse de la misma manera por quienes intervienen en el proceso. Para ello debe indicar el objeto al que se refiere, la unidad, el método de verificación, la versión y la fecha de vigencia. Una cifra sin definición operativa no funciona como estándar, aunque aparezca en un formato institucional. La persona que consulta el documento debe poder reconocer que mide, cómo se obtuvo y bajo qué condiciones corresponde utilizarlo.
          br
          br
          | La gestión del cambio evita comparar la ejecución con referencias obsoletas, cuando se modifica una construcción, un método o un parámetro, el estándar anterior no debe desaparecer sin trazabilidad: se conserva como antecedente, se identifica la nueva vigencia y se comunica a los puntos afectados. Este control permite explicar por qué dos periodos podrían no ser comparables y previene que los registros se interpreten como si hubieran sido generados bajo una misma condición.
    
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 19.
          span Criterios de validez de un estándar técnico
        .tabla-a.color-primario
          table
            thead
              tr
                th Criterio
                th Pregunta de control
                th Condición esperada
            tbody
              tr
                td Identificación
                td ¿El estándar señala producto, operación o proceso?
                td El objeto de aplicación está delimitado.
              tr
                td Método
                td ¿Se conoce cómo fue establecido y cómo debe aplicarse?
                td La utilización puede reproducirse.
              tr
                td Unidad
                td ¿La magnitud está expresada con una unidad definida?
                td El dato admite comparación consistente.
              tr
                td Vigencia
                td ¿La versión y la fecha corresponden a la orden?
                td No se aplican referencias reemplazadas.
              tr
                td Comunicación
                td ¿Los puntos de uso disponen de la información aprobada?
                td La ejecución comparte un mismo referente.
              tr
                td Verificación
                td ¿Existe evidencia para revisar su cumplimiento?
                td El resultado puede contrastarse con registros.            
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/17.png', alt='')

    p Un estándar es válido cuando corresponde al producto y al método vigentes, ha sido comunicado, puede verificarse y mantiene una fuente identificable. La comparación debe realizarse con información del mismo periodo y alcance. Si el estándar fue modificado, el registro debe conservar la fecha de vigencia para evitar interpretaciones erróneas.
    p Al concluir el análisis del desempeño, la planta debe contar con una base que diferencie potencial, resultado y referencia. La capacidad describe un volumen posible bajo condiciones declaradas; los registros muestran lo ocurrido; los estándares proporcionan el criterio de comparación. Los puntos críticos y las restricciones orientan la revisión hacia las condiciones que alteran la continuidad. Esta separación prepara la construcción de indicadores y evita que una sola cifra asuma funciones que corresponden a conceptos distintos.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
