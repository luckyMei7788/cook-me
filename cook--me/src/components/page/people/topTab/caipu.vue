<template>
    <div class="caipu">
        <ul>
            <li v-for="(items,index) in bookList">
                <router-link :to="{path:'/menuDetail',query:{bookId:items.bookId}}">
                    <img :src="JavaUrl+items.bookImage">
                    <p class="p1">-&nbsp;{{items.bookName}}&nbsp;-</p>
                    <p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;{{items.bookDetails}}</p>
                </router-link>
                <!--<img :src="JavaUrl+items.bookImage" alt="">-->

                <!--<div>{{items.bookComment}}<i class="el-icon-star-on"></i></div>-->
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "caipu",
        data(){
            return{
                usId:1,
                bookId:0,
                bookList:[],
                JavaUrl:"http://39.106.68.255/"
            }

        },
        methods:{
            caiPu(){
                this.$axios.get("/cookme/sys/user/selectMyHome").then(({data})=>{
                    this.bookList=data.cookbook1;
                    this.bookId=data.cookbook1.bookId;
                    console.log(data);
                })
            }

        },
        mounted(){
            this.caiPu()
        }
    }
</script>

<style scoped lang="less">
    .caipu{
        width:1110px;
        overflow: hidden;
        margin:0 auto;
        li{
            float:left;
            width:320px;
            /*overflow: hidden;*/
            height:518px;
            background:saddlebrown;
            border-radius:10px;
            margin:20px 20px;
            color:white;
            position: relative;
            img{
                border-radius: 10px;
                margin:15px 20px;
                width:282px;
                height:240px;
            }
            .p1{
                 text-align:center;
                 color:yellow;
             }
            .p2{
                text-align:left;
                color:white;
                font-size:16px;
                margin:5px;
            }
            div{
                position:absolute;
                bottom:10px;
                right:10px;
            }
        }
    }
</style>