<template>
    <div class="body">
        <!-- logo -->
        <div class="logo-a">
            <div class="logoA">
                <!-- <img src="../img/菜市场banner01.jpg" /> -->
            </div>
            <div class="logo-nav">
                <ul class="logo-ul">
                    <li><a href="#">欢迎光临CookMe菜场</a></li>
                    <li><a href="#">我的订单</a></li>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">帮助中心</a></li>
                </ul>
            </div>
        </div>
        <!-- content -->
        <div class="Order-content">
            <div class="content-info">
                <div class="info-logo">
                    <div class="logo-a">logo</div>
                    <p @click="a">确认订单</p>
                </div>
                <div class="info-content">
                    <p>收货地址</p>
                    <div class="info-content-select">
                        <div class="address">
                            <a href="javascript:;"><img src="../../static/shopping/img/添加.png" /></a>
                            <p>添加新地址</p>
                        </div>
                        <div class="info">
                            <div class="info-header">
                                <b class="info-b">商品</b>
                            </div>
                            <div class="info-goods">
                                <ol>
                                    <li>名称</li>
                                    <li>单价</li>
                                    <li>数量</li>
                                    <li>合计</li>
                                </ol>
                            </div>
                            <div class="goodsInfo" v-for="(item,index) in list">
                                <div class="info-goods-a">
                                    <ul>
                                        <li>{{item.productName}}</li>
                                        <li>{{item.price}}</li>
                                        <li>{{item.carCount}}</li>
                                        <li>{{item.price*item.carCount}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sumPrice">
                                <p class="sum">{{sumPrice}}元</p>
                            </div>
                            <div class="goodsA">
                                <div class="goodsA-sum">
                                    <p>商品件数:&nbsp;&nbsp;{{indexA}}</p>
                                    <p>商品总价:&nbsp;&nbsp;2.00</p>
                                    <p>应付金额:&nbsp;&nbsp;<b>2.00</b></p>
                                </div>
                                <button @click="zhifu">去结算</button>
                                <button @click="breakShopping">返回购物车</button>
                            </div>
                        </div>
                    </div>
                </div>
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
    </div>
</template>

<script>
    export default {
        name: "confirmAnOrder",
        data(){
            return {
                // list:JSON.parse(this.$route.query.listInfo),
                list:[],
                indexA:"",
            }
        },
        // created(){
        //   this.getQuery();
        // },
        methods:{
            // async getQuery(){
            //     var listInfo = this.$route.query.listInfo;
            //     console.log("111111"+listInfo);
            //     this.list = JSON.parse(listInfo);
            // },
            a(){
                console.log(this.list);
            },
            getGoodsList(){
                this.$axios.post("/cookme/sys/user/myshopcar")
                    .then(({data})=>{
                        this.list = data;
                    })
            },
            breakShopping(){
                this.$router.push({name:"Shopping"});
            },
            zhifu(){
                if(this.list.length <=0){
                    alert("你还没有商品哦");
                }else{
                    this.$router.push({name:"zhifubao"});
                }
            },
        },
        mounted(){
            this.getGoodsList();
            this.indexA = this.list.length+1;
        },
        computed:{
            sumPrice(){//合计
                var sum = 0;
                //遍历list并判断isChecked是否为true
                this.list.forEach(v=>{
                    if(v.isChecked){
                        sum += v.price*v.carCount;
                    }
                })
                return sum;
            },
        },
    }
</script>

<style lang="less">
    .body{
        background:#ffffff;
    }
    /*content*/
    .Order-content{
        width:1100px;
        min-height:926px;
        background:#f6f6f6;
        margin:0 auto;
        .content-info{
            width:779px;
            min-height:902px;
            margin:0 auto;
            .info-logo{
                width:779px;
                height:101px;
                position: relative;
                top: 12px;
                .logo-a{
                    width:100px;
                    height:100px;
                    background:#e5e5e5;
                    text-align:center;
                    line-height:6;
                    float:left;
                }
                p{
                    float:left;
                    margin-top:39px;
                    margin-left:51px;
                }
            }
            .info-content{
                width:779px;
                min-height:752px;
                border:1px solid #cccccc;
                background:#ffffff;
                margin-top:26px;
                p{
                    font-size:20px;
                    margin-top:20px;
                    margin-left:20px;
                }
                .info-content-select{
                    width:503px;
                    min-height:636px;
                    margin-top:26px;
                    margin-left:42px;
                    .address{
                        width:182px;
                        height:182px;
                        border:2px solid #cccccc;
                        text-align:center;
                        line-height:2;
                        img{
                            width:66px;
                            height:66px;
                            margin-top:32px;
                        }
                        p{
                            margin-left:12px;
                            font-size:20px;
                        }
                    }
                    .info{
                        width:503px;
                        min-height:437px;
                        margin-top:17px;
                        border:1px solid #cccccc;
                        line-height:3;
                        .info-header{
                            width:503px;
                            height:39px;
                            font-size:17px;
                            border-bottom:1px solid #cccccc;
                            color:#ffffff;
                            background:#4a9435;
                            margin-left: -2px;
                            .info-b{
                                margin-top:0;
                                position:relative;
                                left:12px;

                            }
                        }
                        .info-goods{
                            width:500px;
                            height:46px;
                            border-bottom:1px solid #cccccc;
                            ol{
                                width:100%;
                                height:100%;
                            }
                            ol li{
                                font-size:16px;
                                float:left;
                                margin-left:96px;
                            }
                            ol li:nth-child(1){
                                margin-left:32px;
                            }
                            ol li:nth-child(4){
                                margin-right:12px;
                            }
                        }
                        .goodsInfo{
                            .info-goods-a{
                                width:500px;
                                height:46px;
                                border-bottom:1px solid #cccccc;
                                ul{
                                    width: 500px;
                                    height: 46px;
                                    line-height: 47px;
                                }
                                ul li{
                                    font-size:16px;
                                    float:left;
                                    margin-left:117px;
                                    margin-top:-3px;
                                }
                                ul li:nth-child(1){
                                    width:56px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    margin-left:27px;
                                }
                                ul li:nth-child(2){
                                    margin-left:86px;
                                }
                            }
                        }
                        .sumPrice{
                            width:500px;
                            height:46px;
                            border-bottom:1px solid #cccccc;
                            .sum{
                                float: right;
                                width: 51px;
                                height: 42px;
                                position: relative;
                                top: -16px;
                                right: 39px;
                                line-height: 2;
                                font-size: 17px;
                            }
                        }
                        .goodsA{
                            width:500px;
                            height:206px;
                            .goodsA-sum{
                                width:117px;
                                height:92px;
                                float:right;
                                margin-top: 26px;
                                margin-right: -52px;
                                p:nth-child(1){
                                    margin-top:-1px;
                                }
                                p{
                                    font-size: 16px;
                                    margin-bottom: -26px;
                                    text-align: left;
                                    line-height: 2;
                                    margin-left: 2px;
                                    width: 136px;
                                    height: 36px;
                                    b{
                                        color:#fb6705;
                                    }
                                }
                            }
                            button{
                                width: 82px;
                                height: 26px;
                                background: #4a9435;
                                line-height: 2;
                                border: none;
                                border-radius: 6%;
                                float: right;
                                position: relative;
                                top: 160px;
                                right: -137px;
                                margin-right: 26px;
                            }
                        }
                    }
                }
            }
            .info-content-A{
                display:none;
                width:779px;
                height:313px;
                background:#ffffff;
            }
        }
    }
</style>