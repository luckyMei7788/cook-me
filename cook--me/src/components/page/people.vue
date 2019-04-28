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
<<<<<<< HEAD
          topp,
          topTab
=======
          topp
>>>>>>> 55bb8bc3da748cb029b3807aebb5b618ea9802cc
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