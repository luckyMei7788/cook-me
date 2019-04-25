<template>
    <div class="top-h">
        <router-view></router-view>

        <top-m></top-m>

        <div class="middle">
            🚩今日早餐推荐：营养又健康，做法超简单的早餐
        </div>

        <lunbo></lunbo>

        <div class="siyue">
            💗四月，补肾调阴阳，不负好时光。
        </div>

        <xuanka></xuanka>

        <middle-chu></middle-chu>

        <tuijian></tuijian>

        <foot></foot>
    </div>
</template>

<script>
    import lunbo from "./home/lunbo.vue"
    import xuanka from "./home/xuanka.vue"
    import topM from "./home/topM.vue"
    import middleChu from "./home/middleChu.vue"
    import tuijian from "./home/tuijian.vue"
    import foot from "./home/foot.vue"

    export default {
        name: "home",
        components:{
            lunbo,
            xuanka,
            topM,
            middleChu,
            tuijian,
            foot
        }
    }
</script>

<style scoped lang="less">
//引入小图标

@import "../../static/login/iconfont/iconfont.css";
@import "../../style/public.less";

    .top-h{
        width:100%;
        height:630px;
        margin:0 auto;
        background:url(../../static/syImg/01/banner0.1.png) center no-repeat;
        .middle{
            width:100%;
            margin:0 auto 30px;
            background:#FEF6E1;
            text-align: center;
            padding:52px 0;
            font-size:22px;

        }

        .siyue{
            width:100%;
            margin:0 auto 50px;
            font-size:22px;
            text-align:center;
            padding:30px 0;
            background:#FAE8C8;

        }
    }
</style>