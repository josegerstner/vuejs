<template>
    <div class="my-component">
        <!-- v-if -->
        <h1 v-if="isVisible">{{ message }}</h1>
        <!-- v-on -->
        <button v-on:click="toggleVisibility">Toggle Visibility</button>
        <!-- v-model -->
        <input v-model="message" />
        <!-- eventos @ -->
        <button @click="sayHello">Say Hello</button>
        <!-- v-for -->
        <ul>
            <li v-for="item in list" :key="item.id">{{ item.text }}</li>
        </ul>
        <!-- v-bind -->
        <h1 v-bind:class="{ highlighted: isHighlighted }">{{ title }}</h1>
        <button v-on:click="toggleHighlight">Toggle Highlight</button>
    </div>
</template>

<style>
    .highlighted {
        color: gold;
    }
</style>

<script>
export default {
    name: 'MyComponent',
    data() {
        return {
            message: 'Hello World with Vue!',
            // v-if
            isVisible: true,
            // v-for
            list: [
                { id: 1, text: 'First item' },
                { id: 2, text: 'Second item' },
                { id: 3, text: 'Third item' }
            ],
            // v-bind
            title: 'This is the tittle',
            isHighlighted: false
        }
    },
    methods: {
        // eventos v-on
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        // eventos @
        sayHello() {
            alert(this.message);
        },
        // v-bind
        toggleHighlight() {
            this.isHighlighted = !this.isHighlighted;
        }
    }
}
</script>