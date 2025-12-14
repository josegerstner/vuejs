# Vue JS en 10 minutos
[The Coder Cave](https://www.youtube.com/watch?v=9AHMihFhrzw)  
  
En primer lugar, hay que instalar el cli de Vue JS:
~~~
npm install -g @vue/cli
~~~
  
Crear un proyecto:
~~~
vue create my-project
~~~  
  
En la carpeta *my-project* se crea la carpeta **public** donde está nuestro **index.html**.  
En la carpeta *src* está nuestro código:  
~~~  
myproject
    src
        components
            HelloWorld.vue
        App.vue
        main.js
~~~  
  
En la carpeta *components* creamos **MyComponent.vue** con el siguiente código
~~~vue  
<template>
    <div class="my-component">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    name: 'MyComponent',
    data() {
        return {
            message: 'Hello World with Vue!'
        }
    }
}
</script>
~~~  
Nota: se define como *plantilla* a lo que está dentro de la etiqueta *template*.  
  
Después importamos *MyComponent* en la plantilla de **App.vue**
~~~vue  
<template>
  <MyComponent />
</template>

<script>
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'App',
  components: {
    MyComponent
  }
}
</script>
~~~  
  
# Directivas:
Son atributos especiales con el prefijo **v-** que podemos aplicar a los elementos del DOM en nuestras plantillas.  
~~~vue  
<template>
    <div>
        <h1 v-if="isVisible">{{ message }}</h1>
        <button v-on:click="$event => isVisible = !isVisible">Toggle Visibility</button>
    </div>
</template>

<script>
export default {
    name: 'MyComponent',
    data() {
        return {
            message: 'Hello World with Vue!',
            isVisible: true
        }
    }
}
</script>
~~~  
Acá agregamos una directiva **v-if** que hace que el *h1* se vea o no dependiendo el valor la variable *isVisible*.  
También se agregó un botón con la directiva **v-on** para el **evento click**. Este niega el valor de la variable *isVisible* cuando es pulsado.  
Por último, agregamos en el *return* del script la variable isVisible y le asignamos el valor true.  
  
