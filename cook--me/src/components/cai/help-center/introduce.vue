<template>
	<div class="box">
			<div class="top">
				<img class="big" src="../../../static/cai-img/img.jpg">
				<ul class="nav">
					<router-link to="/cai">
					<li class="top-Left"><a href="javascript:;">欢迎光临CookMe菜场</a></li>
					</router-link>
					<router-link to="/order">
					<li><a href="javascript:;">我的订单</a></li>
					</router-link>
					<router-link to="/about">
					<li><a class="a1" href="#">关于我们</a></li>
					</router-link>
					<router-link to="/introduce">
					<li><a href="#">帮助中心</a></li>
					</router-link>
				</ul>	
			</div>
			<div class="mid">
				<div class="words"> 首页 > 帮助中心</div>
				<div class='list'>
					<div class="left">
						<li class="green">常见问题</li>
						<li @click = "comName='intro'">购物指南</li>
						<li @click = "comName='flow'">配送方式</li>
						<li @click = "comName='pay'">支付方式</li>
						<component :is="comName"></component>
					</div>
					<div class="right">
						<li class="lan">帮助中心</li>
						<li class="pag">
							 
						</li>
						
					</div>
				</div>
			</div>
			<div class="foot">	
				<div class="foot-header">
					<ul class="foot-header-ul">
						<li><div class="r"></div><b>多</b>&nbsp;&nbsp;<a href="#">种类齐全&nbsp;&nbsp;轻松购物</a></li>
						<li><div class="r"></div><b>快</b>&nbsp;&nbsp;<a href="#">多仓直发&nbsp;&nbsp;极速配送</a></li>
						<li><div class="r"></div><b>鲜</b>&nbsp;&nbsp;<a href="#">当天采摘&nbsp;&nbsp;时刻保险</a></li>
						<li><div class="r"></div><b>省</b>&nbsp;&nbsp;<a href="#">天天低价&nbsp;&nbsp;畅选无忧</a></li>
					</ul>
				</div>
				
				<div class="foot-foot">
					<div class="foot-content">
						<ul class="foot-content-ul">
							<li><a href="#">关于我们</a></li>
							<li>|</li>
							<li><a href="#">联系我们</a></li>
							<li>|</li>
							<li><a href="#">帮助中心</a></li>
						</ul>
						<div class="last">
							COPYRIGHT&copy;&nbsp;2017,&nbsp;&nbsp;版权所有ICP备88888888号
						</div>
					</div>
				</div>
				
			</div>
	</div>
</template>

<script>
	import flow from "./flow";
	import pay from "./pay";
	import intro from "./intro";

	export default {
		name:"introduce",
		data(){
			return {
				comName:'intro',
				
			}
		},
		
		components:{
			flow,
			pay,
			intro
		}
		
	}
</script>

<style scoped lang="less">

		*{
			margin:0;
			padding:0;
		}
		li{
			list-style:none;
		}
		a{
			text-decoration:none;
		}	
	
	.box{
		width:100%;
		height:764px;
		position: relative;
		background: #f6f6f6;
		.top{
			height:70px;
			width:100%;
			.big{
				height:70px;
				width:100%;
			}
			.nav{
				height:70px;
				width:100%;
				background:rgba(255,255,255,0.5);
				position:absolute;
				top:0px;
				.top-Left{
					margin-left:203px
				}
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
		}
		.mid{
			height:452px;
			width:100%;
			.words{
				height:68px;
				width:863px;
				line-height: 68px;
				font-size: 20px;
				// background: lightpink;
				margin-left:200px;
			}
			.list{
				height:384px;
				width:863px;
				background: #f6f6f6;
				margin-left:200px;
				.left{
					height:156px;
					width:228px;
					background: #dcdcdc;
					float:left;
					.green{
						font-size:18px;
						color:white;
						background: green;
					}
					.green:hover{
						background:green ;
					}
					li{
						line-height: 39.5px;
						text-align: center;
						font-size:16px;
					}
					li:hover{
						background:#f6f6f6;
					}
				}
				.right{
					height:384px;
					width:626px;
					// background: skyblue;
					float:right;
					.lan{
						height:39.6px;
						width: 626px;
						background: green;
						margin-bottom:10.4px;
						line-height: 39.6px;
						padding-left:30px;
					}
					.pag{
						height:334px;
						width:626px;
						border:1px solid #e5e5e5;
						background: white;
						padding-left:30px;
					}
				}
			}
		}
	}
	.foot{
		width:100%;
		min-height:106px;
		margin:0 auto;
		// background: pink;
		.foot-header{
			width:1100px;
			height:56px;
			
			.foot-header-ul{
				width:962px;
				height:56px;
				margin:0 200px;
				line-height:2;
				li{
					float:left;
					margin-right:45px;
					.r{
						width:10px;
						height:10px;
						background:#1e7902;
						border-radius: 50%;
						float:left;
						margin-top: 16px;
					    margin-right: 2px;
					}
					b{
						font-size:21px;
						color:#1e7902;
					}
					a{
						font-size:16px;
						color:#000000;
						font-weight: bold;
					}
				}
			}
		}
		.foot-foot{
			width:100%;
			height:52px;
			background:#cbddc5;
			.foot-content{
				width:370px;
				height:52px;
				margin:0 auto;
				text-align:center;
				padding-top:8px;
				.foot-content-ul{
					margin-left:75px;
					li{
						float:left;
						margin-right:2px;
						color:#1e7902;
						a{
							font-size:13px;
							color:#1e7902;
						}
					}
				}
				.last{
					
					font-size:13px;
					color:#1e7902;
				}
			}
		}
	}
			
		
</style>
