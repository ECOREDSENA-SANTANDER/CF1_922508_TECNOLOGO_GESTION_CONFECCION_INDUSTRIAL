<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p La caracterización del proceso productivo permite reconocer cómo se articulan los recursos, materiales, equipos, métodos de transferencia e información técnica dentro de una planta de confección. Este componente parte del análisis del sistema productivo como una estructura interdependiente, en la que las entradas, las operaciones de transformación y los resultados esperados deben relacionarse con el tipo de producto, la capacidad disponible y los requerimientos técnicos de la producción.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.br-tl.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.bri-tl.p-4.pt-5.ps-5
        p.mb-0 El desarrollo de los contenidos orienta la identificación de tipos de plantas, sistemas de producción, maquinaria, recursos técnicos, flujo de materiales y especificaciones necesarias para ejecutar una orden de producción. También incorpora el análisis del desempeño del proceso mediante la revisión de capacidad teórica, capacidad operativa, puntos críticos, cuellos de botella, curvas de experiencia y estándares técnicos, con el fin de diferenciar el potencial calculado, el resultado observado y las condiciones que afectan la continuidad productiva.
    
    .cajon.color-acento-contenido.bg-color-8.p-4.mb-4
      p.mb-0 Finalmente, se aborda la construcción e interpretación de indicadores de productividad, flujo, materiales y calidad, así como el uso de herramientas de gestión visual, reportes de turno y acciones de respuesta operativa. Estos elementos permiten convertir los registros de producción en información verificable para el seguimiento, la comparación y la toma de decisiones dentro del proceso de confección industrial.
    
    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
