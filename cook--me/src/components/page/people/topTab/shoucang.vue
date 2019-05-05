<template>
    <div class="shoucang">
        <ul>
            <li v-for="(items,index) in bookList2" >
                <img :src="JavaUrl+items.bookImage" alt="">
                <p>{{items.bookName}}</p>
                <p>{{items.bookDetails}}</p>
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
                bookList2:[],
                JavaUrl:"http://39.106.68.255/"
            }
        },
        methods:{
            caiPu(){
                this.$axios.get("/cookme/sys/user/selectMyHome").then(({data})=>{
                    this.bookList2=data.cookbook2;
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
</style>