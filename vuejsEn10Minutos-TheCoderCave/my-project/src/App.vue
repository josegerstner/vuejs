<template>
  <MyComponent />
  <MyComponentVuex />
</template>

<script>
import MyComponent from './components/MyComponent.vue'
import MyComponentVuex from './components/MyComponentVuex.vue'

export default {
  name: 'App',
  components: {
    MyComponent,
    MyComponentVuex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
