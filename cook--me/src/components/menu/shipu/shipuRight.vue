<template>
    <div class="main-r">
        <ul>
            <li v-for="item in data.rows">
                <router-link :to="{path:'/menuDetail',query:{bookId:item.bookId}}">
                    <img :src="imgUrl+item.bookImage">
                </router-link>
                <p class="main-r-bot1">
                    <b>{{item.bookName}}</b>
                    <span>{{item.bookPageview}}人气</span>
                    <em>人间美味</em>
                </p>
                <p class="main-r-bot2">   
                    <i>五步/30分钟</i>
                    <i>微热/甜味</i>
                </p> 
            </li>
            <!-- <li>
                <router-link :to="{path:'/menuDetail',query:{bookId:1}}">
                    <img :src="imgUrl+bookImage">
                </router-link>
                <p class="main-r-bot1">
                    <b>{{bookName}}</b>
                    <span>6000人气</span>
                    <em>随心所欲</em>
                </p>
                <p class="main-r-bot2">   
                    <i>五步/30分钟</i>
                    <i>微热/甜味</i>
                </p> 
            </li>
            <li>
                <router-link :to="{path:'/menuDetail',query:{bookId:2}}">
                    <img :src="imgUrl+bookImage">
                </router-link>
                <p class="main-r-bot1">
                    <b>{{bookName}}</b>
                    <span>6000人气</span>
                    <em>随心所欲</em>
                </p>
                <p class="main-r-bot2">   
                    <i>五步/30分钟</i>
                    <i>微热/甜味</i>
                </p> 
            </li>
            <li>
                <router-link :to="{path:'/menuDetail',query:{bookId:3}}">
                    <img src="../../../static/menu/pic1.jpg" alt="">
                </router-link>
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
                <router-link :to="{path:'/menuDetail',query:{bookId:4}}">
                    <img src="../../../static/menu/pic1.jpg" alt="">
                </router-link>
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
                <router-link :to="{path:'/menuDetail',query:{bookId:5}}">
                    <img src="../../../static/menu/pic1.jpg" alt="">
                </router-link>
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
                <router-link :to="{path:'/menuDetail',query:{bookId:6}}">
                    <img src="../../../static/menu/pic1.jpg" alt="">
                </router-link>
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
                <img src="../../../static/menu/pic1.jpg" alt="">
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
                <img src="../../../static/menu/pic7.jpg" alt="">
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
                <img src="../../../static/menu/pic1.jpg" alt="">
                <p class="main-r-bot1">
                    <b>韩国部队锅</b>
                    <span>6000人气</span>
                    <em>随心所欲</em>
                </p>
                <p class="main-r-bot2">   
                    <i>五步/30分钟</i>
                    <i>微热/甜味</i>
                </p> 
            </li> -->  
        </ul>
        <!-- <div>
            {{data}}
        </div> -->
        <!-- <div>
            {{zxr}}/////{{num}}///////{{zxr}}
        </div> -->
        <div style="clear:both;"></div>
        <div class="pagelsm"> 
            &nbsp;
            <!--分页-->
            <el-pagination
                background
                layout="prev, pager, next"
                @current-change="detail"
                :page-size="limit"
                :total="total"
                >
            </el-pagination>
        </div> 
    </div> 
</template>


<script>
export default {
    name:'shipu-right',
    props:["zxr"],
    data(){
        return{
            imgUrl:"http://39.106.68.255/",
            total:0,
            data:{},
            num:33,
			limit:9
        }
    },
    watch:{
		zxr(){
			this.detail(1);
		}
	},
    methods:{
        detail(pageIndex=1){
            var num = this.zxr;
            // var limit = 9;
            var offset = (pageIndex-1)*this.limit;
            this.$axios.post("/cookme/sys/book/selectCookbook/"+num,{limit:this.limit,offset})
            .then(({data})=>{
                this.data = data;
                this.total= data.total;
                //console.log(22222,data);   
            })
        }
    },
    mounted(){
        this.detail()
        // console.log(bookId);
    },
//     updated(){
//         this.detail()
//     }    
}
</script>

<style lang="less">
.main-r{
    width:756px;float:right;
    ul{
        li{
            float:left;margin-left:20px;margin-bottom:16px;height:342px;
            overflow:hidden;
            text-align:left;
            img{display:block;width:232px;height:232px;}
            img:hover{background:rgb(240, 234, 234);}
            img:hover .main-r-bot2{display:block;}
            .main-r-bot1{
                b{display: block;
                    height: 24px;
                    line-height: 24px;
                    padding: 0 14px;margin-top:12px;
                    font-size: 13px;
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
        .el-pagination.is-background .el-pager li:not(.disabled).active {
            background-color:red;
            color: #FFF;
        }
        .el-pagination.is-background .el-pager li:not(.disabled):hover {
            color:#999;
        }
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

</style>

