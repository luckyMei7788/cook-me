<template>
    <div class="body">
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
            <div class="content-content">
                <div class="content-header">
                    <div class="content-header-nav">
                        <ul>
                            <li><input type="checkbox"  @click="AllCheckedA()" :checked="AllArr.length===list.length"/>&nbsp;&nbsp;<i>全选</i></li>
                            <li>商品名称</li>
                            <li>单价</li>
                            <li>数量</li>
                            <li>合计</li>
                        </ul>
                    </div>
                </div>
                <div v-for="(item,index) in list" :id="gennerId(index)"  :key="index">
                <div class="content-shopping">
                    <div class="content-shopping-nav">
                        <ul>
                            <li><input type="checkbox" @click="checkedA(index)"  :checked="AllArr.indexOf(item.productId)>=0"/></li>
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
                        <p>已选择&nbsp;&nbsp;{{goods}}&nbsp;&nbsp;件</p>
                    </div>
                    <div class="content-footer-nav">
                        <p>合计:<b>{{sumPrice}}元</b></p>
                        <p>
                            <input type="button" @click="go" value="继续购物" />
                            <input  type="button" @click="account()" value="去结算" />
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
              indexA:0,
              AllArr:[],

              list:[],
              goods:0,
          }
        },
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
            gennerId:function (index){
                // console.log(index);
                return index;

            },
            //点击全选按钮
            AllCheckedA() {
                console.log(event.currentTarget.checked);//true
                //event.currentTarget.checked表示点击完后该选择框的状态
                if (!event.currentTarget.checked) {
                    this.AllArr = [];//清空AllArr数组
                    this.goods = 0;
                } else {
                    this.AllArr = [];//先置空，然后再重新添加，不然数组里会有重复！因为有可能点击全选之前已经选择了几个单选按钮。也就是数组里已经添加过了对应的id。
                    this.list.forEach(v => {
                        this.AllArr.push(v.productId);
                    })
                    this.goods = this.indexA;
                }
                console.log("全选");
                console.log(this.AllArr)
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
            },
            //点击单选按钮
            checkedA(id) {
                if (event.currentTarget.checked) {
                    this.AllArr.push(this.list[id].productId);
                    this.goods +=1;
                } else {
                    for (var i = 0; i < this.AllArr.length; i++) {
                        if (this.list[id].productId === this.AllArr[i]) {
                            this.AllArr.splice(i, 1);
                            break;
                        }
                    }
                    this.goods -=1;
                }
                console.log("单选");
                console.log(this.AllArr)
            },
            getGoodsList(){
                this.$axios.post("/cookme/sys/user/myshopcar")
                    .then(({data})=>{
                        console.log("******商品******");
                        // console.log(data);
                        this.list = data;
                        console.log(this.list);
                        this.indexA = this.list.length;
                        this.goods = this.list.length;
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
            add:function(id){
                console.log("这是点击获取的id"+id);
                console.log(this.list[id].carCount);
                var productId = this.list[id].productId;
                this.list[id].carCount = this.list[id].carCount +=1
                // var shopCarDto = {
                //     productId:productId,
                //     carCount:carCount
                // }
                // this.$axios.post("/cookme/sys/user/shopcar",shopCarDto,{
                //     headers:{
                //         "content-type":"application/json"
                //     }
                // }).then(({data})=>{
                //     console.log("-------------");
                //         console.log(data);
                //     })
            },
            subtract:function(id){
                if(this.list[id].carCount <=1){
                    this.list[id].carCount =this.list[id].carCount=1;
                }else{
                    this.list[id].carCount = this.list[id].carCount -=1;


                }
            },
            account(){//点击结算传参
                // let list = JSON.stringify(this.list);//将数组转为字符串进行传递
                // this.$router.push({name:'confirmAnOrder',query:{listInfo:list}});//params参数为键值对,传参为router,接参为route
                // this.$router.push({name:'confirmAnOrder'})
                // this.getGoodsList();
                if(this.sumPrice === 0){
                    alert("您还没有选中商品!");
                }else{
                    var Arr =[] ;
                    // this.list.forEach(v=>{
                        var goods = [];
                        console.log("???????????????");
                        // console.log(v);
                        this.AllArr.forEach((id,index,array)=>{
                            var a= [];
                            console.log("aaaaaaaaaaaaaaaaaaaa");
                            console.log(id);
                            console.log(array);

                            var love = {
                                productId: id,
                                productNum:this.list[index].carCount
                            };
                            var m = love;
                            console.log("mmmmmmmmmmmmmmmmmmmmmmmmmm");
                            console.log(m);
                            console.log("**************************");
                             goods.push(m);
                            a.push(m);
                            console.log(a);
                            // for(var i = 0;i<=love.length;i++){
                            //     var list = [];
                            //     list.push(love);
                            //     console.log(list);
                            // }
                        })
                        Arr = goods;
                        console.log(goods);
                    // })
                   console.log(Arr);
                    this.$axios.post("/cookme/sys/order/itemandpro",Arr,{
                        headers:{
                            "content-type":"application/json"
                        }
                    }).then(({data})=>{
                        console.log("+++++++++++++++");
                        console.log(data);
                        let list = JSON.stringify(data);
                        this.$router.push({name:'confirmAnOrder',query:{listInfo:list}})
                    })


                }
            },
        },
        mounted(){
            this.getGoodsList();
            this.goods = 0;
            console.log("++++++++++++++++++++++++");

        },
        computed:{
            sumPrice() {
                var sum = 0;
                //加入选择框以后的计算总价
                this.list.forEach((v, k) => {
                    if (this.AllArr.indexOf(v.productId) !== -1) {
                        sum += v.price * v.carCount;
                    }
                });
                return sum
            },
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
                ul li:nth-child(3) {
                    margin-left: -12px;
                    width: 20px;
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