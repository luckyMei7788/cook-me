<template>
    <div>
    <mu-container>
        <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
            <mu-tab>发布菜谱</mu-tab>
            <mu-tab>我的菜谱</mu-tab>
            <mu-tab>我的收藏</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="active1 === 0">
            <gailan></gailan>
        </div>
        <div class="demo-text" v-if="active1 === 1">
            <caipu></caipu>
        </div>
        <div class="demo-text" v-if="active1 === 2">
            <shoucang></shoucang>
        </div>
    </mu-container>
    </div>
</template>
<script>
    import gailan from "./topTab/gailan"
    import caipu from "./topTab/caipu"
    import shoucang from "./topTab/shoucang"
    export default {
        components:{
            gailan,
            caipu,
			shoucang,
        },
        data () {
            return {
                active1: 0
            }
        },
        methods:{

        }
    }
</script>
<style scoped lang="less">
    .mu-tab{
        font-size:18px;
    }
    .demo-text {
        padding: 16px;
        background: #fff;
        font-size:18px;
        p {
            margin: 8px 0;
        }
    }
</style>
