<template>
    <div class="body">
        <!-- logo -->
        <div class="logo-a">
            <div class="logoA">
            </div>
            <div class="logo-nav">
                <ul class="logo-ul">
                    <li><a href="#">欢迎光临CookMe菜场</a></li>
                    <li @click="com"><a href="#">我的购物车</a></li>
                    <li @click="com1"><a href="#">关于我们</a></li>
                    <li @click="com2"><a href="#">帮助中心</a></li>
                </ul>
            </div>
        </div>
        <!-- content -->
        <div class="content">
            <div class="content-nav">
                <div class="nav">
                    <div class="nav-img"><img src="../../static/shopping/img/null-shopping.jpg" /></div>
                    <div class="nav-text">
                        <p class="p1">您的购物车还是空的哦~</p>
                        <p><input type="button" @click="goShopping" value="去购物" /></p>
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
        name: "component-null-shopping",
        methods:{
            com(){
                this.$axios.post("/cookme/sys/user/myshopcar")
                    .then(({data})=>{
                        console.log(data.msg);
                        this.list = data;
                        console.log(data.list);
                        if(this.list.length <=0){
                            this.$router.push({name:"greensNullShopping"})
                        }else{
                            this.$router.push({name:"Shopping"})
                        }
                    })
            },
            com1(){
                this.$router.push({name:"about"});
            },
            com2(){
                this.$router.push({name:"introduce"});
            },
            goShopping(){
                this.$router.push({name:"cai"});
            }
        }
    }
</script>

<style lang="less">
    .body{
        background:#ffffff;
    }
    /* content */
    .content{
        width:1100px;
        min-height:390px;
        background:#f6f6f6;
        margin:0 auto;
        .content-nav{
            width:562px;
            height:326px;
            margin-left:136px;
            .nav{
                width: 562px;
                height: 326px;
                .nav-img{
                    width:262px;
                    height:262px;
                    float:left;
                    margin-top:66px;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .nav-text{
                    float:left;
                    margin-top:102px;
                    .p1{
                        font-size:21px;
                        color:#777777;
                    }
                    input{
                        width:111px;
                        height:46px;
                        color:#ffffff;
                        background:#1e7902;
                        margin-top:66px;
                        font-size:20px;
                        outline: none;
                        border:none;
                        border-radius: 32px;
                    }
                }
            }
        }
    }
</style>