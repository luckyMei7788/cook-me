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
				<div class="words"> 关于我们&nbsp&nbsp<span>ABOUT US</span></div>
				<div class='list'>
					<p>
					<span>MORE INFORMATION</span><br>
					我们的宗旨是 时刻保持新鲜，绿色的蔬菜，杜绝三无蔬菜水果，为消费者发现值得信赖的水果，让消费者享受超低折扣的品质服务。打造品质保证、安全放心的蔬菜水果专业购物平台。
					</p>
					 <p>
					 <span>如果您是消费者:</span><br>
					 CookMe菜场每天帮您推荐多种新鲜、绿色的蔬果；<br>CookMe菜场的推荐一定物美价廉；<br>菜场同时致力于帮您发现品种齐全、品质一流安全放心的菜品；
					 </p>
					 <p>
					<span>如果您是商家:</span><br>
					CookMe菜源菜场有品质保障，安全放心的专业购物流程；<br>CookMe菜场是您不可或缺的生活投资方式；
					</p>
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
							<router-link to="/order">
							<li><a href="#">关于我们</a></li>
							</router-link>
							<li>|</li>
							<li><a href="#">联系我们</a></li>
							<li>|</li>
							<router-link to="/introduce">
							<li><a href="#">帮助中心</a></li>
							</router-link>
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
	export default {
		name:"about",
		data() {
			return {
				
			};
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
				font-weight: 600;
				margin-left:200px;
				span{
					color:green;
					font-size:16px ;
					
				}
			}
			.list{
				height:270px;
				width:720px;
				// background: #f6f6f6;
				margin-left:200px;
				p{
					margin-bottom:42px;
					
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
