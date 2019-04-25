<template>
    <div class="middle-chu">
        <div class="middle-chu-down">
            <img src="../../../static/syImg/cake.jpg" alt="">
        </div>
        <div class="paihang">
            <ul>
                <li v-for="item in 5">
                    <div><img src="../../../static/syImg/04/tx01.jpg" alt=""></div>
                    <div><span>Tony</span></div>
                    <div><p>820个关注</p></div>
                    <div><button @click="xiangqing">更多</button></div>
                   <!-- <div class="text">
                        <p>我来自：</p>
                        <p>性别：</p>
                        <p>我的粉丝：</p>
                        <p>我发布了菜谱数：</p>
                    </div>-->
                </li>
            </ul>
            <div class="middle-huan">
                <button>换一批</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "middleChu",

        methods:{
            xiangqing(){
                this.$router.push({name:"people"})
            }
        }
    }
</script>

<style scoped lang="less">
.middle-chu{
        width:1200px;
        margin:50px auto 0;
        overflow: hidden;
    .middle-chu-down {
        img {
            width: 682px;
            height: 375px;
            float: left;
        }
    }
    .paihang{
        float:right;
        li {
            font-size:17px;
            div{
                overflow: hidden;
                float:left;
                padding:14px 32px;
                button{
                    background:#d8316c;
                    font-size:18px;
                    width:66px;
                    height:39px;
                    color:white;
                    border:none;
                    border-radius:10px;
                    cursor:pointer;
                    i{
                        color:#fff;
                        font-size:30px;
                    }
                }
                button:hover{
                    box-shadow:2px 2px 20px #999;
                }
                img{
                    width:35px;
                    border-radius:50%;
                }
            }
            .text{
                display: none;
            }
        }
    }
    .middle-huan {
        margin-left:210px;
        button{
            text-align:center;
            background:#f8bf1c;
            color:white;
            border:none;
            width:70px;
            height:30px;
            border-radius:20px;
            cursor:pointer;
            box-shadow:2px 2px 20px #999;

        }
    }
}
</style>