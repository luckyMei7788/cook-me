<template>
    <div class="people">
        <router-view></router-view>
        <topp></topp>
        <top-tab></top-tab>
    </div>
</template>

<script>
    import topp from "./people/topp"
    import topTab from "./people/topTab"
    export default {
        name: "people",
        components:{
          topp,
          topTab
        }
    }
</script>

<style scoped lang="less">
    @import "../../style/public";
    .people{
        width:100%;
        overflow: hidden;
        margin:0 auto;
        background:url("../../static/syImg/timg (7).jpg");
    }
</style>