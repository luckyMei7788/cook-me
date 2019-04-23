<template>
    <div class="lunbo">
        <div class="big-k">
            <div class="big-s">
                <img src="../../../static/syImg/02/02-zaocan-meilingzhou.jpg" alt="">
                <img src="../../../static/syImg/02/02-zaocan-meilingzhou.jpg" alt="">
                <img src="../../../static/syImg/02/02-zaocan-meilingzhou.jpg" alt="">
                <img src="../../../static/syImg/02/02-zaocan-meilingzhou.jpg" alt="">
                <img src="../../../static/syImg/02/02-zaocan-meilingzhou.jpg" alt="">
            </div>
        </div>
        <div class="kuang">
            <div class="left">

            </div>
            <div class="right">

            </div>
        </div>
        <div class="timeC">
            <div class="timed">
                <div class="block">
                    <el-slider
                            v-model="value7"
                            :step="25"
                            show-stops>
                    </el-slider>
                </div>

                <ul>
                    <li>早餐時間<i class="el-icon-star-on"></i></li>
                    <li>午餐時間<i class="el-icon-star-on"></i></li>
                    <li>晚餐時間<i class="el-icon-star-on"></i></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lunbo",
        data() {
            return {
                value6: 0,
                value7: 0
            }
        },
        methods:{

        }
    }
</script>

<style scoped lang="less">
    .lunbo{
        width:100%;
        margin:0 auto;
        height:400px;
        position:relative;
        .big-k{
            width:100%;
            margin:0 auto;
            .big-s{
                img{
                    height:100%;
                     width:20%;
                 }
            }
        }
        .kuang{
            width:100%;
            overflow: hidden;
            .left{
                width:20%;
                height:100%;
                position:absolute;
                background:rgba(255,255,255,.5);
                top:0;
                left:0;
            }
            .right{
                width:20%;
                height:100%;
                position:absolute;
                background:rgba(255,255,255,.5);
                top:0;
                left:80%;
            }


        }
        .timeC{
            width:100%;
            margin:0 auto;
            height:30px;
            position:relative;
            background: url(../../../static/syImg/01/chi_03.jpg);
            .timed{
                .block{
                    width:100%;
                    position:absolute;
                    top:-16px;
                    left:0;
                }
                ul{
                    position:absolute;
                    top:20px;
                    left:108px;
                    li{
                        float:left;
                        padding:20px 116px;
                        font-size:22px;
                        color:grey;
                        font-family:SimHei;
                        i{
                            color:pink;
                        }
                    }
                }
            }

        }
    }
</style>