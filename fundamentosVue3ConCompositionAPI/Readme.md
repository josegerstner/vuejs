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
  
# v-for + v-if  
Se puede hacer que a partir de un arreglo se imprima el listado condicionalmente. Hay que tener en cuenta que el **v-if** es lo que el motor buscará primero, por lo que hay que tener algunas cosas en cuenta para utilizarlos.  
Si quiero usarlos a la vez, debe ser usando dos variables distintas, por ejemplo:  
```vue
<ul>
    <li v-if="activo" v-for="fruta in arrayFrutas" :key="fruta.name">
        {{ fruta.name }} - {{ fruta.price }}
    </li>
</ul>
```  
En este caso, usamos la variable *activo* para condicionar si se imprime o no imprime el for.  
Otra opción sería agregar un span en el texto a imprimir:  
```vue
<ul>
    <li v-for="fruta in arrayFrutas" :key="fruta.name">
        <span v-if="fruta.stock > 0">{{ fruta.name }} - {{ fruta.price }}
    </li>
</ul>
```  
El problema al hacer esto es que, si hay alguna fruta sin stock, igual se imprimirá el **li** correspondiente a esa fruta sin stock. No imprime el *span*, pero sí el *li*.  
  
# v-for + v-if + template  
Como solución para usar ambos a la vez, sería poner el **v-for** en un **template** y adentro el **v-if** en un **li**.  
```vue  
<template v-for="item in arrayFrutasStock" :key="item.name">
    <li v-if="item.stock > 0">
        {{ item.name }} - {{ item.price }}
    </li>
</template>
```  
  
# Variables reactivas con ref()  
Para que Vue renderice el valor de una variable a la que vamos cambiándole el valor, es necesario que le digamos que esa variable es *reactiva*.
```vue  
<script>
    import { ref } from 'vue'

    const counter = ref(0);
    const increment = () => {
        counter.value++;
    }
</script>
<template>
    <h2>{{ counter }}</h2>
    <button @click="increment">Aumentar</button>
</template>
```  
Fijarse bien que para incrementar el valor de nuestra variable *counter* estamos poniendo *counter.value*, ya que **ref** nos devuelve un objeto.  
  
# Propiedades computadas (computed)  
No se recomienda utilizar demasiada lógica en las plantillas HTML. Por eso, para lógica compleja que incluya datos reactivos se recomienda usar **propiedades computadas**.  
```vue  
<script>
    import { computed } from 'vue';

    const classCounter = computed(() => {
        return counter.value > 0 ? 'positive' : counter.value < 0 ? 'negative' : 'zero';
    });
</script>
<template>
    <h2 :class="classCounter">{{ counter }}</h2>
    <button @click="increment">Aumentar</button>
    <button @click="decrement">Disminuir</button>
    <button @click="reset">Resetear</button>
</template>
```  
**NOTA**: se podría usar una función en lugar de una **propiedad computada**. La funcionalidad sería la misma. La diferencia está en que estas últimas se almacenan en caché en función de sus dependencias reactivas.  
