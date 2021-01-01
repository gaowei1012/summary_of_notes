<template>
  <div class="app">
    <p>{{name}}</p>
    <a-button>按钮</a-button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
        collapsed: false,
        name: "hello world ---> [😓]",
    };
  },
};
</script>

<style scoped scss>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>