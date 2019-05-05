<template>
    <div class="tuijian">
        <h1>CookMe · 今日推荐</h1>
        <ul>
            <li v-for="(items,index) in bookList">
                <img :src="JavaUrl+items.bookImage" alt="">
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
                JavaUrl:"http://39.106.68.255/"
            }
        },
        methods:{
            tuiJian(){
                this.$axios.post("/cookme/sys/book/selectByBest").then(({data})=>{
                    this.bookName=data.bookName;
                    this.bookDetails=data.bookDetails;
                    this.bookList=data.bestType;
                    console.log("data");
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
            width:1200px;
            height:354px;
            li{
                margin-left:10px;
                float:left;
                padding:0 10px;
                width:220px;
                height:220px;
                img{
                    margin-left:10px;
                    width:200px;
                    height:200px;
                    border-radius:20px;
                }
                :nth-child(2){
                    text-align: center;
                    width:210px;
                    height:30px;
                    font-size:14px;
                }
                :nth-child(3){
                    height:62px;
                    text-align: center;
                    padding:20px 10px;
                    margin-top:4px;
                    font-size:12px;
                    color:#999;
                    border-radius: 10px;
                    background:#f6e287;
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;

                }
                :nth-child(3):hover{
                    position: absolute;
                    width:210px;
                    height:214px;
                    overflow: auto;
                    white-space: normal;
                    text-overflow:clip;
                    transition: 1s;

                }
            }
        }
    }
</style>