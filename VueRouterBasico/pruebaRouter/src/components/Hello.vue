<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
</script>

<template>
    <h1>Hello Perras</h1>
    <button @click="router.push('/bye')">Bye</button>
</template>