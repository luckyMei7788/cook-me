<template>
    <div class="gailan">
        <div class="top_">
            <div class="top">
                <p>发布的菜谱（数量）</p>
                <button>更多</button>
            </div>
            <div class="topG">
                <ul>
                    <li v-for="items in 6">
                        <img src="../../../../static/syImg/02/02-xiawucha-hiataizhishicui.jpg" alt="">
                        <p>菜品名称</p>
                        <p>菜品介绍</p>
                        <div>点赞<i class="el-icon-star-on"></i></div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="middle_">
            <div class="middle">
                <p>我的收藏</p>
                <button>更多</button>
            </div>
            <div class="topG">
                <ul>
                    <li v-for="items in 6">
                        <img src="../../../../static/syImg/02/02-wancan-roumoshaoqiezi.jpg" alt="">
                        <p>菜品名称</p>
                        <p>菜品介绍</p>
                        <div>点赞<i class="el-icon-star-on"></i></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "gailan"
    }
</script>

<style scoped lang="less">
    .gailan{
        width:1110px;
        overflow: hidden;
        margin:0 auto;
        .top_{

            .top{
                width:1110px;
                margin:0 auto;
                overflow: hidden;
                padding-bottom: 10px;
                font-size:16px;
                color:brown;
                border-bottom:1px dashed pink;
                :nth-child(1){
                    float:left;
                }
                :nth-child(2){
                    width:80px;
                    height:30px;
                    text-align:center;
                    color:brown;
                    float:right;
                    margin-right:20px;
                    background:pink;
                    border:none;
                    border-radius: 10px;
                }
            }
            .topG{
                clear: both;
                width:1110px;
                margin:0 auto;
                li{
                    float:left;
                    width:320px;
                    height:400px;
                    background:saddlebrown;
                    margin:20px 20px;
                    color:white;
                    position: relative;
                    img{
                        margin-top:10px;
                        margin-left:36px;
                        width:242px;
                    }
                    p{
                        text-align:center;
                    }
                    div{
                        position:absolute;
                        bottom:10px;
                        right:10px;
                    }
                }
            }
        }
        .middle_{
            .middle{
                width:1110px;
                margin:0 auto;
                overflow: hidden;
                padding-bottom: 10px;
                font-size:16px;
                color:brown;
                border-bottom:1px dashed pink;
                :nth-child(1){
                    float:left;
                }
                :nth-child(2){
                    width:80px;
                    height:30px;
                    text-align:center;
                    color:brown;
                    float:right;
                    margin-right:20px;
                    background:pink;
                    border:none;
                    border-radius: 10px;
                }
            }
            .topG{
                clear: both;
                width:1110px;
                margin:0 auto;
                li{
                    float:left;
                    width:320px;
                    height:400px;
                    background:burlywood;
                    margin:20px 20px;
                    color:white;
                    position: relative;
                    img{
                        margin-top:10px;
                        margin-left:36px;
                        width:242px;
                    }
                    p{
                        text-align:center;
                    }
                    div{
                        position:absolute;
                        bottom:10px;
                        right:10px;
                    }
                }
            }
        }
    }


</style>