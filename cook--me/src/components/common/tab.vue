<template>
    <div class="top">
        <div class="head">
            <div class="head-i">
                <img src="../../static/syImg/01/icon-1.png" alt="">
            </div>
            <div id="tt" class="tt">
                <router-link  to="/register">
                    <span>注册</span>
                </router-link>
                <router-link to="/login">
                    <span class="shu">|</span><span>登录</span>
                </router-link>
                <router-link to="/people">
                    <span>个人中心</span>
                </router-link>
                <router-link to="/cai">
                    <span>菜市场</span>
                </router-link>
                <router-link to="/shipu">
                    <span>食谱</span>
                </router-link>
                <router-link to="/" exact >
                    <span>首页</span>
                </router-link>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style lang="less">
    .top{
        width:100%;
        overflow: hidden;
        margin:0 auto;
        background:url(../../static/syImg/01/banner0.1.png) center top no-repeat;
        .head{
            background:rgba(178,170,152,0.1);
            width:100%;
            margin:0 auto;
            overflow: hidden;
            .head-i{
                float:left;
                padding:27px 20px;
                img{
                    width:36px;
                    height:30px;
                }
            }
            .tt{
                width:1200px;
                margin:0 auto;
                span{
                    padding:27px 20px;
                    float:right;
                    color:#999898;
                    font-size:20px;
                }
                .shu{
                    padding:27px 0;
                }
                .router-link-active{
                    span{
                        color:#fda102;
                    }
                    .shu{
                        color:#999898;
                    }
                }

            }
        }
    }


</style>