# Métodos:
Son funciones que se pueden definir dentro de los componentes para usar en la plantilla.  
En nuestro ejemplo, lo agregamos debajo de *data*:
~~~vue  
...
<button v-on:click="toggleVisibility">Toggle Visibility</button>
...
<script>
export default {
    name: 'MyComponent',
    data() {
        return {
            message: 'Hello World with Vue!',
            isVisible: true
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
}
</script>
~~~  
También usamos el nuevo método *toggleVisibility* en nuestro *button*.  
  
# Directiva v-model  
Crea un enlace bidireccional entre un input y una propiedad de datos.
Vamos a usarlo para cambiar el valor de *message* con lo que ingresemos en el *input*. Lo agregamos debajo del button.  
~~~vue  
...
<input v-model="message" />
...
~~~  
  
# Eventos  
Los eventos son sucesos que ocurren debido a la interacción del usuario con la aplicación.  
Los métodos se utilizan con el prefijo **v-on:** seguido del nombre del evento. Ya habíamos usado eventos en el button con *v-on:click* donde se cambia la variable *isVisible* si el usuario presiona ese botón.  
Hay otra forma de utilzar métodos que es con el prefijo **@** seguido del nombre del evento. Por ejemplo, podríamos usar **v-on:click** ó **@click**.  
~~~vue  
...
<button @click="sayHello">Say Hello</button>
...
    methods: {
        ...,
        sayHello() {
            alert(this.message);
        }
    }
...
~~~  
  
# Directiva v-for  
La directiva **v-for** permite renderizar una lista de elementos basada en un arreglo.  
Dentro de la data agregamos un list que renderizaremos dentro de un listado *ul*.  
En el v-for debemos poner el listado a renderizar (list) y además hay que agregar la *key* que va a tomar.  
~~~vue  
...
    <ul>
        <li v-for="item in list" :key="item.id">{{ item.text }}</li>
    </ul>
...
return {
    ...,
    list: [
        { id: 1, text: 'First item' },
        { id: 2, text: 'Second item' },
        { id: 3, text: 'Third item' }
    ]
}
...
~~~  
  
# Directiva v-bind  
Permite enlazar (bindear) una variable de Vue con un atributo específico de una etiqueta HTML.  
~~~vue  
...
<h1 v-bind:class="{ highlighted: isHighlighted }">{{ title }}</h1>
<button v-on:click="toggleHighlight">Toggle Highlight</button>
...
<style>
    .highlighted {
        color: gold;
    }
</style>
...
data() {
    return {
        ...
        title: 'This is the tittle',
        isHighlighted: false
    }
},
methods: {
    ...
    toggleHighlight() {
        this.isHighlighted = !this.isHighlighted;
    }
}
...
~~~  
  
# v-bind VS v-model  
**v-bind** se utiliza para vincular una expresión a una propiedad de un elemento del DOM. Cuando cambia el valor de la expresión Vue actualiza automáticamente el valor de la propiedad del DOM. Es un enlace *UNIDIRECCIONAL*. Es decir, los cambios en el DOM no afectan a los datos.  
**v-model** se utiliza para crear enlaces *BIDIRECCIONALES* entre los datos y los elementos del formulario. *v-model* en realidad es una abreviatura para utilizar **v-bind** y **v-on** a la vez.  
  
# Vuex  
A veces es posible que se necesite compartir datos entre varios componentes que no están directamente relacionados.  
Vuex es una biblioteca de Vue.js que proporciona un almacén central de datos para la aplicación.  
  
**NOTA MUY IMPORTANTE**: En el video se crea un store.js donde creamos el store con **Vuex**...  
Hay un tema, al momento de ver todo esto es más que recomendable ver con qué versión se está trabajando, ya que en mi caso estoy con la versión de Vue 3.2.13. En el video no aclara que hay que importar en el package.json "vuex": "^4.0.0". ¿Tal vez esto no hacía falta antes?  
También hay que ver que a la hora de crear el store de Vuex hay algunas cosas diferentes. Quizás más adelante entienda mejor estas diferencias, con React js me ha pasado también con algunas utilidades y sus distintas versiones.  
  
Bueno. Tuve que poner a vuex en el package.json, por lo que tuve que volver a levantar el proyecto. Acá voy a mostrar cómo me quedó a mí.  
  
Vuex nos permite tener las variables que necesitemos compartir entre distintos componentes dentro de un mismo archivo.  
Para esto creamos en la carpeta **src** un archivo llamado **store.js**.
En el video dice que hay que importar Vue y Vuex, pero a mí me quedó así. Importé sólo el createStore de Vuex.  
Luego en el state le definí la variable message y le asigné un valor.  
Después hay algo que se llama mutations, que es donde vamos a definir las funciones que nos permitirán cambiar el valor/estado de las variables definidas dentro del store.  
~~~js  
import { createStore } from 'vuex';

export default createStore({
    state: {
        message: 'Hello World with Vuex'
    },
    mutations: {
        setMessage(state, newMessage) {
            state.message = newMessage;
        }
    }
});
~~~  
En **main.js** tuve que importar *store* y también agregué el use(store). Esto no estaba en el video, por eso lo aclaro.  
~~~js  
...
import store from './store'

createApp(App).use(store).mount('#app')
~~~
Para que quede más prolijo, creé un nuevo componente *MyComponentVuex.vue*, así que lo tuve que importar a *App.vue* como hicimos con el otro. En este nuevo componente creamos un h1 con la variable *message* como valor y un botón con una función *changeMessage* que nos va a permitir cambiar el valor de esta variable. En los scripts debemos importar *mapState* y *mapMutations* para mapear los estados y mutaciones que hayamos definido en el **store.js**. Acá aparece algo llamado *computed* donde mapeamos los estados, en nuestro caso es sólo la variable *message*. Y dentro de methods mapeamos el *setMessage* del store y creamos una función llamada *changeMessage*. En esta función usamos el *setMessage* para cambiar el estado de la variable *message* con lo que le pasemos.  
*MyComponentVuex.vue* me quedó así:
~~~vue  
<template>
    <div>
        <h1>{{ message }}</h1>
        <button @click="changeMessage">Change Message</button>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'MyComponentVuex',
    computed: {
        ...mapState(['message'])
    },
    methods: {
        ...mapMutations(['setMessage']),
        changeMessage() {
            this.setMessage('Hello everyone!');
        }
    }
}
</script>
~~~  
  
# Computed
Una propiedad computada es una función que se utiliza para realizar algún cálculo y devolver un resultado. Las propiedades computadas son reactivas, lo que significa que Vue las rastrea y las actualiza automáticamente cuando cambian las dependencias.  
Un gran beneficio que tienen, es que Vue las almacena en caché. O sea, que una propiedad computada sólo se vuelve a calcular cuando cambia alguna de sus dependencias. Si no cambian, Vue devuelve el valor previamente calculado sin tener que calcular la función de nuevo.  
