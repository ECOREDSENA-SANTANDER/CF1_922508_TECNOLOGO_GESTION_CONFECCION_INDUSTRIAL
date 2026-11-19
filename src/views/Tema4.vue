<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 4
      h1 Gestión visual y respuesta operativa
    
    .bloque-texto-g.bg-color-2.br-tr.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.bri.p-4
        p.mb-0 La gestión visual transforma datos operativos en representaciones que facilitan el seguimiento. Su efectividad depende de la calidad del dato, la claridad de la escala y la actualización oportuna. Una gráfica o un color no sustituyen el análisis; funcionan como una señal para dirigir la revisión hacia una condición definida.
          br
          br
          | La representación debe conservar el significado técnico del indicador. Una gráfica atractiva puede resultar engañosa si omite la unidad, modifica la escala entre periodos o combina series con alcances diferentes. El diseño visual se encuentra subordinado a la comparabilidad: título, periodo, fuente, meta, valor y novedad deben permitir comprender qué ocurrió sin depender de una explicación adicional. Cuando la información no cumple estas condiciones, el tablero comunica una impresión, pero no proporciona una base suficiente para decidir.
    
    p.mb-0 La respuesta operativa completa el ciclo de seguimiento. Detectar una desviación carece de utilidad si no existe un criterio para comunicarla, proteger el proceso, contener sus efectos y verificar la condición posterior. A la vez, actuar sin confirmar el alcance puede trasladar el problema a otra operación. La gestión visual y la respuesta se integran mediante reglas conocidas, responsabilidades definidas y registros que documenten tanto la señal inicial como la acción ejecutada.


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1  Gráficas, semáforos y tableros de control
    
    p.mb-4 Las gráficas permiten comparar la producción real con la meta, observar tendencias y reconocer variaciones. Los semáforos sintetizan el estado mediante rangos previamente establecidos. Los tableros integran indicadores, metas, responsables, periodos y novedades. La ISO 22400-2 señala que los indicadores deben describirse mediante fórmulas, unidades y comportamiento temporal, por lo cual la representación visual debe conservar esa información básica (ISO, 2014b).

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 28.
          span Recursos de gestión visual para el seguimiento operativo
        .tabla-a.color-primario
          table
            thead
              tr
                th Recurso
                th Uso principal
                th Condiciones de aplicación
            tbody
              tr
                td Gráfica de producción
                td Comparar resultados reales con metas por periodo.
                td Mantener escala, frecuencia y unidad consistentes.
              tr
                td Gráfica de tendencia
                td Observar la evolución del indicador en el tiempo.
                td Conservar series comparables y registrar cambios de método.
              tr
                td Semáforo
                td Comunicar el estado frente a rangos aprobados.
                td Definir umbrales, significado de colores y acción asociada.
              tr
                td Tablero manual
                td Consolidar información visible en el área de producción.
                td Actualizar con frecuencia y asegurar legibilidad.
              tr
                td Tablero digital
                td Integrar datos y visualizaciones provenientes de registros electrónicos.
                td Validar fuente, oportunidad y consistencia de los datos.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/2.png', alt='')
    
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-7.p-3.p-sm-4.p-md-5.br-tl.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/3.png')})`}"
      )
      .bloque-texto-g__texto.bri-tl.p-4
        p.mb-0 La elección de la gráfica depende de la pregunta. Una comparación entre resultado y meta puede expresarse mediante barras o una relación directa; la evolución en el tiempo requiere una serie ordenada; la composición de una pérdida demanda categorías consistentes. El recurso no debe seleccionarse por preferencia estética. Su pertinencia se determina por la relación que necesita observarse y por la capacidad de mantener unidades, escalas y periodos comprensibles.
          br
          br
          | Las metas y los rangos deben diferenciarse. La meta expresa un resultado esperado; el rango establece límites para interpretar una condición. Un semáforo puede utilizar ambos, pero necesita indicar qué significa cada color y qué acción corresponde. Si el verde representa cumplimiento, el amarillo advertencia y el rojo intervención, los umbrales deben proceder de estándares, tolerancias o decisiones aprobadas. Cambiar los límites sin registrar la modificación rompe la continuidad de la serie.

    p.mb-4 El uso del color requiere apoyo textual o simbólico. No todas las personas distinguen los tonos de la misma manera, y una impresión en escala de grises puede eliminar la diferencia. Por ello, el tablero debe combinar color con etiquetas, valores o símbolos que mantengan la interpretación. Esta práctica también mejora la lectura cuando se consulta el registro fuera del área productiva o se conserva como evidencia histórica.

    .row.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/4.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 29.
          span Elementos de calidad de una representación visual    
        .tabla-a.color-primario
          table
            thead
              tr
                th Elemento
                th Criterio técnico
                th Error que debe evitarse
            tbody
              tr
                td Título
                td Identificar indicador, área o proceso.
                td Usar denominaciones generales sin alcance.
              tr
                td Periodo
                td Mostrar inicio, cierre y frecuencia.
                td Comparar cortes temporales diferentes.
              tr
                td Unidad
                td Expresar porcentaje, minutos, unidades u otra magnitud.
                td Presentar cifras sin dimensión.
              tr
                td Escala
                td Mantener intervalos comprensibles y comparables.
                td Distorsionar variaciones mediante cambios no advertidos.
              tr
                td Referencia
                td Incluir meta, estándar o rango cuando corresponda.
                td Mostrar el resultado sin criterio de comparación.
              tr
                td Fuente
                td Identificar registro y fecha de actualización.
                td Utilizar datos sin trazabilidad.
              tr
                td Novedad
                td Señalar cambios que afectan la lectura.
                td Interpretar la variación como si el método o las condiciones no hubieran cambiado.
    
    .cajon.color-secundario.bg-color-3.p-4.mb-4(data-aos="fade")
      p.mb-0 #[b Criterio para los semáforos:] los umbrales no deben asignarse de manera arbitraria ni presentarse como universales. Cada planta debe aprobarlos según sus estándares, metas, tolerancias y condiciones de operación. El color comunica un estado, pero la acción se determina mediante el procedimiento establecido.
    
    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/5.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .d-flex.align-items-start.mb-3
          img.w-80x.d-none.d-lg-block.me-3(src='@/assets/curso/temas/t4/6.svg', alt='')
          p.mb-0 El tablero debe responder, como mínimo, qué se mide, cuál es la meta, cuál es el resultado, cuándo se actualizó, quién registró la información y qué novedad afecta la lectura. La ausencia de alguno de estos elementos puede producir interpretaciones contradictorias o decisiones basadas en datos descontextualizados.
        p.mb-0 La actualización forma parte del control. En un tablero manual debe definirse quién registra, con qué frecuencia y cómo se corrigen errores sin borrar la trazabilidad. En un tablero digital, la automatización no elimina la necesidad de validar la fuente, los cortes y las transformaciones aplicadas. Una cifra puede actualizarse en tiempo real y seguir siendo incorrecta si el dato de origen está incompleto o la fórmula no coincide con la definición aprobada.
    
    p La lectura del tablero debe conducir a una pregunta concreta. Una variación puede requerir confirmar el registro, revisar una novedad, comparar el flujo o activar una respuesta. Llenar la superficie con información secundaria reduce la visibilidad de las señales relevantes. En consecuencia, la selección de indicadores debe guardar correspondencia con el nivel de decisión y evitar duplicaciones que presenten el mismo comportamiento bajo nombres diferentes.


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2  Reportes de turno y registro de tiempos improductivos
    
    p.mb-4 El reporte de turno consolida la evidencia operativa del periodo. Su función es relacionar la orden, el producto, los recursos, la producción obtenida, los tiempos improductivos, las incidencias y las acciones ejecutadas. Debe permitir reconstruir lo ocurrido sin depender únicamente de explicaciones verbales.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 30.
          span Contenido mínimo de un reporte de turno
        .tabla-a.color-primario
          table
            thead
              tr
                th Campo
                th Contenido requerido
                th Finalidad
            tbody
              tr
                td Identificación
                td Fecha, turno, área, módulo, orden y referencia.
                td Delimitar el alcance del registro.
              tr
                td Recursos
                td Personal disponible, máquinas activas y novedades.
                td Relacionar la producción con la capacidad disponible.
              tr
                td Producción
                td Meta, unidades reales, unidades conformes y pendientes.
                td Determinar cumplimiento y continuidad.
              tr
                td Tiempos
                td Tiempo programado, trabajado e improductivo.
                td Sustentar capacidad y eficiencia.
              tr
                td Materiales
                td Consumo, faltantes, devoluciones y desperdicio.
                td Controlar disponibilidad y rendimiento.
              tr
                td Calidad
                td Defectos, unidades afectadas y reprocesos.
                td Registrar desviaciones observadas.
              tr
                td Novedades
                td Descripción, hora, duración, causa preliminar y evidencia.
                td Facilitar el análisis posterior.
              tr
                td Respuesta
                td Acción ejecutada, responsable, estado y seguimiento.
                td Documentar la atención de la novedad.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/7.png', alt='')
    
    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/8.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .d-flex.align-items-start.mb-3
          img.w-80x.d-none.d-lg-block.me-3(src='@/assets/curso/temas/t4/9.svg', alt='')
          p.mb-0 El reporte debe mantener continuidad entre turnos sin convertirse en una narración extensa. Los campos estructurados permiten comparar periodos; la sección de novedades aporta el contexto que las cifras no contienen. Cuando se presenta una diferencia, conviene separar el hecho observado, su duración, el efecto y la acción inmediata. La causa solo se registra como confirmada si existe evidencia; de lo contrario, se identifica como preliminar o pendiente de verificación.
        p.mb-0 La identificación de la orden y la referencia evita atribuir a toda la planta una condición localizada. También permite relacionar el reporte con materiales, estándares y especificaciones. Si durante el turno se procesaron varias referencias, los datos deben segmentarse o indicar con claridad el alcance de cada registro. Consolidar productos diferentes bajo un único resultado puede ocultar variaciones de SAM, construcción, complejidad o requerimientos de calidad.
    
    p.mb-4 Los tiempos improductivos requieren un inicio y un final verificables. Expresiones como demora prolongada o parada corta no permiten calcular duración ni comparar eventos. La categoría de causa debe proceder de un listado controlado, acompañado de una descripción que conserve el detalle. Una clasificación demasiado amplia agrupa condiciones distintas; una lista excesivamente específica dificulta la consistencia entre quienes registran.

    .row.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/10.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 31.
          span Categorías iniciales para registrar tiempos improductivos   
        .tabla-a.color-primario
          table
            thead
              tr
                th Categoría
                th Condición comprendida
                th Dato complementario
            tbody
              tr
                td Material
                td Faltante, entrega incompleta o material no disponible.
                td Referencia, cantidad y punto de abastecimiento.
              tr
                td Equipo
                td Falla, ajuste, cambio de componente o indisponibilidad.
                td Máquina, hora, intervención y estado.
              tr
                td Información
                td Ausencia, contradicción o cambio no comunicado.
                td Documento, versión y consulta realizada.
              tr
                td Cambio de referencia
                td Preparación y ajustes entre productos.
                td Referencia anterior, nueva referencia y duración.
              tr
                td Calidad
                td Retención, verificación o reproceso que interrumpe el flujo.
                td Hallazgo, cantidad afectada y decisión.
              tr
                td Servicios o infraestructura
                td Interrupción de energía, aire, red u otra condición de soporte.
                td Área afectada, duración y restablecimiento.
    
    p El tiempo improductivo corresponde al intervalo programado en el que no se genera el resultado previsto. Para analizarlo debe registrarse la duración y clasificarse según una causa definida, como espera de material, falla de equipo, ausencia de información, cambio de referencia, ajuste técnico o interrupción de servicios. La categoría no debe utilizarse para asignar culpabilidad, sino para reconocer patrones y establecer el punto de intervención.
    p.mb-4 Pasos para el registro:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-4.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4
          p.text-center.mb-0 Registrar la hora de inicio y finalización de la interrupción.
      .col-lg-4.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4
          p.text-center.mb-0 Indicar el recurso, la operación y la orden afectada.
      .col-lg-4.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4
          p.text-center.mb-0 Utilizar una categoría de causa previamente definida.
      .col-lg-4.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4
          p.text-center.mb-0 Describir la evidencia disponible sin sustituirla por suposiciones.
      .col-lg-4.col-md-6.mb-3
        .tarjeta.bg-color-9.p-4
          p.text-center.mb-0 Relacionar la acción inmediata y el estado al cierre del turno.
    
    p Al cierre del turno, el reporte debe distinguir lo resuelto de lo pendiente. Una acción inmediata puede contener el efecto sin eliminar la causa; por ejemplo, trasladar temporalmente una operación mantiene el flujo, pero no corrige la indisponibilidad del recurso original. Esta distinción evita cerrar eventos solo porque la producción se reanudó y facilita que el seguimiento continúe con la responsabilidad y el plazo correspondientes.


    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3  Contingencias y acciones correctivas
    
    p.mb-4 La respuesta operativa debe diferenciar una contingencia de producción de una emergencia de seguridad. La contingencia afecta la continuidad o el cumplimiento y requiere activar alternativas previstas. La emergencia implica una condición de riesgo que exige detener o controlar la situación conforme a los dispositivos y procedimientos de seguridad. La ISO 13850 establece requisitos funcionales y principios de diseño para la parada de emergencia de maquinaria; esta función se orienta a reducir el riesgo y no debe confundirse con una parada ordinaria del proceso (ISO, 2015).

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 32.
          span Secuencia de respuesta ante desviaciones operativas
        .tabla-a.color-primario
          table
            thead
              tr
                th Etapa
                th Acción requerida
                th Registro mínimo
            tbody
              tr
                td Detectar
                td Identificar la señal, desviación o condición insegura.
                td Hora, lugar, equipo, orden y evidencia.
              tr
                td Proteger
                td Aplicar la parada o el control definido cuando exista riesgo.
                td Dispositivo utilizado y condición observada.
              tr
                td Contener
                td Evitar que la desviación se extienda a otras unidades o procesos.
                td Material segregado, recurso aislado o flujo suspendido.
              tr
                td Comunicar
                td Informar mediante el canal y el nivel de escalamiento establecidos.
                td Responsable notificado y hora de comunicación.
              tr
                td Restablecer
                td Reanudar únicamente cuando se cumplan las condiciones autorizadas.
                td Verificación técnica y autorización correspondiente.
              tr
                td Corregir
                td Eliminar o controlar la causa confirmada según el procedimiento.
                td Acción, responsable, fecha y evidencia de ejecución.
              tr
                td Verificar
                td Comprobar el resultado y actualizar el estado.
                td Resultado posterior, pendiente y cierre.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/11.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/12.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-lg-5.pe-lg-0.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/13.svg', alt='')
          .col-lg-7.ps-lg-0
            .bg-color-5.h-100.p-4.px-lg-5
              p.mb-0 La prioridad de la respuesta depende del riesgo. Cuando existe una condición que puede afectar la seguridad, se aplican los procedimientos de protección y parada definidos antes de considerar el cumplimiento productivo. La función de parada de emergencia se diseña para reducir un riesgo y no para sustituir controles de operación, mantenimiento o planeación. Su utilización, restablecimiento y verificación deben corresponder con el procedimiento autorizado y con la condición real de la maquinaria (ISO, 2015).
        p.mb-0 En una contingencia productiva sin riesgo de seguridad, la contención busca evitar que la desviación se extienda. Puede incluir segregación de material, suspensión de una transferencia, identificación de unidades o activación de una alternativa prevista. La medida debe ser proporcional al alcance y mantener la trazabilidad. Desplazar producto hacia otra operación sin confirmar recursos, método e identificación puede convertir una respuesta local en una nueva fuente de variación.

    p  La comunicación necesita un canal y un nivel de escalamiento. No todas las novedades requieren la misma autoridad, pero todas deben llegar al rol capaz de decidir dentro del procedimiento. El mensaje técnico incluye qué ocurrió, dónde, desde cuándo, qué orden está afectada, cuál es el estado y qué acción se ejecutó. Omitir alguno de estos elementos obliga a reconstruir la situación y retrasa la respuesta.
    p.mb-4 Restablecer no significa únicamente volver a encender un equipo o liberar el material. La condición que motivó la interrupción debe haber sido controlada, y la autorización correspondiente debe quedar registrada cuando el procedimiento lo exija. Después de la reanudación, se verifica el resultado inicial para confirmar que el proceso funciona dentro de los parámetros definidos. Esta comprobación diferencia el restablecimiento técnico de una simple continuidad aparente.

    .row.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/14.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 33.
          span Diferencias entre corrección, contención y acción correctiva   
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25 Respuesta
                th Propósito
                th Evidencia de cierre
            tbody
              tr
                td Corrección inmediata
                td Atender el efecto observable y recuperar una condición aceptable.
                td Producto o proceso ajustado y resultado verificado.
              tr
                td Contención
                td Impedir que la desviación se extienda mientras se determina la causa.
                td Alcance controlado, material identificado y estado comunicado.
              tr
                td Acción correctiva
                td Eliminar o controlar la causa confirmada para prevenir recurrencia.
                td Causa sustentada, acción implementada y eficacia revisada.

    .cajon.color-acento-contenido.bg-color-8.p-4.mb-4(data-aos="fade")
      p.mb-0 #[b Principio de seguridad:] la parada de emergencia se utiliza para reducir un riesgo y no para compensar fallas de planeación, detener la producción de manera rutinaria o sustituir los controles técnicos de la maquinaria.
    
    .row.justify-content-center.align-items-center
      .col-lg-7
        p Una acción correctiva exige confirmar la causa antes de intervenir, la descripción del hallazgo debe separar el hecho observado, su efecto y la causa determinada. Cuando la información disponible solo permite una hipótesis, esta debe registrarse como pendiente de verificación. El cierre requiere evidencia de la acción ejecutada y de la condición posterior.
        p La eficacia se comprueba después de implementar la acción, el cierre no depende solamente de completar una actividad, sino de verificar que la condición prevista se mantiene durante un periodo coherente con la desviación. Si el problema reaparece, la acción puede haber atendido el efecto sin controlar la causa. El registro debe conservar el resultado posterior y las condiciones de la verificación, incluso cuando se determine que se requiere una intervención adicional.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/15.png', alt='')






</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
