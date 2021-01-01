<template>
    <div class="app">{{name}}</div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            name: 'hello world'
        }
    }
}
</script>

<style scoped scss>
    .app {
        background: rebeccapurple;
    }
</style>