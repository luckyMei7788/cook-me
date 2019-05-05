<template>
	<div class="box">
		<div class="banner">
			<img class="big" src="../../static/cai-img/banner01.jpg" >
			<ul class="nav">
			
					<li><a href="javascript:;">欢迎光临CookMe菜场</a></li>
					
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
</template>

<script>
	// import searchList from "./searchList";
	
	export default {
		name : "logo",
		data() {
			return {
				
			};
		},
		methods:{
			searchGoods(){
				// {参数示例
				// “limit” : 10,
				// “offset” : 0,
				// “search” : “蔬菜”
				// }
				var search = this.$refs.search.value;
				var limit = 24;
				var offset = 1;
				// console.log(search, limit, offset);
				this.$axios.post("/cookme/sys/product/select?search="+search, {
					limit,
					offset
				}).then(({data})=>{
					// console.log("模糊查询");
					// console.log(data);
						console.log(data.rows);	
					// console.log(data.rows[0].price);
				})
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
		background: #fff;
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


</style>
