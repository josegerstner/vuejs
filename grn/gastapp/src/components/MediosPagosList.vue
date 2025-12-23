<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="card h-100">
    <div class="card-body p-0">
      <ul class="list-group list-group-horizontal-lg h-100">
        <li
          v-for="m in items"
          :key="m.id"
          class="list-group-item flex-fill text-center"
        >
          {{ m.categoria }} {{ m.empresa }} - {{ m.banco }}
        </li>
      </ul>
    </div>
  </div>
</template>
