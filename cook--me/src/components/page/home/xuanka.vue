<template>
    <el-tabs type="border-card" class="xxka">
        <el-tab-pane label="水果">
            <ul>
                <li v-for="item in 6" ><img src="../../../static/syImg/03/03-sg-yeiz.jpg" alt=""></li>
            </ul>
        </el-tab-pane>
        <el-tab-pane label="蔬菜">
            <ul>
                <li v-for="item in 6" ><img src="../../../static/syImg/02/02-wucan-jiachanglachaotudousi.jpg" alt=""></li>
            </ul>
        </el-tab-pane>
        <el-tab-pane label="五谷">
            <ul>
                <li v-for="item in 6" ><img src="../../../static/syImg/02/02-zaocna-xianggujidanzaocanbing.jpg" alt=""></li>
            </ul>
        </el-tab-pane>
        <el-tab-pane label="生鲜">
            <ul>
                <li v-for="item in 6" ><img src="../../../static/syImg/02/02-wancan-banlihongshaorou.jpg" alt=""></li>
            </ul>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: "xuanka.vue"
    }
</script>

<style scoped lang="less">
    .xxka{
        width:1200px;
        height:270px;
        margin:50px auto;
        position:relative;
        box-shadow:2px 2px 20px #999;
        ul li{
            float:left;
            cursor:pointer;
            img{
                width:195px;
                height:196px;
                cursor:pointer;
            }
        }
    }
</style>