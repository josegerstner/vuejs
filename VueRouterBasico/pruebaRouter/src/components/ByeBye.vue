<script setup>
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
</script>
<template>
    <h3>Bye Bye Perras</h3>
    <button @click="router.push('/')">Home</button>
</template>