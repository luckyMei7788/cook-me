<template>
    <div class="body">
        <!-- header -->
        <!-- logo -->
        <div class="logo-a1">
            <div class="logoA">
            </div>
            <div class="logo-nav">
                <ul class="logo-ul">
                    <li><a href="#">欢迎光临CookMe菜场</a></li>
                    <li><a href="#">我的订单</a></li>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">帮助中心</a></li>
                </ul>
            </div>
            <div class="logo-b">
                <!-- <img src="../../static/shopping/img/菜市场banner01-1.jpg" /> -->
                <div class="logo-b-input">
                    <input type="text"  /><div class="input-div"><a href="#"><img src="../../static/shopping/img/放大镜.png" /></a></div>
                </div>
            </div>
        </div>
        <!-- content -->
        <div class="content">
            <div class="content-goods">
                <div class="goods-photo"><img src="../../static/shopping/img/金针菇.jpg" /></div>
                <div class="goods-info">
                    <p class="goodsName"><b>{{goodsList.productName}}</b></p>
                    <p class="goodsPrice">售&nbsp;&nbsp;价:￥{{goodsList.price}}</p>
                    <p class="goods-g">单&nbsp;&nbsp;位:{{goodsList.unit}}</p>
                    <div class="shopping-num">
                        <p>购买人数</p>
                        <p>{{goodsList.sales}}</p>
                    </div>
                    <div class="shopping-goods">
                        <div class="shopping-goods-header">
                            <p>数量: <el-input-number v-model="num" @change="handleChange" :min="1" label="描述文字"></el-input-number></p>
                            <p>合计:<b>{{goodsList.price * num}}元</b></p>
                        </div>
                        <div class="shopping-goods-btn">
                            <el-button type="success" @click="joinShopping(goodsList.productId)">加入购物车</el-button><el-button @click="order" type="success">立即购买</el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contet-goodsInfo">
                <div class="goodInfo">
                    商品详情
                </div>
                <div class="goodText">{{goodsList.merit}}</div>
            </div>
        </div>

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
        <router-view></router-view>
    </div>
</template>

<script>
    // var bus = new vue();
    export default {
        name: "component-shopping",
        data(){
            return{
                num:1,
                goodsList:[],
                list:[],
                productId:1,
            };
        },
        methods:{
            handleChange(value){
                // console.log(value);
            },
            goodsListA(){//进行获取数据库商品内容
                // var productId = this.productId;
                // this.$axios.post("/lh/sys/user/selectCommodityDetails?productId="+productId,{
                //     headers:{
                //         "content-type":"application/json"
                //     }
                // })
                //测试假数据
                this.$axios.post("http://127.0.0.1/sys/user/selectCommodityDetails",{
                    productId:this.productId,
                })
                    .then(({data})=>{
                        console.log(data);
                        // this.goodsList = data;
                        this.goodsList = data.product;
                        console.log(data);
                    })

            },
            joinShopping(productId){//点击加入购物车
                //判断用户是否登录
                在此处设置跳转到用户注册界面
                if(!localStorage.usMobile){
                    this.$alert('您还没有登录哦!', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$router.push({name:"passwordLogin"});
                        }
                    });

                }else{
                    //提交数据到数据库
                    let shopCarDto = {
                         productId:this.productId,//商品的Id
                         carCount : this.num //商品的数量
                    }
                    // console.log(shopCarDto);
                    // this.$axios.post("/lh/sys/user/shopcar?shopCarDto="+shopCarDto,{
                    //     headers:{
                    //         "content-type":"application/json"
                    //     }
                        //测试假数据
                    this.$axios.post("http://127.0.0.1/sys/user/shopcar",{
                        shopCarDto
                    }).then(({data})=>{
                        //进行判断是否添加成功
                        this.$alert('加入购物车成功!',{
                            confirmButtonText:'去购物页面下单',
                            cancelButtonText:'取消',
                            center:true
                        }).then(()=>{
                            this.$router.push({name:"Shopping"});
                        }).catch(()=>{
                            type:'info'
                        })
                        console.log('aaaa'+data);
                        console.log(data.R.msg);
                    })
                }

            },
            order(){//判断用户是否添加了商品
                this.$axios.post("http://127.0.0.1/sys/user/myshopcar")
                    .then(({data})=>{
                        console.log(data.msg);
                        this.list = data.list;
                        console.log(data.list);
                        if(this.list.length <=0){
                            this.$router.push({name:"greensNullShopping"})
                        }else{
                            this.$router.push({name:"Shopping"})
                        }
                    })
            }
        },
        mounted(){
            this.goodsListA();
        },

    }
