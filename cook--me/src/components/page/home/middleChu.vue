<template>
    <div class="middle-chu">
        <div class="middle-chu-down">
            <img src="../../../static/syImg/cake.jpg" alt="">
        </div>
        <div class="paihang">
            <ul>
                <li v-for="(items,index) in userList">
                    <!--<div><img src="JavaUrl+items.usHead" alt=""></div>-->
                    <div><span>{{items.usName}}</span></div>
                    <div><p>{{items.usJob}}</p></div>
                    <div><button @click="guanzhu">更多</button></div>
                   <!-- <div class="text">
                        <p>我来自：</p>
                        <p>性别：</p>
                        <p>我的粉丝：</p>
                        <p>我发布了菜谱数：</p>
                    </div>-->
                </li>
            </ul>
            <div class="middle-huan">
                <button @click="selectUser">换一批</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "middleChu",
        data(){
            return{
                userList:[],
                JavaUrl:"http://39.106.68.255:8080"
            }

        },
        methods:{
            selectUser(){
                console.log(222)
                this.$axios.post("/cookme/sys/user/selectBest").then(({data})=>{
                    this.usName=data.useName;
                    this.usHead=data.usHead;
                    this.usJob=data.usJob;
                    //this.usFanscount=data.usFanscount;
                    this.userList=data.bestUser;
                    console.log(data)
                })
            },
            guanzhu(){
                this.$router.push({name:"guanzhu"})
            }
        },
        mounted(){
            this.selectUser();
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
            height: 400px;
            float: left;
        }
    }
    .paihang{
        width:420px;
        float:right;
        ul{
            overflow: hidden;
            li {
                overflow: hidden;
                font-size:18px;
                padding-bottom:10px;
                div{
                    overflow: hidden;
                    float:left;
                    p{
                       width:134px;
                    }
                    span{
                        width:134px;
                        color:brown;
                        font-size:20px;

                    }
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
                        width:38px;
                        border-radius:50%;
                    }
                }
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
        }
        button:hover{
            box-shadow:2px 2px 20px #999;
        }
    }
}
</style>