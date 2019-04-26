<template>
    <div>
        <div>
             <div class="toplsm">
                <ul>
                    <li>
                        <a href="#">我的美食属性</a>
                    </li>
                    <li>
                        <a href="#">家常菜谱</a>
                    </li>
                    <li>
                        <a href="#">中华菜系</a>
                    </li>
                    <li>
                        <a href="#">各地小吃</a>
                    </li>
                    <li>
                        <a href="#">外国菜谱</a>
                    </li>
                    <li>
                        <a href="#">烘焙</a>
                    </li>
                    <li>
                        <a href="#">厨房百科</a>
                    </li>
                    <li>
                        <a href="#">食材百科</a>
                    </li>
                </ul>
            </div>
            <div class="top-t">
                <dl>
                    <dt>家常菜谱</dt>
                    <dd>家常菜</dd>
                    <dd>私家菜</dd>
                    <dd>海鲜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                    <dd>私家菜</dd>
                    <dd>海鲜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                </dl>
                <dl>
                    <dt>每日三餐</dt>
                    <dd>家常菜</dd>
                    <dd>私家菜</dd>
                    <dd>海鲜</dd>
                    <dd>家常菜</dd>
                </dl>
                <dl>
                    <dt>人群</dt>
                    <dd>家常菜</dd>
                    <dd>私家菜</dd>
                    <dd>海鲜</dd>
                    <dd>家常菜</dd>
                </dl>
                <dl>
                    <dt>功效</dt>
                    <dd>家常菜</dd>
                    <dd>私家菜</dd>
                    <dd>海鲜</dd>
                    <dd>家常菜</dd>
                </dl>
                
            </div>

        </div>
        <div class="center">
            印象中的味道
            <div class="center-r">
                <span>最新</span>
                <span></span>
                <span>最热</span>
            </div>
            
        </div>

        <div class="main">
            <div class="main-l">
                <!--Tabs-->
                <el-tabs type="border-card">
                    <el-tab-pane label="普通筛选">

                        <el-row class="tac">
                            <el-col :span="12">
                                <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose">
                                    <el-submenu index="1">
                                        <template slot="title">
                                        <span>选择难度</span>
                                        </template>
                                        <el-menu-item index="1-1">新手尝试</el-menu-item>
                                        <el-menu-item index="1-2">初级入门</el-menu-item>
                                        <el-menu-item index="1-3">初中水平</el-menu-item>
                                        <el-menu-item index="1-2">中级掌厨</el-menu-item>
                                    </el-submenu>

                                    <el-submenu index="2">
                                        <template slot="title">
                                        <span>选择工艺</span>
                                        </template>
                                        <el-menu-item index="1-1">新手尝试</el-menu-item>
                                        <el-menu-item index="1-2">初级入门</el-menu-item>
                                        <el-menu-item index="1-3">初中水平</el-menu-item>
                                        <el-menu-item index="1-2">中级掌厨</el-menu-item>
                                    </el-submenu>
                                    <el-submenu index="3">
                                        <template slot="title">
                                        <span>选择口味</span>
                                        </template>
                                        <el-menu-item index="1-1">新手尝试</el-menu-item>
                                        <el-menu-item index="1-2">初级入门</el-menu-item>
                                        <el-menu-item index="1-3">初中水平</el-menu-item>
                                        <el-menu-item index="1-2">中级掌厨</el-menu-item>
                                    </el-submenu>
                                
                                
                                
                                </el-menu>
                            </el-col>
                        </el-row>

                    </el-tab-pane>

                     <el-tab-pane label="食材筛选">
                        <el-input v-model="input" placeholder="请输入你想查找的食材">
                                
                        </el-input>
                        <dl class="aslps">
                            <dt>按数量排序</dt>
                            <dd>
                                <a href="#">
                                    <span>应季</span>
                                    <b>苹果</b>
                                    <em>30</em>
                                </a>
                            </dd>
                            <dd>
                                <a href="#">
                                    <span>应季</span>
                                    <b>苹果</b>
                                    <em>30</em>
                                </a>
                            </dd>
                            <dd>
                                <a href="#">
                                    <span>应季</span>
                                    <b>苹果</b>
                                    <em>30</em>
                                </a>
                            </dd>
                            <dd>
                                <a href="#">
                                    <span>应季</span>
                                    <b>苹果</b>
                                    <em>30</em>
                                </a>
                            </dd>
                            <dd>
                                <a href="#">
                                    <span>应季</span>
                                    <b>苹果</b>
                                    <em>30</em>
                                </a>
                            </dd>
                            <dd>
                                <a href="#">
                                    <span>应季</span>
                                    <b>苹果</b>
                                    <em>30</em>
                                </a>
                            </dd>
                            <dd>
                                <a href="#">
                                    <span>应季</span>
                                    <b>苹果</b>
                                    <em>30</em>
                                </a>
                            </dd>
                            <dd>
                                <a href="#">
                                    <span>应季</span>
                                    <b>苹果</b>
                                    <em>30</em>
                                </a>
                            </dd>
                            <dd>
                                <a href="#">
                                    <span>应季</span>
                                    <b>苹果</b>
                                    <em>30</em>
                                </a>
                            </dd>
                            <dd>
                                <a href="#">
                                    <span>应季</span>
                                    <b>苹果</b>
                                    <em>30</em>
                                </a>
                            </dd>
                        </dl>


                     </el-tab-pane>
                </el-tabs>

              
                <!--清除浮动-->
                <div class="main-clear">

                </div>

                <div class="ad">
                    <div class="block">
                        <el-carousel height="260px" width="225px">
                            <el-carousel-item v-for="(img,index) in imgList" :key="index">
                                <img v-bind:src="img.url" class="pic">
                            </el-carousel-item>
                        </el-carousel>
                </div>
                    
                
                </div>
                
                
 
                
            </div>
            <div class="main-r">
                
                    <ul>
                        <li>
                            <img src="../../static/menu/pic1.jpg" alt="">
                            <p class="main-r-bot1">
                                <b>韩国部队锅</b>
                                <span>6000人气</span>
                                <em>随心所欲</em>
                            </p>
                            <p class="main-r-bot2">   
                                <i>五步/30分钟</i>
                                <i>微热/甜味</i>
                            </p> 
                        </li>
                        <li>
                            <img src="../../static/menu/pic2.jpg" alt="">
                            <p class="main-r-bot1">
                                <b>韩国部队锅</b>
                                <span>6000人气</span>
                                <em>随心所欲</em>
                            </p>
                            <p class="main-r-bot2">   
                                <i>五步/30分钟</i>
                                <i>微热/甜味</i>
                            </p> 
                        </li>
                        <li>
                            <img src="../../static/menu/pic1.jpg" alt="">
                            <p class="main-r-bot1">
                                <b>韩国部队锅</b>
                                <span>6000人气</span>
                                <em>随心所欲</em>
                            </p>
                            <p class="main-r-bot2">   
                                <i>五步/30分钟</i>
                                <i>微热/甜味</i>
                            </p> 
                        </li>
                        <li>
                            <img src="../../static/menu/pic8.jpg" alt="">
                            <p class="main-r-bot1">
                                <b>韩国部队锅</b>
                                <span>6000人气</span>
                                <em>随心所欲</em>
                            </p>
                            <p class="main-r-bot2">   
                                <i>五步/30分钟</i>
                                <i>微热/甜味</i>
                            </p> 
                        </li>
                        <li>
                            <img src="../../static/menu/pic2.jpg" alt="">
                            <p class="main-r-bot1">
                                <b>韩国部队锅</b>
                                <span>6000人气</span>
                                <em>随心所欲</em>
                            </p>
                            <p class="main-r-bot2">   
                                <i>五步/30分钟</i>
                                <i>微热/甜味</i>
                            </p> 
                        </li>
                        <li>
                            <img src="../../static/menu/pic7.jpg" alt="">
                            <p class="main-r-bot1">
                                <b>韩国部队锅</b>
                                <span>6000人气</span>
                                <em>随心所欲</em>
                            </p>
                            <p class="main-r-bot2">   
                                <i>五步/30分钟</i>
                                <i>微热/甜味</i>
                            </p> 
                        </li>
                        <li>
                            <img src="../../static/menu/pic1.jpg" alt="">
                            <p class="main-r-bot1">
                                <b>韩国部队锅</b>
                                <span>6000人气</span>
                                <em>随心所欲</em>
                            </p>
                            <p class="main-r-bot2">   
                                <i>五步/30分钟</i>
                                <i>微热/甜味</i>
                            </p> 
                        </li>
                        <li>
                            <img src="../../static/menu/pic7.jpg" alt="">
                            <p class="main-r-bot1">
                                <b>韩国部队锅</b>
                                <span>6000人气</span>
                                <em>随心所欲</em>
                            </p>
                            <p class="main-r-bot2">   
                                <i>五步/30分钟</i>
                                <i>微热/甜味</i>
                            </p> 
                        </li>
                        <li>
                            <img src="../../static/menu/pic1.jpg" alt="">
                            <p class="main-r-bot1">
                                <b>韩国部队锅</b>
                                <span>6000人气</span>
                                <em>随心所欲</em>
                            </p>
                            <p class="main-r-bot2">   
                                <i>五步/30分钟</i>
                                <i>微热/甜味</i>
                            </p> 
                        </li>
                        <li>
                            <img src="../../static/menu/pic1.jpg" alt="">
                            <p class="main-r-bot1">
                                <b>韩国部队锅</b>
                                <span>6000人气</span>
                                <em>随心所欲</em>
                            </p>
                            <p class="main-r-bot2">   
                                <i>五步/30分钟</i>
                                <i>微热/甜味</i>
                            </p> 
                        </li>
                        <li>
                            <img src="../../static/menu/pic8.jpg" alt="">
                            <p class="main-r-bot1">
                                <b>韩国部队锅</b>
                                <span>6000人气</span>
                                <em>随心所欲</em>
                            </p>
                            <p class="main-r-bot2">   
                                <i>五步/30分钟</i>
                                <i>微热/甜味</i>
                            </p> 
                        </li>
                        <li>
                            <img src="../../static/menu/pic1.jpg" alt="">
                            <p class="main-r-bot1">
                                <b>韩国部队锅</b>
                                <span>6000人气</span>
                                <em>随心所欲</em>
                            </p>
                            <p class="main-r-bot2">   
                                <i>五步/30分钟</i>
                                <i>微热/甜味</i>
                            </p> 
                        </li>
                        
                        
                    </ul>
                    <div class="pagelsm"> 
                        &nbsp;
                        <!--分页-->
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                        </el-pagination>
                    </div>
                  
               
            </div>
            

        </div>
        <div class="main-clear">

        </div>
       
       

        <foot></foot>
    </div>
