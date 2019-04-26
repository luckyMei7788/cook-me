<template>
    <div class="foot">
        <div class="logo">
            <div class="logo_left">
                <h1>CookMe</h1>
                <p>
                    不再为美食而苦恼 <br>
                    不再错过美味
                </p>
            </div>
            <div class="logo_img">
                <ul>
                    <li>
                        <img src="../../../static/syImg/01/weibo.jpg" alt="">
                        <p>关注我们微博“CookMe”</p>
                    </li>
                    <li>
                        <img src="../../../static/syImg/01/kongjian.jpg" alt="">
                        <p>关注我们QQ空间“CookMe”</p>
                    </li>
                    <li>
                        <img src="../../../static/syImg/01/erwei.jpg" alt="">
                        <p>扫一扫我们</p>
                    </li>
                </ul>



            </div>

        </div>
        <div class="footer">
            <dl class="friend">
                <dt>友情链接</dt>
                <hr>
                <dd><a target="_blank" href="http://www.meishij.net" title="美食">美食</a></dd>
                <dd><a target="_blank" href="http://tizhi.meishi.cc" title="体质测试">体质测试</a></dd>
                <dd><a target="_blank" href="http://sj.meishi.cc/app.php?to=guanjia" title="伊特">伊特</a></dd>
                <dd><a target="_blank" href="http://www.9ku.com/ " title="9酷音乐网">9酷音乐网</a></dd>
                <dd><a target="_blank" href="http://www.yue365.com" title="365音乐网">365音乐网</a></dd>
                <dd><a target="_blank" href="http://www.mapbar.com/" title="图吧">图吧</a></dd>
                <dd><a target="_blank" href="http://baa.bitauto.com/" title="汽车论坛">汽车论坛</a></dd>
                <dd><a target="_blank" href="http://food.39.net" title="39健康饮食">39健康饮食</a></dd>
                <dd><a target="_blank" href="http://www.qqtn.com/ " title="QQ下载 ">QQ下载</a></dd>
                <dd><a target="_blank" href="http://www.meilele.com/" title="家具网">家具网</a></dd>
                <dd><a target="_blank" href="http://chihe.sohu.com" title="搜狐美食">搜狐美食</a></dd>
                <dd><a target="_blank" href="http://www.meishichina.com" title="美食天下">美食天下</a></dd>
                <dd><a target="_blank" href="http://www.zhms.cn" title="中华美食网">中华美食网</a></dd>
                <dd><a target="_blank" href="http://hefei.8684.cn/" title="合肥公交网">合肥公交网</a></dd>
                <dd><a target="_blank" href="http://www.canyin88.com/" title="红餐微杂志">红餐微杂志</a></dd>
                <dd><a target="_blank" href="http://bj.fang.com" title="北京搜房网">北京搜房网</a></dd>
                <dd><a target="_blank" href="https://www.meishij.net/siteinfo/links.php" title="更多友情链接">更多友情链接</a></dd>

            </dl>

        </div>

        <div class="footer_">
        <ul class="clearfix">
            <hr>
            <li><a target="_blank" href="https://j.meishi.cc/" title="公司简介">公司简介</a></li>
            <li><a target="_blank" href="https://j.meishi.cc/aboutus.html" title="关于我们">关于我们</a></li>
            <li><a target="_blank" href="https://j.meishi.cc/download.html" title="产品下载">产品下载</a></li>
            <li><a target="_blank" href="https://j.meishi.cc/joinus.html" title="加入我们">加入我们</a></li>
            <li><a target="_blank" href="https://j.meishi.cc/contactus.html" title="联系我们">联系我们</a></li>
            <li><a target="_blank" href="https://j.meishi.cc/contactus.html" title="商务合作">商务合作</a></li>
            <li><a target="_blank" href="https://www.meishij.net/siteinfo/user_agreement.php" title="用户协议">用户协议</a></li>
            <li><a target="_blank" href="https://www.meishij.net/siteinfo/privacy.php" title="用户协议">隐私政策</a></li>
            <li><a target="_blank" href="https://www.meishij.net/siteinfo/maps.php" title="网站地图">网站地图</a></li>
            <li><a target="_blank" href="https://www.meishij.net/siteinfo/links.php" title="友情链接">友情链接</a></li>
        </ul>
        <p><a target="_blank" href="https://www.miibeian.gov.cn" class="gray_a">京ICP备14030359号</a><a target="_blank" href="https://beian.gov.cn/" class="gray_a"><img src="https://s1.st.meishij.net/p2/20180208/20180208111357_93713.png" />京公网安备11010802026928</a> Copyright © 2003-2019 MEISHIJ CO.,LTD.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped lang="less">
.foot{
    background:#3F3A32;
    width:100%;
    overflow: hidden;
    margin:0 auto;
    .logo{
        width:990px;
        margin:0 auto;
        height:300px;
        .logo_left{
            padding:40px 0;
            float:left;
            h1{
                color:yellow;
                font-size:45px;
                float:left;
            }
            p{
                padding-left:20px;
                margin-top:20px;
                font-size:18px;
                line-height:30px;
                color:#fff;
                float: left;
            }
        }
        .logo_img{
            padding:40px 0;
            float:right;
            li{
                float:left;
                img{
                    padding-left:30px;
                }
                p{
                    padding-top:20px;
                    margin-left:31px;
                    color:#fff;
                    font-size:14px;
                    text-align:center;
                }
            }


        }
    }
    .footer{
        clear: both;
        color:#e9e9e9;
            .friend{
            width:990px;
            margin:0 auto;
            dt{
                padding:10px 0;
            }
            hr{
                transform: scaleY(0.2)
            }
            dd{
                width:10%;
                text-align: center;
                float:left;
                padding:10px 0;
                a{

                    color:#999898;
                    font-size:13px;
                }

            }
        }
    }


    .footer_{
        width:990px;
        margin:0 auto;
        overflow: hidden;
        color:#e9e9e9;
        .clearfix{
            width:990px;
            hr{
                transform: scaleY(0.2)
            }
            li{
                text-align: center;
                float:left;
                width:10%;
                padding:10px 0;
                a{
                    color:#5a5a5a;
                    font-size:15px;
                }
            }

        }
        p{
            padding-top:20px;
            text-align: center;
            a{
                color:#999898;
                font-size:13px;
            }
        }
    }
}
</style>