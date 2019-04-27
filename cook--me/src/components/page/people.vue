<template>
    <div class="people">
        <topp></topp>
        <router-view ></router-view>
    </div>
</template>

<script>
    import topp from "./people/topp"
    export default {
        name: "people",
        components:{
          topp
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