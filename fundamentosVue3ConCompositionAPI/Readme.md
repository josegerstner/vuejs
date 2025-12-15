# Fundamentos de Vue 3 con Composition API  
Aprende a crear aplicaciones web modernas y escalables  
[Bluuweb](https://www.youtube.com/watch?v=PL-aTHv2L3E)  
Basado en un curso de Udemy    
  
# Single File Components (SFC)  
Estos archivos son los que usa Vue js. Se llaman así ya que permiten en un mismo archivo o componente tener todo la estructura (HTML en etiqueta **template**), el estilo (CSS en etiqueta **style**) y la lógica (JavaScript en etiqueta **script**). Estos son los archivos **.vue**.  
  
# v-bind  
Escribir **v-bind:**algo cada vez que lo queramos usar, puede verse como que es muy largo. Así que en su lugar, se puede sólo poner **:**algo.  
Por ejemplo:  
~~~vue  
<script setup>
  const styleColor = "color: blue";
</script>

<template>
  <h2 :style="styleColor">Soy azul</h2>
</template>
~~~  
  
# v-else
Inmediatamente después de una directiva **v-if** puede usarse **v-else**, o también **v-else-if**.  
```vue  
<h2 v-if="activo === true">Estoy activo</h2>
<h2 v-else-if="activo === false">Estoy inactivo</h2>
<h2 v-else>Estoy indeciso</h2>
```  
  
# v-show
Se utiliza para mostrar o no mostrar un elemento de la plantilla. Lo que hace es cambiar cambiar la propiedad *display* del elemento, por lo que en realidad por detrás se *oculta* el elemento. El elemento sigue existiendo. En cambio un **v-if** destruye el elemento. Si voy a alternar muchas veces un elemento es preferible usar **v-show**, ya que costará menor renderizar algo que está oculto que algo que no está, como sería en el caso del **v-if**.  
  
# v-for
La directiva **v-for** la podemos usar para recorrer arreglos, arreglos de objetos o incluso objetos.  
```vue
<ul>
    <li v-for="(fruta, index) in arrayFrutas" :key="index">
        {{ index }} - {{ fruta }}
    </li>
</ul>

<ul>
    <li v-for="(fruta, index) in arrayFrutas2" :key="fruta.name">
        {{ index }} - {{ fruta.name }} - precio: {{ fruta.price }}
    </li>
</ul>


<ul>
    <li v-for="(value, propiedad, index) in objetoFruta" :key="value">
        {{ index }} - {{ propiedad }}: {{ value }}
    </li>
</ul>
```  
  
