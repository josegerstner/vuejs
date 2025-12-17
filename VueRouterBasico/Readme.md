# Vue Router Básico
[QuinteRock](https://www.youtube.com/watch?v=GdKIBGrXezo)  
  
Lo primero que hay que tener instalado es **vue-router**:  
```bash  
npm install vue-router@4
```  
  
Luego creamos en la carpeta **src** otra carpeta **router** y dentro un archivo **index.js**. Quedándonos finalmente un archivo **src/router/index.js**:  
```javascript  
import Hello from '@/components/Hello.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Hello',
        component: Hello,
    },
  ],
})

export default router
```  
En este archivo se configuran las rutas (path), pudiéndose ponerle un nombre y debiéndose configurar el componente correspondiente.  
  
Hay que importar el **router** en el **main.js** y usarlo:  
```javascript  
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```  
  
También hay que importar el **RouterView** en **App.vue**:
```vue  
<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
```  
  
