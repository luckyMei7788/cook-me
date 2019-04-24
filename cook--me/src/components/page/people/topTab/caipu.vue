<template>
    <div class="caipu">
        <ul>
            <li v-for="items in 12">
                <img src="../../../../static/syImg/02/02-yexiao-danchaofan.jpg" alt="">
                <p>菜品名称</p>
                <p>菜品介绍</p>
                <div>点赞<i class="el-icon-star-on"></i></div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "caipu"
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
            height:400px;
            background:saddlebrown;
            margin:20px 20px;
            color:white;
            position: relative;
            img{
                margin-top:10px;
                margin-left:36px;
                width:242px;
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