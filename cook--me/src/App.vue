<template>
  <div id="app" class="head">
    <tab></tab>
    <router-view></router-view>
  </div>
</template>
<script>
  import tab from './components/common/tab.vue'

  export default {
    name: "App",
    components: {
      tab
    }
  }
</script>
<style lang="less">


</style>
