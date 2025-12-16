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

  const arrayFrutasStock = [
    { 
      name: 'Manzana', 
      price: "1.00", 
      description: "Una manzana",
      stock: 0
    },
    { 
      name: 'Pera', 
      price: "2.00", 
      description: "Una pera",
      stock: 10 
    },
    { 
      name: 'Naranja', 
      price: "3.00", 
      description: "Una naranja",
      stock: 20 
    }
  ];

  //eventos
  const handleClick = () => {
    console.log('me diste click')
  }

  // variables reactivas
  import { ref } from 'vue';
  const counter = ref(0);

  const increment = () => {
    console.log('aumentar contador');
    counter.value++;
    console.log(counter);
    pintarBoton();
  }

  const decrement = () => {
    counter.value--;
    pintarBoton();
  }

  const reset = () => {
    counter.value = 0;
    pintarBoton();
  }

  const colorBoton = ref('');

  const pintarBoton = () => {
    return counter.value > 0 ? colorBoton.value = 'green' : counter.value < 0 ? colorBoton.value = 'red' : colorBoton.value = '';
  }

  // propiedades computadas
  import { computed } from 'vue';

  const classCounter = computed(() => {
    return counter.value > 0 ? 'positive' : counter.value < 0 ? 'negative' : 'zero';
  });

  //práctica final
  const arrayNumeros = ref([]);
  const numero = ref();

  const agregarNumero = () => {
    arrayNumeros.value.push(Number(numero.value));
    numero.value = '';
  }

  const permiteAgregar = computed(() => {
    return numero.value !== '' && !isNaN(numero.value) && !arrayNumeros.value.includes(Number(numero.value));
  });

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

  <h3>v-for & v-if & template</h3>
  <ul>
    <template v-for="item in arrayFrutasStock" :key="item.name">
      <li v-if="item.stock > 0">
        {{ item.name }} - {{ item.price }}
      </li>
    </template>
  </ul>

  <h3>v-on</h3>
  <button @click="handleClick">Activame</button>

  <h3>variables reactivas</h3>

  <h2 :class="classCounter">{{ counter }}</h2>
  <button @click="increment">Aumentar</button>
  <button @click="decrement">Disminuir</button>
  <button @click="reset">Resetear</button>

  <h3>práctica final</h3>
  <input type="number" v-model="numero" />
  <button :disabled="!permiteAgregar" @click="agregarNumero">Agregar número</button>
  <ul>
    <li v-for="(num, index) in arrayNumeros" :key="index">
      {{ index }} - {{ num }}
    </li>
  </ul>
</template>

<style>
  h1 {
    color: red;
  }
  .positive {
    color: green;
  }
  .negative {
    color: red;
  }
  .zero {
    color: black;
  }
</style>