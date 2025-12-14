<template>
    <div>
        <!-- Vuex -->
        <h1>{{ message }}</h1>
        <button @click="changeMessage">Change Message</button>
    </div>
</template>
<script>
// Vuex
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