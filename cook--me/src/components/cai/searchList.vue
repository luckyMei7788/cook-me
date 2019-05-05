<template>
	<div>
	<div class="box">
		<div class="banner">
			<img class="big" src="../../static/cai-img/banner01.jpg" >
			<ul class="nav">
				<router-link to="/cai">
				<li class="top-Left"><a href="javascript:;">欢迎光临CookMe菜场</a></li>
				</router-link>
				<router-link to="/order">
					<li><a href="javascript:;">我的订单</a></li>
				</router-link>
				
				<router-link to="/about">
					<li><a class="a1" href="javascript:;">关于我们</a></li>
				</router-link>
				
				<router-link to="/introduce">
					<li><a href="javascript:;">帮助中心</a></li>
				</router-link>	
			</ul>
				
			<input class="one" ref="search" />
			<div class="two">
				<router-link to="/searchList">
				<img class="small" src="../../static/cai-img/fdj.jpg" @click="searchGoods">
				<!-- <component :is="searchList"></component> -->
				</router-link>
			</div>
			
		</div>
		<router-view ></router-view>
	</div>
	<div class="list-One">
		<div class="sortName">
			<img src="../../static/cai-img/1.jpg">
			搜索精选
			<img src="../../static/cai-img/1.jpg">
		</div>
		<div class="picWall">
			<div class="box" v-for="(item,index) in iGoods" @click="transId(index)">
				<img :src="JavaUrl+item.productImages" />
				<div class="goodsInt">
					<span>产品分类&nbsp; :&nbsp; {{item.sort}}</span><br>
					<span>产品名称&nbsp; : &nbsp;{{item.productName}}</span><br>
					<span>全网最低价&nbsp;:&nbsp;{{item.price}}</span>&nbsp;&nbsp;
				</div>
				<!-- <span class="tip">CookMe菜场&nbsp;，新鲜保障</span>	 -->
			</div>
	
		</div>
	</div>
	</div>
</template>

<script>
	
	export default {
		name:"searchList",
		
		data() {
			return {
				iGoods:[],
				JavaUrl:"http://39.106.68.255/"
			};
		},
			methods:{
			searchGoods(){
				// {参数示例
				// “limit” : 条数,
				// “offset” : 开始下标,
				// “search” : “蔬菜”
				// }
				var search = this.$refs.search.value;
				var limit = 6;
				var offset = 0;
				// console.log(search, limit, offset);
				this.$axios.post("/cookme/sys/product/select?search="+search, {
					limit,
					offset
				}).then(({data})=>{
					this.iGoods = data.rows;
					// console.log("模糊查询");
					console.log(data);
					// console.log(data.rows[0]);
									
				})
			},
			transId(id){//把商品id传给购物车界面---路由传值
					console.log(id);
					console.log(this.iGoods[id].productId);
					var id = this.iGoods[id].productId;
					this.$router.push({name:"green",query:{Aid:id}});
					
				}
		}
	}
</script>

<style scoped lang="less">
	
	/* logo */
	
	.box{
		width:1100px;
		height:514px;
		margin:0 auto;
		margin-bottom: 31px;
		background: #f6f6f6;
		.banner{
			width:1100px;
			height:514px;
			margin:0 auto;
			// position:relative;
			.big{
				width:100%;
				height:100%;
				//margin:0 auto;
			}
			.nav{
				width:1100px;
				height:72px;
				background:rgba(255,255,255,0.5);
				position:absolute;
				top:90px;
				li{
					float:left;
					margin-left:66px;
					line-height: 72px;
				a{
					font-size:20px;
					color:#1e7902;
				}
				}
			}
			.two{
				width:92px;
				height:68px;
				border:1px solid green;
				position:absolute;
				top:510px;
				left:877px;
				background:rgba(255,255,255,0.5);
				.small{
					margin:10px 0 0 22px;
					background:rgba(255,255,255,0.1);
					width:47px;
					height:49px;
				}
			}
			
			.one{
				width:409px;
				height:68px;
				border:1px solid green;
				position:absolute;
				 top:510px;
				 left:469px;
				 font-size: 20px;
				 color:forestgreen;
				background:rgba(255,255,255,0.5);
			}
		}
	}
	
	
	div{
		.list-One {
			background:#f6f6f6;
			width:1106px;
			height:100%;
			margin:0 auto;
			border: 1px solid #1e7902;
			margin-bottom : 30px;
			.sortName{
				height:62px;
				width:1104px;
				font-size: 18px;
				line-height: 62px;
				text-align: center;
				background: #8fcf7b;
			}
			.picWall{
				width : 100%;
				height : 100%;
				background: #f6f6f6;
				.box{
					width : 544px;
					height : 230px;
					background :white;
					float:left;
					border:1px solid lightgray;
					margin:30px 8px 0 0;
					img{
						height:200px;
						width:166px;
						margin: 15px 50px 0 30px;
						float:left;
					}
					.goodsInt{
						float:left;
						padding:50px 0 0 0;
						font-size: 16px;
						span{
							line-height:45px ;
							
						}
						
					}
					.tip{
						color:green;
						font-size:18px;
						float:right;
						padding-right:20px;
					}
				}
			}
// 			.picWall{
// 				width : 100%;
// 				height : 300px;
// 				.box{
// 					width : 184px;
// 					height : 316px;
// 					background : #f6f6f6;
// 					float: left;
// 					img{
// 						height:200px;
// 						width:166px;
// 						margin : 24px 9px 0 ;
// 						vertical-align: center;
// 						// float:left;
// 					}
// 					span{
// 						display: block;
// 						line-height: 30px;
// 						text-align: center;
// 						margin : 10px auto 0;
// 					}
// 				}
// 			} 
		}
	
	
	}


</style>
