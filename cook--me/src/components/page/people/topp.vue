<template>
    <div class="topp">
        <div class="left">
            <div class="tou">
                <img src="../../../static/syImg/04/tx10.jpg" alt="">
            </div>
            <div class="tou_right">
                <p>名字</p>
                <p>
                    <span>性别</span>
                    <span>地区</span>
                </p>
                <p>暂时没有个人签名哦！</p>
            </div>
        </div>
        <div class="right">
            <p>点我设置个人信息哦<i class="el-icon-edit"></i></p>
        </div>
        <button>+关注</button>
    </div>
</template>

<script>
    export default {
        name: "topp",

    }
</script>

<style scoped lang="less">
    .topp{
        width:1110px;
        margin:30px auto;
        overflow: hidden;
        position:relative;
        .left{
            width:554px;
            float:left;
            .tou{
              float:left;
               img{
                   border-radius:50%;
                   width:100px;
               }
            }
            .tou_right{
                float:left;
                padding-left:30px;
                p{
                    padding-bottom:20px;
                }
                :nth-child(1){
                    font-size:30px;
                }
                :nth-child(2){
                    span{
                        font-size:16px;
                        padding-right:20px;
                    }

                }
                :nth-child(3){
                    font-size:16px;
                }
            }
        }
        .right{
            float:right;
            p{
                margin-top:30px;
                padding:30px 18px;
                margin-left:10px;
                font-size:20px;
                text-align:center;
                border-radius:10px;
                float:left;
                color:white;
                background:lightskyblue;
                box-shadow:2px 2px 10px yellowgreen;
                i{
                    padding-left:10px;
                    color:yellow;
                }
            }
        }
        button{
            position: absolute;
            top:0;
            left:238px;
            width:80px;
            height:40px;
            font-size:18px;
            border-radius: 20px;
            background:yellowgreen;
            color:lavenderblush;
            text-align: center;
            box-shadow:2px 2px 10px yellowgreen;
        }
    }
</style>