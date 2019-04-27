<template>
    <div class="tuijian">
        <h1>CookMe · 今日推荐</h1>
        <ul>
            <li v-for="(items,index) in bookList">
                <img src="../../../static/syImg/02/02-xiawucha-sangshengnaixi.jpg" alt="">
                <p>{{items.bookName}}</p>
                <p>{{items.bookDetails}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "tuijian",
        data(){
            return{
                bookList:[],
                JavaUrl:"http://39.106.68.255:8080"
            }
        },
        methods:{
            tuiJian(){
                this.$axios.post("/cookme/sys/book/selectByBest").then(({data})=>{
                    this.bookName=data.bookName;
                    this.bookDetails=data.bookDetails;
                    this.bookList=data.bestType;
                })
            }
        },
        mounted(){
            this.tuiJian()
        }
    }
</script>

<style scoped lang="less">
    .tuijian{
        width:1200px;
        margin:80px auto;
        overflow: hidden;
        h1{
            font-size:36px;
            padding-bottom:30px;
            text-align: center;
            color:saddlebrown;
        }
        ul{
            li{
                float:left;
                padding:0 10px;
                img{
                    width:220px;
                    height:220px;
                    border-radius:50%;
                }
                :nth-child(2){
                    text-align: center;
                    padding-top:20px;
                    font-size:20px;
                }
                :nth-child(3){
                    text-align: center;
                    padding-top:20px;
                    font-size:16px;
                    color:#999;
                }
            }
        }
    }
</style>