<script setup>
  const name = 'Vue Dinámico';
  const styleColor = "color: blue";
  const arrayColores = ['red', 'blue', 'green'];
  const activo = true;
  const arrayFrutas = ['🍎', '🍌', '🍉', '🍓', '🍒'];

  const arrayFrutas2 = [
    { name: 'Manzana', price: "1.00", description: "Una manzana" },
    { name: 'Pera', price: "2.00", description: "Una pera" },
    { name: 'Naranja', price: "3.00", description: "Una naranja" }
  ];

  const objetoFruta = {
    name: 'Mango',
    price: "4.00",
    description: "Un mango",
    id: 4
  };
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <h2 :style="styleColor">Soy azul</h2>

  <h2>{{ arrayColores }}</h2>
  <h2 :style="`color: ${arrayColores[2]}`">No soy azul</h2>
  <h2>
    Estoy {{ activo ? 'activo' : 'inactivo' }}
  </h2>
  <h2 v-if="activo">Estoy activo</h2>
  <h2 v-else>Estoy inactivo</h2>

  <h2 v-show="activo">Estoy activo</h2>

  {{ arrayFrutas }}
  <ul>
    <li v-for="(fruta, index) in arrayFrutas" :key="index">
      {{ index }} - {{ fruta }}
    </li>
  </ul>

  <ul>
    <li
      v-for="(fruta, index) in arrayFrutas2" :key="fruta.name">
      {{ index }} - {{ fruta.name }} - precio: {{ fruta.price }}
    </li>
  </ul>

  {{ objetoFruta }}
  <ul>
    <li v-for="(value, propiedad, index) in objetoFruta" :key="value">
      {{ index }} - {{ propiedad }}: {{ value }}
    </li>
  </ul>
</template>

<style>
  h1 {
    color: red;
  }
</style>