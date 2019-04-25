<template>
    <mu-container>
        <mu-tabs :value.sync="active2" color="pink" indicator-color="deeppink" full-width inverse>
            <mu-tab>水果</mu-tab>
            <mu-tab>蔬菜</mu-tab>
            <mu-tab>五谷</mu-tab>
            <mu-tab>生鲜</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="active2 === 0">
            <ul>
                <li v-for="item in 6" ><img src="../../../static/syImg/03/03-sg-yeiz.jpg" alt=""></li>
            </ul>
        </div>
        <div class="demo-text" v-if="active2 === 1">
            <ul>
                <li v-for="item in 6" ><img src="../../../static/syImg/02/02-wucan-jiachanglachaotudousi.jpg" alt=""></li>
            </ul>
        </div>
        <div class="demo-text" v-if="active2 === 2">
            <ul>
                <li v-for="item in 6" ><img src="../../../static/syImg/02/02-zaocna-xianggujidanzaocanbing.jpg" alt=""></li>
            </ul>
        </div>
        <div class="demo-text" v-if="active2 === 3">
            <ul>
                <li v-for="item in 6" ><img src="../../../static/syImg/02/02-wancan-banlihongshaorou.jpg" alt=""></li>
            </ul>
        </div>
    </mu-container>
</template>

<script>
    export default {
        data () {
            return {
                active2: 0
            };
        }
    };
</script>

<style scoped lang="less">
    /*.xxka{*/
        /*width:1200px;*/
        /*height:270px;*/
        /*margin:50px auto;*/
        /*position:relative;*/
        /*box-shadow:2px 2px 20px #999;*/
        /**/
        .mu-tab{
            font-size:18px;
        }
        .mu-tabs{
            color:brown;
            box-shadow:2px 2px 20px #999;
        }
        .demo-text {
            padding: 16px;
            margin:0 auto;
            background: #fff;
            box-shadow:2px 2px 20px #999;
            position:relative;
            overflow: hidden;
            p {
                margin: 8px 0;
            }
            ul{

                li{
                    margin-left:4px;
                    float:left;
                    cursor:pointer;
                    img{
                        width:178px;
                        height:178px;
                        cursor:pointer;
                    }
                }
            }
        }


</style>