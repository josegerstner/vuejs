<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['search'])
const search = ref('')

watch(search, (value) => {
  emit('search', value)
})
</script>

<template>
  <input
    class="form-control mb-4"
    type="search"
    placeholder="Buscar..."
    v-model="search"
  />
</template>
