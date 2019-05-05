<template>
    <div class="middle-chu">
        <div class="middle-chu-down">
            <img src="../../../static/syImg/cake.jpg" alt="">
        </div>
        <div class="paihang">
            <ul>
                <li v-for="(items,index) in userList">
                    <div><img :src="JavaUrl+items.usHead"></div>
                    <div><span>{{items.usName}}&nbsp;&nbsp;</span></div>
                    <div><span>{{items.usSex===0?items.usSex='男':items.usSex='女'}}&nbsp;&nbsp;</span></div>
                    <div><span>{{items.usEmail}}&nbsp;&nbsp;</span></div>
                    <div><span>菜谱数：{{items.usBookcount}}&nbsp;&nbsp;</span></div>
                    <router-link :to="{path:'/fensi',query:{usId:items.usId}}">
                        <div><button>更多</button></div>
                    </router-link>
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
                usSex:"",
                usId:"",
                JavaUrl:"http://39.106.68.255/"
            }

        },
        methods:{
            selectUser(){
                console.log(222)
                this.$axios.post("/cookme/sys/user/selectBest").then(({data})=>{
                    this.usName=data.useName;
                    this.usHead=data.usHead;
                    this.userList=data.bestUser;
                    this.usId=data.bestUser.usId;
                    console.log(data)
                })
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
        width:460px;
        float:right;
        ul{
            overflow: hidden;
            li {
                overflow: hidden;
                font-size:16px;
                padding-bottom:10px;
                div{
                    overflow: hidden;
                    float:left;
                    span{
                        width:134px;
                        color:brown;
                    }
                    button{
                        background:hotpink;
                        width:52px;
                        height:32px;
                        color:white;
                        border:none;
                        border-radius:6px;
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