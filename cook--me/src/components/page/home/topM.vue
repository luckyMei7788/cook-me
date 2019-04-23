<template>
    <div class="top-m">
        <div class="top-m-h">
            <h1>COOK ME</h1>
            <h1>食幸福，享生活</h1>
            <p>了解 "银耳雪梨羹" 的做法</p>
        </div>
        <div class="top-m-ipt">
            <input type="text" placeholder="搜索食谱/食材">
            <button>搜索</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topM"
    }
</script>

<style scoped lang="less">
    .top-m{
        width:1200px;
        height:630px;
        margin:0 auto;
        background:url(../../../static/syImg/01/banner1.1.png) no-repeat;
        .top-m-h{
            padding:82px 170px;
            h1{
                padding-bottom:24px;
                color:white;
                font-size:58px;
                font-weight: 500;
            }
            p{
                color:#adaba7;
                font-size:22px;
            }
        }
        .top-m-ipt{
            margin:0 170px;
            width:800px;
            height:84px;
            border-radius:15px;
            background:url(../../../static/syImg/01/icon-2.png) no-repeat rgba(255,255,255,.5);
            background-size:44px ;
            background-position:20px 22px;
            input{
                outline: none;
                border:none;
                width:540px;
                margin-left:100px;
                font-size:20px;
                margin-top:30px;
                background: rgba(255,255,255,.0);
            }
            button{
                outline: none;
                background:#d8316c;
                font-size:22px;
                width:110px;
                height:60px;
                color:white;
                border:none;
                cursor:pointer;
                margin-right:20px;
                padding-top:0;
                border-radius:15px;
            }
        }
    }
</style>