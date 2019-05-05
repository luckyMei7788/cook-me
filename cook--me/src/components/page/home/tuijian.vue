<template>
    <div class="tuijian">
        <h1>CookMe · 今日推荐</h1>
        <ul>
            <li v-for="(items,index) in bookList">
                <router-link :to="{path:'/menuDetail',query:{bookId:items.bookId}}">
                    <img :src="JavaUrl+items.bookImage" alt="">
                    <p class="p1">-&nbsp;{{items.bookName}}&nbsp;-</p>
                    <p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;{{items.bookDetails}}</p>
                </router-link>
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
                bookId:1,
                JavaUrl:"http://39.106.68.255/"
            }
        },
        methods:{
            tuiJian(){
                this.$axios.post("/cookme/sys/book/selectByBest").then(({data})=>{
                    this.bookList=data.bestType;
                    this.bookId=data.bestType.bookId;
                    console.log(data);
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
        margin:50px auto;
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
                .p1{
                    text-align: center;
                    width:210px;
                    height:30px;
                    color:brown;
                    font-size:15px;
                }
                .p2{
                    height:62px;
                    text-align:left;
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
                .p2:hover{
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