</script>

<style lang="less">
    .body{
        background:#ffffff;
    }
    /* logo */
    .logo-a1{
        width:1100px;
        min-height:72px;
        margin:0 auto;
        overflow: hidden;
        .logo-b{
            width:1100px;
            height:442px;
            background:url(../../static/shopping/img/菜市场banner01-1.jpg) no-repeat left -71px;
            margin:0 auto;
            position:relative;
            z-index:2;
            .logo-b-input{
                width:506px;
                height:71px;
                position: relative;
                top: 352px;
                left: 300px;
                input{
                    width:392px;
                    height:62px;
                    margin-top:-20px;
                    background:#ffffff;
                    border:2px solid #1e7902;
                    margin-left:2px;
                    font-size:21px;
                    opacity:0.5;
                }
                .input-div{
                    width: 86px;
                    height: 63px;
                    border:2px solid #1e7902;
                    border-left:none;
                    float: right;
                    background:#ffffff;
                    opacity:0.5;
                    margin-top: -20px;
                    margin-right: 26px;
                    img{
                        width: 47px;
                        height: 49px;
                        margin-left: 21px;
                        margin-top: 9px;
                    }
                }
            }
        }
    }
    .logo{
        width:1100px;
        height:72px;
        /* background:url(../img/菜市场banner01-1.jpg) no-repeat ; */
        overflow:hidden;
        opacity:0.5;
    }
    /* content */
    .content{
        width:1100px;
        min-height:907px;
        margin:0 auto;
        background:#f6f6f6;
        .content-goods{
            width:960px;
            height:402px;
            margin:0 auto;
            margin-top:60px;
            .goods-photo{
                width:400px;
                height:397px;
                float:left;
                border:2px solid #1e7902;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .goods-info{
                width:531px;
                height:400px;
                float:right;
                p{
                    margin-top:30px;
                }
                .goodsName b{
                    font-size:27px;
                }
                .goodsPrice{
                    font-size:21px;
                    width:326px;
                    height:32px;
                }
                .goods-g{
                    font-size:21px;
                    width:326px;
                    height:32px;
                }
                .shopping-num{
                    width:136px;
                    height:106px;
                    margin-top:-106px;
                    margin-right:42px;
                    text-align:center;
                    float:right;
                    p{
                        font-size:21px;
                    }
                    p:nth-child(2){
                        margin-top:17px;
                    }
                }
                .shopping-goods{
                    width:526px;
                    height:126px;
                    margin-top:52px;
                    background:#ffffff;
                    .shopping-goods-header{
                        width:526px;
                        height:56px;
                        .el-input-number .el-input__inner{
                            -webkit-appearance: none;
                            background: #ffffff;
                            color: #000000;
                            padding-left: 0;
                            padding-right: 0;
                            text-align: center;
                            margin-top: 1px;
                            margin-left: 40px;
                        }
                    }
                    .shopping-goods-header p{
                        font-size:20px;
                        float:left;
                        margin-top:7px;
                        input{
                            border:none;
                        }
                    }
                    .shopping-goods-header p:nth-child(2){
                        float:right;
                        margin-right:116px;
                        margin-top: 12px;
                        b{
                            color:#fa8a05;
                        }
                    }
                    .shopping-goods-btn{
                        width: 362px;
                        height: 46px;
                        margin-top: 17px;
                        margin-left: 81px;
                        button{
                            margin-right:56px;
                            img{
                                position: relative;
                                top: 3px;
                                right: 9px;
                            }
                        }
                    }
                }
            }
        }
        .contet-goodsInfo{
            width:956px;
            min-height:397px;
            background:#ffffff;
            border:1px solid #1e7902;
            margin:30px auto;
            .goodInfo{
                width:956px;
                height:52px;
                color:#ffffff;
                background:#1e7902;
                font-size:37px;
                text-align:center;
            }
            .goodText{
                text-align:left;
            }
        }
    }
</style>