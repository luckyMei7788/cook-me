<template>
    <div class="body">
        <div class="logo-a">
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
        </div>
        <!-- content -->
        <div class="content">
            <div class="content-content">
                <div class="content-header">
                    <div class="content-header-nav">
                        <ul>
                            <li><input type="checkbox" @click="handleChecked()" v-model="allChecked"/>&nbsp;&nbsp;<i>全选</i></li>
                            <!--<img src="AllisChecked?'../img/全选.png':'../img/未选.png'" @click="AllisChecked(AllisChecked?false:true)" />-->
                            <li>商品名称</li>
                            <li>单价</li>
                            <li>数量</li>
                            <li>合计</li>
                        </ul>
                    </div>
                </div>
                <div v-for="(item,index) in list" :id="gennerId(index)" >
                <div class="content-shopping">
                    <div class="content-shopping-nav">
                        <ul>
                            <li><input type="checkbox" @click="isCheckedA(item.isChecked)" v-model="item.isChecked"  name="all"/></li>
                            <!--<img :src="item.isChecked?'../../static/shopping/img/全选.png':'../../static/shopping/img/未选.png'" @click="updateisChecked(item.carId,item.isChecked?false:true)"/>-->
                            <li>{{item.productName}}</li>
                            <li>{{item.price}}</li>
                            <li>
                                <ol>
                                    <li><button @click="subtract(gennerId(index))"><b>-</b></button></li>
                                    <li>{{item.carCount}}</li>
                                    <li><button @click="add(gennerId(index))"><b>+</b></button></li>
                                </ol>
                            </li>
                            <li>{{item.price * item.carCount}}</li>
                            <li><a href="#" @click="deleteGoods(item.carId)" ><img src="../../static/shopping/img/删除1.png" /></a></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div class="content-footer">
                    <div class="content-footer-header">
                        <p>共&nbsp;&nbsp;{{indexA}}&nbsp;&nbsp;件商品</p>
                        <p>已选择&nbsp;&nbsp;3&nbsp;&nbsp;件</p>
                    </div>
                    <div class="content-footer-nav">
                        <p>合计:<b>{{sumPrice}}元</b></p>
                        <p>
                            <input type="button" @click="go" value="继续购物" />
                            <input type="button" @click="account" value="去结算" />
                        </p>
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
    document.addEventListener('mousewheel', function (event) {
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    }, false);
    export default {
        name: "component-shopping",
        data(){
          return {
              num:1,
              indexA:"",
              list:[],
              allChecked:true
          }
        },
        methods:{
            gennerId:function (index){
                console.log(index);
                return index

            },
            //全选
            handleChecked: function(item) {
                //全选
                if (this.allChecked == false) {
                   this.list.forEach(v=>{
                        v.isChecked = true;
                    })
                } else {  //取消全选
                    this.list.forEach(v=>{
                        v.isChecked = false;
                    })
                }
                this.allChecked = !this.allChecked;
            },
            //单选
            isCheckedA:function(itemIsChecked){
                if(itemIsChecked == true){
                    this.allChecked = false;
                    console.log("true");
                }else{
                    this.allChecked = false;
                    console.log("false");
                }
                itemIsChecked = !itemIsChecked;
            },
            add:function(id){
                console.log("这是点击获取的id"+id);
                console.log(this.list[id].carCount);
                var productId = this.list[id].productId;
                var carCount = this.list[id].carCount++;
                console.log(carCount);
                // this.$axios.post("/cookme/sys/user/allOrder",{  //修改好数量之后上传后台
                //     productId,
                //     carCount,
                // }).then(({data})=>{
                //     console.log(data);
                // })
            },
            subtract:function(id){
                if(this.list[id].carCount <=1){
                    this.list[id].carCount=1
                }else{
                    this.list[id].carCount -=1;
                }
            },
            getGoodsList(){
                this.$axios.post("/cookme/sys/user/myshopcar")
                    .then(({data})=>{
                        console.log(data);
                        this.list = data;
                        console.log(this.list);
                    })
            },
            deleteGoods(carId){
                var carIda = [
                    {
                        carId
                    }
                ]
                console.log(carIda,carId);
                this.$axios.post("/cookme/sys/user/shopcardel",carIda,{
                    headers:{
                        "content-type":"application/json"
                    }
                })
                    .then(({data})=>{
                        console.log("******data******");
                        console.log(data);
                        console.log("******msg******");
                        console.log(data.msg);
                        this.getGoodsList();
                    })
            },
            go(){
                this.$router.push({name:"cai"});
            },
            // //单选接口调用
            // updateisChecked(carId,type){
            //     var isChecked = [{
            //         carId:carId,
            //         isChecked:type
            //     }]
            //     this.$axios.post("/cookme/sys/user/multiple",isChecked,{
            //         headers:{
            //             "content-type":"application/json"
            //         }
            //     }).then(({data})=>{
            //         // this.list[index].isChevked=type;
            //         console.log("******未选多选按钮******");
            //         console.log(data.code);
            //         this.getGoodsList();
            //         // console.log(data.list[index].isChevked);
            //     })
            // },
            // //全选接口调用
            // updatrAllisChecked(carId,type){
            //     var isChecked = [{
            //         carId:carId,
            //         isChecked:type
            //     }]
            //     this.$axios.post("/cookme/sys/user/multiple",isChecked,{
            //         headers:{
            //             "content-type":"application/json"
            //         }
            //     }).then(({data})=>{
            //         this.getGoodsList();
            //     })
            // },
            account(){//点击结算传参
                // let list = JSON.stringify(this.list);//将数组转为字符串进行传递
                // this.$router.push({name:'confirmAnOrder',query:{listInfo:list}});//params参数为键值对,传参为router,接参为route
                this.$router.push({name:'confirmAnOrder'});

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
            // AllisChecked(){//全选
            //     var isAll = true;
            //     for(var i; i<this.list.length;i++){
            //         if(!this.list[i].isChecked){
            //             isAll = false;
            //             break;
            //         }
            //     }
            //     return isAll;
            // },
        }

    }
</script>

<style lang="less">
    /* content */
    .content{
        width:1100px;
        min-height:530px;
        background:#f6f6f6;
        margin:0 auto;
    }
    .content-content{
        width:779px;
        background:#ffffff;
        margin:0 auto;
        border:1px solid #bfbfbf;
        .content-header{
            width:779px;
            height:66px;
            border-bottom:1px solid #bfbfbf;
            .content-header-nav{
                width:636px;
                height:66px;
                margin:0 auto;
                line-height:4;
                img{
                    width: 16px;
                    height: 16px;
                }
                ul li{
                    float:left;
                    font-size:18px;
                    margin-right:79px;
                    text-align:center;
                    i{
                        font-style:normal;
                        font-size:13px;
                    }
                }
            }
        }
        .content-shopping{
            width:779px;
            min-height:77px;
            border-bottom:1px solid #bfbfbf;
            .content-shopping-nav{
                width: 692px;
                height: 66px;
                margin: 0 72px;
                line-height: 4;
                img{
                    width: 16px;
                    height: 16px;
                }
                ul li{
                    float: left;
                    font-size: 13px;
                    margin-right: 115px;
                    text-align:center;
                }
                ul li:nth-child(2){
                    width:52px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                ul li:nth-child(4){
                    ol li{
                        list-style: none;
                        margin: 0;
                        margin-left: -7px;
                        position: relative;
                        left: -26px;
                    }
                    li{
                        float:left;
                    }
                    input{
                        text-align:center;
                    }
                    button{
                        height: 23px;
                        width: 20px;
                        position: relative;
                        top: 16px;
                        b{
                            position: relative;
                            top: -16px;
                        }
                    }
                }
                ul li:nth-child(5){
                    margin-left: -72px;
                    width: 26px;
                    height: 47px;
                }
                ul li:nth-child(6){
                    margin-right:-15px;
                }
            }
        }
    }
    .content-footer{
        width:779px;
        height:107px;
        border-bottom:1px solid #bfbfbf;
        .content-footer-header{
            width:320px;
            height:66px;
            margin-left:69px;
            margin-top:16px;
            float:left;
            p{
                float:left;
                margin-right:37px;
            }
        }
        .content-footer-nav{
            width:192px;
            float:right;
            height:86px;
            p:nth-child(1){
                position:relative;
                top:-20px;
            }
            p{
                margin-top:37px;
                input{
                    width: 71px;
                    height: 28px;
                    color: #ffffff;
                    margin-right: 20px;
                    background: #1e7902;
                    font-size: 12px;
                    outline: none;
                    border: none;
                    border-radius: 6px;
                    position: relative;
                    top: -42px;
                    line-height: 2;
                }
            }
        }
    }
</style>