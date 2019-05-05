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
                    <p>确认订单</p>
                </div>
                <div class="info-content">
                    <p>收货地址</p>
                    <div class="info-content-select">
                        <div class="address"   v-show="addressShow">
                            <area-select type='all' :level='2' v-model="send_search_form.selected" :data="pcaa" v-show="addressShow" ref="address"></area-select>
                            <b>姓名：</b><input type="text" class="name1" v-model="usName">
                            <b>手机号：</b><input type="number" class="num1" v-model="usPhone"><br>
                            <b>收货地址：</b><input type="text" class="add1" v-model="adddetail">
                            <b>邮编：</b><input type="number" class="email" v-model="usU"><br>
                            <!--<button>修改</button>-->
                            <button @click="addressT" class="btn">确定</button>
                        </div>
                        <div class="addressA" style="display:none" v-show="addressAShow">
                            姓名：{{address.conName}}<br>
                            手机号：{{address.conMobile}}<br>
                            收货地址：{{address.conAddress}}<br>
                            邮编：{{address.conPostal}}
                        </div>

                       <!-- <div class="address">
                            <a href="javascript:;"><img src="../../static/shopping/img/添加.png" /></a>
                            <p>
                                &lt;!&ndash;添加地址&ndash;&gt;

                            </p>
                        </div>-->
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
                                        <li>{{item.productNum}}</li>
                                        <li>{{item.price*item.productNum}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sumPrice">
                                <p class="sum">{{sumPrice}}元</p>
                            </div>
                            <div class="goodsA">
                                <div class="goodsA-sum">
                                    <p>商品件数:&nbsp;&nbsp;{{indexA}}</p>
                                    <p>商品总价:&nbsp;&nbsp;{{sumPrice}}.00</p>
                                    <p>应付金额:&nbsp;&nbsp;<b>{{sumPrice}}.00</b></p>
                                </div>
                                <button @click="zhifu">提交订单</button>
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
    import {AreaSelect} from "vue-area-linkage";
    import 'vue-area-linkage/dist/index.css';
    import { pca, pcaa } from 'area-data';
    export default {
        name: "confirmAnOrder",
        data(){
            return {
                // list:JSON.parse(this.$route.query.listInfo),
                pca : pca,
                pcaa : pcaa,
                list:JSON.parse(this.$route.query.listInfo),
                indexA:0,
                usName:"",
                usPhone:"",
                usU:"",
                adddetail:"",
                code:"",
                name:[],
                address:[],
                addressShow:true,
                addressAShow:false,

                send_search_form : {
                    orderCode : "",
                    itemName : "",
                    orderTime : [],
                    consigneeName : "",
                    state : "",
                    selected : []
                }
            }
        },
        // created(){
        //   this.getQuery();
        // },
        methods:{
            breakShopping(){
                this.$router.push({name:"Shopping"});
            },
            addressT(){
                var addNew='';
                var address=this.$refs.address.value;
                /*this.$refs.usName.value=this.usName;
                this.$refs.usPhone.value=this.usPhone;
                this.$refs.usAdd.value=this.usAdd;*/
                // var addNew=""
                //console.log(address);
                address.map(function(item){
                    for(var i in item){
                        var addressList=item[i];
                        console.log(addressList)
                    }
                    addNew+=addressList;
                });
                console.log(addNew);
                    this.$axios.post("/cookme/sys/order/consignee",{
                        conName:this.usName,
                        conMobile:this.usPhone,
                        conAddress:addNew,
                        conPostal:this.usU
                    }).then(({data})=>{
                        this.address = data.list;
                        /*this.usName=data.con_name;
                        this.usAdd=data.con_address;
                        this.usPhone=con_mobile*/
                        console.log(data);
                        this.name = data;
                        this.code = data.code;
                        if(this.address.length>0){
                            this.addressShow = !this.addressShow;
                            this.addressAShow = !this.addressAShow;
                            this.address = data.list[0];
                        }
                        console.log(this.address);
                    });



            },
            zhifu(){
                if(this.address.length <=0){
                    alert("您还没有填写地址哦");
                } else if(this.list.length <=0){
                    alert("你还没有商品哦");
                }else{
                    var sum = {
                        amount:this.sumPrice,
                        remark:"尽快发货哦!"
                    }
                    this.$axios.post("/cookme/sys/order/aliOrder",sum,{
                        headers:{
                            "content-type":"application/json"
                        }
                    }).then(({data})=>{
                        console.log("AAAAAAAAAA");
                        console.log(data);
                        console.log(data[0].amount);
                        console.log(data[0].orderNum);
                        var listSum = JSON.stringify({
                            amount:data[0].amount,
                            orderNum:data[0].orderNum
                        })
                        console.log(listSum);
                        // this.$router.push({name:'confirmAnOrder',query:{listInfo:list}});//params参数为键值对,传参为router,接参为route
                        this.$router.push({name:"zhifubao",query:{listSumA:listSum}});
                    })
                }

            },
        },
        component : {
            AreaSelect : AreaSelect
        },
        mounted(){
            // this.getGoodsList();
            this.indexA = this.list.length;
            console.log(this.list);
            //this.zhifu()
        },
        computed:{
            sumPrice(){//合计
                var sum = 0;
               this.list.forEach((v,index)=>{
                   console.log(v,index);
                   console.log(this.list[index]);
                   sum += this.list[index].price*this.list[index].productNum;
                   console.log(sum);
               })
                return sum;
        },
    }}
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
                        width:548px;
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
                        b{
                            margin-left:20px;
                        }
                        .name1{
                            margin-top:12px;
                        }
                        .num1{
                            margin-top:20px;
                        }
                        .add1{
                            margin-top:20px;
                        }
                        .email{
                            margin-top:20px;
                        }
                        .btn{
                            width:200px;
                            margin-top:7px;
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