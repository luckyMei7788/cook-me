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
            <div><i class="iconfont">&#xe84d;</i>   我的粉丝</div>
            <p @click="$router.push('/information')">点我设置个人信息哦<i class="el-icon-edit"></i></p>
        </div>
        <button @click="guanzhu"><i class="el-icon-view"></i>  关注</button>
    </div>
</template>

<script>
    export default {
        name: "topp",
        methods:{
            guanzhu(){
                this.$router.push({name:'guanzhu'})
            }
        }

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
                   box-shadow:2px 2px 10px pink;
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
                margin-top:48px;
                padding:16px 18px;
                margin-left:20px;
                margin-right:4px;
                font-size:20px;
                text-align:center;
                border-radius:10px;
                float:left;
                color:white;
                cursor:pointer;
                background:lightskyblue;
                i{
                    font-size:30px;
                    padding-left:10px;
                    color:yellow;
                }
            }
            div{
                margin-top:48px;
                padding:11px 18px;
                font-size:20px;
                text-align:center;
                border-radius:10px;
                float:left;
                color:white;
                cursor:pointer;
                background:pink;
                i{
                    font-size:30px;
                    padding-left:10px;
                    color:hotpink;
                }
            }
            div:hover{box-shadow:2px 2px 10px yellowgreen;}
            p:hover{box-shadow:2px 2px 10px yellowgreen;}
        }
        button{
            position: absolute;
            top:0;
            left:238px;
            width:88px;
            height:40px;
            font-size:18px;
            border:none;
            cursor:pointer;
            border-radius: 20px;
            background:yellowgreen;
            color:lavenderblush;
            text-align: center;
            box-shadow: 2px 2px 10px yellowgreen;
        }
    }
</style>