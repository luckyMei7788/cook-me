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
        <!--content-->
        <div class="content">
            <div class="content-zhifubao">
                <div class="zhifubao-header">
                    <div class="info-logo">
                        <div class="logo-a">logo</div>
                        <p class="p">提交订单</p>
                </div>
                </div>
                <div class="zhifubao-content">
                    <div class="success">
                        <p class="img"><img src="../../static/shopping/img/success.gif"></p>
                        <p class="text">订单提交成功</p>
                        <i>您的订单编号为:</i>
                    </div>
                    <p>请选择以下方式付款</p>
                    <div class="success-a">
                       <a href="javascript:;" @click="zhifubao" ref="zhifubaoFormA" class="way">
                            <img src="../../static/shopping/img/支付宝.png" />
                            <b>支付宝</b>
                        </a>
                        <p class="money">需付款金额:<b>3.70</b>元</p>
                    </div>
                </div>
            </div>
        </div>
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
        name: "zhifubao",
        data(){
          return {
              zhifubaoForm:[]
          }
        },
        methods:{
            zhifubao(){
                this.$axios.post("/cookme/sys/alipay/pay")
                    .then(({data})=>{
                        console.log(data);
                        console.log(data.result);
                        this.zhifubaoForm =data.result;
                        // document.getElementByClassName("content").innerHTML = this.zhifubaoForm
                        console.log(this.zhifubaoForm);
                        console.log(this.$refs.zhifubaoFormA);
                        let zhifubaoForm = this.zhifubaoForm;//将数组转为字符串进行传递
                        let routeData = this.$router.push({name:'zhifubaoForm',query:{Form:zhifubaoForm}})
                        window.open(routeData.href, '_blank');
                    })
            }
        }
    }
</script>

<style lang="less">
    .body{
        background:#ffffff;
    }
    .content{
        .content-zhifubao{
            width:772px;
            height:442px;
            margin:0 auto;
            position: relative;
            top: 26px;
            .zhifubao-header{
                width:772px;
                height:101px;
                .info-logo{
                    width:779px;
                    height:101px;
                    .logo-a{
                        width:100px;
                        height:100px;
                        background:#e5e5e5;
                        text-align:center;
                        line-height:6;
                        float:left;
                    }
                    .p{
                        float:left;
                        position: relative;
                        top: 30px;
                        left: 32px;
                    }
             }
            }
            .zhifubao-content{
                width:772px;
                height:307px;
                background:#ffffff;
                border:1px solid #cccccc;
                margin-top:26px;
                .success{
                    width:772px;
                    height:136px;
                    border-bottom:1px solid #cccccc;
                    p{
                        float:left;
                        margin-left:32px;
                        img{
                            width:52px;
                            height:52px;
                            margin-top:32px;
                        }
                    }
                    .text{
                        margin-top:52px;
                    }
                    i{
                        font-style:normal;
                        font-size:12px;
                        clear:both;
                        position: relative;
                        top: 77px;
                        right: 116px;
                    }
                }
                p{
                    font-size:16px;
                    margin:12px 20px;
                }
                .success-a{
                    width:772px;
                    height:122px;
                    border-top:1px solid #cccccc;
                    .way{
                        display:block;
                        width:107px;
                        height:42px;
                        border:1px solid #cccccc;
                        margin-top:16px;
                        margin-left:42px;
                        img{
                            width:26px;
                            height:26px;
                            position:relative;
                            top: 7px;
                            left: 12px;
                        }
                        b{
                            font-style:normal;
                            font-size:12px;
                            position: relative;
                            left: 20px;
                            color:#000000;
                        }
                    }
                    .money{
                        float:right;
                        margin-right: 196px;
                        margin-top: -12px;
                        b{
                            font-size:17px;
                            color:#ff6f06;
                        }
                    }
                }
            }
        }
    }

</style>