</template>

<script>
    import foot from "./home/foot.vue"

    export default {
        name: "shipu",
        data(){
            return {
                input:'',
                imgList:[
                    {url:require('../../static/menu/pic6.jpg')},
                    {url:require('../../static/menu/pic4.jpg')},
                    {url:require('../../static/menu/pic5.jpg')},
                    {url:require('../../static/menu/pic3.jpg')}
                ]
            }
        },
        components:{
            foot
        }
    }
</script>

<style lang="less">
a{
    color:#333;
}
.toplsm{
    height: 50px;
    width: 990px;
    background: rgba(255,255,255,0.5);
    margin:0 auto;
    margin-top:20px;
    ul{
        li{float:left;
            height: 50px;
            line-height: 50px;
            color: #333;
            font-size: 14px;
            font-weight: bold;
           
            a{
                color: #333;
                display: inline-block;
                vertical-align: top;
                height: 50px;
                padding: 0px 24px;
            }
             a:hover{background:#fff;color:red;}
        }
    }
}
/*二级标题*/
.top-t{
    width: 990px;
    margin:0 auto;
    background:#fff;
    overflow: hidden;
    dl{padding: 10px 16px 14px;
    display: inline-block;
        dt{
            display: Block;
            height: 42px;
            line-height: 42px;
            font-size: 24px;
            color: #333;
        }
        dd{ float: left;
            padding: 0px 8px;
            display: inline-block;
            vertical-align: top;
            height: 28px;
            line-height: 28px;
            color: #666;
            cursor: pointer;
        }
        dd:hover{background:red;color:#fff;}
    }
}
.center{
    width: 990px;
    margin:0 auto;
    height: 120px;
    line-height: 120px;
    font-size: 24px;
    color: #222;
    text-align: center;
    display: block;
    .center-r{
        float:right;
        span{
            font-size:14px; color:#FF3232;
            display:block;float:left;
        }
        span:nth-of-type(2){
        width:1px;height:14px;background:#333;
        margin:54px 8px;
        }
        
    }
}

.main{width: 990px;
    margin:0 auto;
   
    .main-l{
        width:232px;float:left;
        // Tabs
        .el-tabs__nav-scroll{
            width:232px;
            .el-tabs__nav{
                width:232px;
            }
            .el-tabs__item{
                width:118px;
                text-align:center;
                .is-active{
                    color:red;
                }
                
            }
            // .is-active{
            //     color:red;
            // }
        }
        .el-tabs__content{
            padding:0;
        }
        //导航菜单
        .el-menu{
            border:0;
        }
        .el-submenu__title{
            width:232px;
            border-bottom:solid 1px #e6e6e6;
            
        }
        .el-menu--inline{
            width:232px;
            padding:5px;
        }
        .el-menu-item{
            float: left;
            margin: 5px;
            padding:0 !important;
            display: block;
            height: 30px;
            border: 1px solid #eee;
            background: #fff;
            color: #333;
            line-height: 30px;
            font-size: 12px;
            text-align: center;
            overflow: hidden;
            width: 100px;
            //
            min-width:0px;
            
        }
       .is-active{
            color:#ff3232;
        }
       

        .main-l-m{
            height: 50px;
            background: #f5f5f5;
            .main-l-mm{
                float: left;
                width: 116px;
                position: relative;
                a{
                    display: block;
                    color: #333;
                    font-weight: bold;
                    text-align: center;
                    font-size: 14px;
                    line-height: 50px;
                }
            }
            .main-l-mm:hover{background:#fff;}
            .main-l-mm:hover a{color:red;}
        }
        //输入框
        .el-input__inner{
                height: 30px;
                padding: 4px;
                line-height: 20px;
                width:200px;
                //background: none;
                color: #999;
                margin-left:15px;
                margin-top:10px;
            }
       
        .aslps{
            dt{
                    display: block;
                    height: 50px;
                    line-height: 50px;
                    color: #333;
                    text-indent: 14px;
                    font-size: 14px;
                    background:#fff;
                    border-bottom: 1px solid #ddd;
                    float: left;
                    width: 232px;
            }
            dd{
                padding: 14px 0px 6px 14px;
                width: 232px;
                background: #fafafa;
                border-bottom: 1px solid #ddd;
                float: left;
                a{
                    float: left;
                    margin: 0px 8px 8px 0px;
                    display: block;
                    height: 30px;
                    width: 202px;
                    border: 1px solid #eee;
                    background: #fff;
                    color: #333;
                    line-height: 30px;
                    font-size: 12px;
                    text-align: center;
                    overflow: hidden;
                    position: relative;
                    span{
                        position: absolute;
                        height: 20px;
                        background: #60a531;
                        color: #e90808;
                        line-height: 20px;
                        color: #fff;
                        padding: 0px 5px;
                        display: inline-block;
                        vertical-align: top;
                        left: 5px;
                        top: 5px;
                    }
                    b{
                        font-weight: bold;
                        display: inline-block;
                        vertical-align: top;
                        float: left;
                        padding-left: 60px;
                    }
                    em{
                        font-style:normal;
                        display: inline-block;
                        vertical-align: top;
                        float: right;
                        padding-right: 20px;
                        color: #999;
                    }
                }
            }
        }
        .ad{
            margin-top:30px;
        }
        .el-carousel__button{
            width:10px;height:10px;border-radius:50%;
        }
        .pic{width:232px;height:100%;}
       
    }
    .main-r{
        width:756px;float:right;
        ul{
            li{
                float:left;margin-left:20px;margin-bottom:16px;height:342px;
                overflow:hidden;
                text-align:left;
                img{display:block;}
                img:hover{background:rgb(240, 234, 234);}
                img:hover .main-r-bot2{display:block;}
                .main-r-bot1{
                    b{display: block;
                        height: 24px;
                        line-height: 24px;
                        padding: 0 14px;margin-top:12px;
                        font-size: 14px;
                        color: #333;
                        font-weight: bold;
                    }
                    span{display: block;
                        height: 26px;
                        line-height: 26px;
                        padding: 0px 14px 0px;
                        font-size: 12px;
                        color: #999;
                    }
                    em{ display: block;
                        height: 23px;
                        line-height: 23px;
                        padding: 0px 14px 0px;
                        font-size: 12px;
                        color: #ff3232;
                        font-style: normal;
                    }
                }
                .main-r-bot2{
                    display:none;
                    i{ display: block;
                        height: 23px;
                        line-height: 23px;
                        padding: 20px 0 0 20px;
                        font-size: 12px;
                        color: #999;
                        font-style: normal;
                    }
                }
                
            }
            li:hover{background:rgb(240, 234, 234);}
            li:hover .main-r-bot2{display:block;}
            li:hover .main-r-bot1{display:none;}
        }
        .pagelsm{padding-bottom:40px;text-align:right;
            .btn-prev{
                    height:40px;width:40px;text-align: center;
                    line-height: 40px;
            }
            .btn-next{
                    height:40px;width:40px;text-align: center;
                    line-height: 40px;
            }
            .el-pager{
                
                
                .number{
                    height:40px;width:40px;text-align: center;
                    line-height: 40px;
                }
                .active{
                    height:40px;
                }
                .el-icon-more{
                    height:40px;width:40px;text-align: center;
                    line-height: 40px;
                
                }
                .more:hover{
                   height:40px;width:40px;text-align: center;
                    line-height: 40px;
                }
                
            }
        }
    }
    
}
.main-clear{clear:both;}

</style>