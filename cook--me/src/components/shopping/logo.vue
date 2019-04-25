<template>
    <div>
        <!-- header -->
        <div class="header">
            <div class="header-nav">
                <ul class="header-nav-ul">
                    <li><a href="#">欢迎光临CookMe菜场</a></li>
                    <li><a href="#">我的订单</a></li>
                    <li><a class="a1" href="#">关于我们</a></li>
                    <li><a href="#">帮助中心</a></li>
                </ul>
            </div>
        </div>
        <!-- logo -->
        <div class="logo-a">
            <div class="logoA">
                <!-- <img src="../../static/shopping/img/菜市场banner01.jpg" /> -->
            </div>
            <div class="logo-nav">
                <ul class="logo-ul">
                    <li><a href="#">所有产品分类</a></li>
                    <li><a href="#">首页</a></li>
                    <li><a href="#">系统免费版申请</a></li>
                    <li><a href="#">系统落地版申请</a></li>
                    <li><a href="#">支付系统免费申请</a></li>
                </ul>
            </div>
        </div>
        <!-- content -->
        <!-- footer -->
        <div class="footer">
            <div class="footer-header">
                <ul class="footer-header-ul">
                    <li><div class="r"></div><b>多</b>&nbsp;&nbsp;<a href="#">种类齐全&nbsp;&nbsp;轻松购物</a></li>
                    <li><div class="r"></div><b>快</b>&nbsp;&nbsp;<a href="#">多仓直发&nbsp;&nbsp;极速配送</a></li>
                    <li><div class="r"></div><b>鲜</b>&nbsp;&nbsp;<a href="#">当天采摘&nbsp;&nbsp;时刻保险</a></li>
                    <li><div class="r"></div><b>省</b>&nbsp;&nbsp;<a href="#">天天低价&nbsp;&nbsp;畅选无忧</a></li>
                </ul>
            </div>
            <div class="footer-footer">
                <div class="footer-content">
                    <ul class="footer-content-ul">
                        <li><a href="#">关于我们</a></li>
                        <li>|</li>
                        <li><a href="#">联系我们</a></li>
                        <li>|</li>
                        <li><a href="#">帮助中心</a></li>
                    </ul>
                    <p>COPYRIGHT&copy;&nbsp;2017,&nbsp;&nbsp;版权所有ICP备88888888号</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "public"
    }
</script>

<style lang="less">
    *{
        margin:0;
        padding:0;
    }
    li{
        list-style:none;
    }
    a{
        text-decoration:none;
    }
    body{
        width:100%;
        height:700px;
    }
    /* logo */
    .logo-a{
        width:1100px;
        height:72px;
        margin:0 auto;
        overflow: hidden;
    }
    .logoA{
        width:1100px;
        height:72px;
        background:url(../../static/shopping/img/菜市场banner01-1.jpg) no-repeat ;
        overflow:hidden;
        opacity:0.5;
    }
    .logo-nav{
        width:1100px;
        position:relative;
        top:-50px;
        left:50px;
        z-index:1;
        .logo-ul li{
            float:left;
            margin-left:66px;
            .logo-nav .logo-ul li a:nth-child(1) {
                position: relative;
                left: -74px;
            }
            a{
                font-size:20px;
                color:#1e7902;
                margin-left:27px;
            }
        }
    }
    /* footer */
    .footer{
        width:1100px;
        height:106px;
        margin:0 auto;
        .footer-header{
            width:1100px;
            height:56px;
            .footer-header-ul{
                width:962px;
                height:56px;
                margin:0 126px;
                line-height:2;
                li{
                    float:left;
                    margin-right:26px;
                    .r{
                        width:10px;
                        height:10px;
                        background:#1e7902;
                        border-radius: 50%;
                        float:left;
                        margin-top: 16px;
                        margin-right: 2px;
                    }
                    b{
                        font-size:21px;
                        color:#1e7902;
                    }
                    a{
                        font-size:16px;
                        color:#000000;
                        font-weight: bold;
                    }
                }
            }
        }
    }
    .footer-footer{
        width:1100px;
        height:52px;
        background:#cbddc5;
        .footer-content{
            width: 600px;
            height:52px;
            margin:0 auto;
            text-align:center;
            .footer-content-ul{
                margin-left: 216px;
                li{
                    float:left;
                    margin-right:2px;
                    color:#1e7902;
                    a{
                        font-size:13px;
                        color:#1e7902;
                    }
                }
            }
            p{
                font-size:13px;
                color:#1e7902;
                clear:both;
            }
        }
    }
</style>