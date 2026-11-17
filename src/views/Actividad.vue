<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad
      <ActividadController :cuestionario="cuestionario"/>

  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Caracterización y medición del proceso productivo',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de conceptos técnicos sobre sistema productivo, recursos, flujo, capacidad, indicadores y gestión visual en confección industrial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué permite reconocer la caracterización del proceso productivo en una planta de confección?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La selección comercial de colores sin revisar operaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La articulación de recursos, materiales, equipos e información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La sustitución de registros técnicos por observación general.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La eliminación de controles durante la transformación productiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de la caracterización como análisis de la relación entre recursos, materiales, equipos, métodos e información técnica del proceso.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento debe declararse para evitar interpretaciones imprecisas en la caracterización?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El alcance de planta, área, línea, módulo u orden.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El gusto comercial del cliente frente al producto final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La preferencia estética del tablero de control visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El nombre informal asignado por cada grupo operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se reconoce que el alcance define la validez del análisis y evita mezclar datos de planta, área, línea, módulo o referencia.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 3,
          texto:
            '¿Qué caracteriza a una planta integrada dentro del sistema de confección industrial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecuta solamente una operación externa de acabado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recibe piezas sin conservar la trazabilidad documental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Trabaja sin coordinación entre áreas productivas internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reúne varias etapas del proceso en una organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se demuestra dominio al identificar la planta integrada como aquella que articula varias etapas productivas dentro de una misma organización.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 4,
          texto:
            '¿Qué diferencia principal existe entre tipo de planta y sistema de producción?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tipo define colores y el sistema define etiquetas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tipo mide ventas y el sistema mide exhibiciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tipo describe alcance y el sistema organiza trabajo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El tipo reemplaza fichas y el sistema elimina registros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de que el tipo de planta describe el alcance de los procesos y el sistema de producción explica la organización del trabajo y la transferencia.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 5,
          texto:
            '¿Qué sistema de producción reduce el manejo de paquetes y facilita trazabilidad individual?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistema por paquetes de gran volumen acumulado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producción unitaria con transferencia individual controlada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Subcontratación externa sin identificación de lote.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenamiento permanente entre operaciones sucesivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se reconoce que la producción unitaria facilita el seguimiento individual de piezas o prendas y reduce el manejo asociado a paquetes grandes.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 6,
          texto:
            '¿Qué debe privilegiarse cuando el nombre del sistema no coincide con su funcionamiento real?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La denominación comercial usada por la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La preferencia del personal por una modalidad específica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La suposición general sobre ventajas de cada sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La evidencia observada del flujo y sus combinaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se demuestra apropiación al reconocer que la descripción técnica debe basarse en evidencias del flujo y no en la denominación usada por la organización.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 7,
          texto:
            '¿Qué función cumplen los recursos documentales dentro de la producción de prendas?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comunicar requisitos, métodos, parámetros y criterios técnicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir la verificación del material y la maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de secuencias operacionales definidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el seguimiento de órdenes durante la producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los recursos documentales como medios para comunicar especificaciones, métodos, parámetros e identificación del proceso.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 8,
          texto:
            '¿Qué condición convierte una máquina instalada en un recurso realmente utilizable?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tener ubicación visible, aunque permanezca fuera de servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estar inventariada sin mantenimiento ni regulación estable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Operar con aditamentos, soporte y condiciones funcionales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Permanecer disponible, aunque no corresponda al material.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se reconoce que un recurso utilizable requiere funcionamiento, aditamentos, servicios de soporte y correspondencia técnica con la operación.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 9,
          texto:
            '¿Qué variable debe controlarse durante el extendido para evitar alteraciones dimensionales?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ubicación comercial del producto terminado en bodega.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de fotografías usadas en la ficha técnica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La preferencia de empaque definida por el punto de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La tensión aplicada, orientación, capas y caras del material.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se demuestra dominio del extendido al reconocer que tensión, orientación, número de capas y disposición de caras afectan la estabilidad dimensional.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 10,
          texto:
            '¿Qué aspecto determina la selección del equipo de corte en una orden de confección?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Altura del tendido, geometría, material y precisión requerida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Color institucional, temporada comercial y vitrina disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nombre del operario, turno asignado y antigüedad laboral.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cantidad de etiquetas impresas y ubicación del empaque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de la selección de corte a partir del tendido, el comportamiento del material, la geometría de piezas y la exactitud requerida.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 11,
          texto:
            '¿Qué relación técnica debe verificarse para seleccionar una máquina de costura?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color de la prenda, tendencia comercial y exhibición final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Costura, puntada, alimentación, aguja, hilo y aditamentos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Precio de venta, etiqueta externa y empaque promocional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cantidad de operarios, horario social y tipo de cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se reconoce que la selección de máquina depende de la unión, la puntada, el sistema de alimentación, aguja, hilo, aditamentos y parámetros.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 12,
          texto:
            '¿Qué debe conservar todo traslado para mantener controlado el flujo de materiales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color, temporada, empaque, catálogo y ubicación comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Precio, proveedor, vitrina, promoción y fecha de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificación, integridad, cantidad, secuencia y destino.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fotografía, marca, exhibición, descuento y canal digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión del manejo de materiales al reconocer las cinco condiciones que mantienen controlado el traslado dentro del flujo.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 13,
          texto:
            '¿Qué implica una mezcla de referencias dentro de una misma unidad de transferencia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento automático del rendimiento a la primera ejecución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejora directa de la eficiencia del módulo productivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminación del producto en proceso entre operaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pérdida de trazabilidad y riesgo de ensamble incorrecto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se reconoce que mezclar referencias, tallas, colores o lotes compromete la trazabilidad y puede generar errores de ensamble.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 14,
          texto:
            '¿Qué convierte las especificaciones en información utilizable para fabricación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Su claridad, coherencia, actualización y trazabilidad documental.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Su relación exclusiva con decisiones de mercadeo externo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Su uso aislado sin contrastar documentos relacionados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Su reemplazo por instrucciones verbales no registradas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se demuestra dominio al reconocer que las especificaciones deben ser claras, coherentes, actualizadas y trazables respecto de la referencia u orden.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 15,
          texto:
            '¿Qué se entiende por brecha técnica en la caracterización productiva?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una mejora comercial obtenida por cambiar el empaque final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un indicador visual sin fórmula, unidad ni periodo definido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una diferencia verificable entre requisitos y condiciones disponibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una meta de ventas proyectada sin relación con producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de la brecha técnica como diferencia comprobable entre requerimientos del producto y recursos o condiciones disponibles.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 16,
          texto:
            '¿Qué expresa la capacidad teórica en el análisis del desempeño productivo?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La producción observada después de todas las interrupciones reales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El máximo calculado bajo condiciones ideales declaradas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cantidad rechazada por defectos durante el turno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tiempo improductivo acumulado por cada operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se reconoce que la capacidad teórica es un potencial calculado bajo condiciones ideales, sin incorporar pérdidas, variaciones o restricciones.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 17,
          texto:
            '¿Qué señal permite reconocer una posible restricción o cuello de botella?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Variación estética en el diseño comercial del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambio de color en la comunicación promocional externa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción de formatos administrativos sin impacto técnico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acumulación recurrente antes de una operación delimitada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se demuestra apropiación al identificar la acumulación recurrente como señal que debe contrastarse con entradas, salidas, utilización y efecto sobre el sistema.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 18,
          texto:
            '¿Qué condición debe cumplirse para comparar resultados de eficiencia entre periodos?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modificar el método de cálculo sin registrar la justificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Combinar referencias con SAM diferentes como unidades iguales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener método, tiempo contabilizado, SAM y alcance equivalentes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Excluir las novedades operativas aunque afecten el resultado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de que la comparación de eficiencia exige método, tiempo, SAM, productos, periodos y alcances equivalentes.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 19,
          texto:
            '¿Qué indica el rendimiento a la primera dentro de los indicadores de calidad?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proporción que cumple requisitos sin reproceso inicial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cantidad total de materiales entregados a bodega.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Número de gráficos visibles en el tablero manual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tiempo nominal asignado para cada pausa programada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se reconoce que el rendimiento a la primera mide las unidades conformes sin reproceso frente a las unidades procesadas.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
        {
          id: 20,
          texto:
            '¿Qué debe contener una representación visual para apoyar decisiones operativas confiables?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo colores intensos sin valores ni fuentes verificables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Título, periodo, unidad, escala, referencia, fuente y novedad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseño llamativo aunque combine escalas y periodos distintos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resultados aislados sin meta, estándar ni registro de origen.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se demuestra dominio de la gestión visual al reconocer los elementos que permiten interpretar datos operativos con trazabilidad y comparabilidad.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los procedimientos técnicos abordados.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra apropiación de los contenidos relacionados con caracterización del sistema productivo, recursos técnicos, medición del desempeño, indicadores y gestión visual.',
      mensaje_final_reprobado:
        'No se ha superado la actividad. Se recomienda revisar nuevamente el componente formativo e intentar otra vez la actividad.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>