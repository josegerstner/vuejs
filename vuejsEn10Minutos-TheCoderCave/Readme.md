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
Después importamos *MyComponent* en **App.vue**
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
Son atributos especiales con el prefijo **v-** que podemos añadir a nuestras plantillas.  
