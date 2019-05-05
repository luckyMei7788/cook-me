<template>
    <div class="caipu">
        <ul>
            <li v-for="(items,index) in bookList" >
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
        name: "caipu",
        data(){
            return{
                usId:1,
                bookList:[],
                JavaUrl:"http://39.106.68.255/"
            }

        },
        methods:{
            caiPu(){
                this.$axios.get("/cookme/sys/user/selectMyHome").then(({data})=>{
                    this.bookList=data.cookbook1;
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