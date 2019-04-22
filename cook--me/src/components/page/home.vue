<template>
    <div class="top-h">
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
        <div class="middle">
            🚩今日早餐推荐：营养又健康，做法超简单的早餐🍳
        </div>
        <lunbo></lunbo>
        <router-view></router-view>
        <div class="siyue">
            🥣四月，补肾调阴阳，不负好时光。
        </div>
        <div class="xxka">
            <ul>
                <li class="active2">水果</li>
                <li>蔬菜</li>
                <li>五谷</li>
                <li>生鲜</li>
            </ul>
            <ol>
                <li><img src="../../static/syImg/02/02-wancan-banlihongshaorou.jpg" alt=""></li>
                <li><img src="../../static/syImg/02/02-wancan-banlihongshaorou.jpg" alt=""></li>
                <li><img src="../../static/syImg/02/02-wancan-banlihongshaorou.jpg" alt=""></li>
                <li><img src="../../static/syImg/02/02-wancan-banlihongshaorou.jpg" alt=""></li>
                <li><img src="../../static/syImg/02/02-wancan-banlihongshaorou.jpg" alt=""></li>
                <li><img src="../../static/syImg/02/02-wancan-banlihongshaorou.jpg" alt=""></li>
                <li><img src="../../static/syImg/02/02-wancan-banlihongshaorou.jpg" alt=""></li>
                <li><img src="../../static/syImg/02/02-wancan-banlihongshaorou.jpg" alt=""></li>
            </ol>
        </div>
        <div class="middle-chu">
            <div class="middle-chu-down">
                <img src="../../static/syImg/cake.jpg" alt="">
            </div>
            <div class="paihang">
                <ul>
                    <li>
                        <div><img src="../../static/syImg/04/tx01.jpg" alt=""></div>
                        <div><span>Tony</span></div>
                        <div><p>820个关注</p></div>
                        <div><button>更多</button></div>
                    </li>
                    <li>
                        <div><img src="../../static/syImg/04/tx01.jpg" alt=""></div>
                        <div><span>Tony</span></div>
                        <div><p>820个关注</p></div>
                        <div><button>更多</button></div>
                    </li>
                    <li>
                        <div><img src="../../static/syImg/04/tx01.jpg" alt=""></div>
                        <div><span>Tony</span></div>
                        <div><p>820个关注</p></div>
                        <div><button>更多</button></div>
                    </li>
                    <li>
                        <div><img src="../../static/syImg/04/tx01.jpg" alt=""></div>
                        <div><span>Tony</span></div>
                        <div><p>820个关注</p></div>
                        <div><button>更多</button></div>
                    </li>
                    <li>
                        <div><img src="../../static/syImg/04/tx01.jpg" alt=""></div>
                        <div><span>Tony</span></div>
                        <div><p>820个关注</p></div>
                        <div><button>更多</button></div>
                    </li>
                </ul>
                <div class="middle-huan">
                    <button>换一批</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import
    export default {
        name: "home"
    }
</script>

<style lang="less">
@import "../../style/public.less";
    .top-h{
        width:100%;
        height:630px;
        margin:0 auto;
        background:url(../../static/syImg/01/banner0.1.png) center no-repeat;
        .top-m{
            width:1200px;
            height:630px;
            margin:0 auto;
            background:url(../../static/syImg/01/banner1.1.png) no-repeat;
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
                 margin:-32px 170px;
                 width:800px;
                 height:84px;
                 border-radius:15px;
                 background:url(../../static/syImg/01/icon-2.png) no-repeat rgba(255,255,255,.5);
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
                    margin-right:20px;
                    padding-top:0;
                    border-radius:15px;
                }
             }
        }
        .middle{
            width:100%;
            margin:0 auto;
            background:#fbfaf9;
            text-align: center;
            padding:52px 0;
            font-size:22px;
        }

        .siyue{
            width:100%;
            margin:0 auto;
            font-size:22px;
            text-align:center;
            padding:30px 0;
            background:#fcf7e6;
        }
        .xxka{
            width:1200px;
            height:270px;
            margin:50px auto;
            position:relative;
            ul li{
                float:left;
                border:1px solid #d8316c;
                border-radius:10px;
                text-align: center;
                line-height:36px;
                font-size:16px;
                color:#5a5a5a;
                width:64px;
                height:36px;
            }
            ol{
                position:absolute;
                top:80px;
                left:0;
                li{
                    float:left;
                    img{
                        width:150px;
                        height:150px;

                    }
                }
            }
        }
        .middle-chu{
            width:1200px;
            margin:0 auto;
            height:468px;
            .middle-chu-down {
                img {
                    width: 682px;
                    height: 375px;
                    float: left;
                }
            }
            .paihang{
                float:right;
                li {
                    div{
                        float:left;
                        padding:14px 30px;
                        button{
                            background:#d8316c;
                            font-size:18px;
                            width:80px;
                            height:40px;
                            color:white;
                            border:none;
                            border-radius:10px;
                        }
                        img{
                            width:35px;
                            border-radius:50%;
                        }
                    }
                }
            }
            .middle-huan {
                margin-left:210px;
                button{
                    text-align:center;
                    background:#f8bf1c;
                    color:white;
                    border:none;
                    width:70px;
                    height:30px;
                    border-radius:20px;
                }
            }
        }
    }
</style>