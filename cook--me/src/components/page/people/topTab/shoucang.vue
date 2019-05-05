<template>
    <div class="shoucang">
        <ul>
            <li v-for="(items,index) in bookList2" >
                <router-link :to="{path:'/menuDetail',query:{bookId:items.bookId}}">
                    <img :src="JavaUrl+items.bookImage">
                    <p class="p1">-&nbsp;{{items.bookName}}&nbsp;-</p>
                    <p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;{{items.bookDetails}}</p>
                </router-link>
                <!--<div>{{items.bookComment}}<i class="el-icon-star-on"></i></div>-->
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "shoucang",
        data(){
            return{
                usId:1,
                bookId:1,
                bookList2:[],
                JavaUrl:"http://39.106.68.255/"
            }
        },
        methods:{
            caiPu(){
                this.$axios.get("/cookme/sys/user/selectMyHome").then(({data})=>{
                    this.bookList2=data.cookbook2;
                    this.bookId=data.cookbook2.bookId;
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
    .shoucang{
        width:1110px;
        overflow: hidden;
        margin:0 auto;
        li{
            float:left;
            width:320px;
            height:518px;
            overflow: hidden;
            background:burlywood;
            border-radius: 10px;
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
                color:brown;
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