<template>
	<div class="box">
			<div class="top">
				<img class="big" src="../../../static/cai-img/img.jpg">
				<ul class="nav">
					<li><a href="javascript:;">欢迎光临CookMe菜场</a></li>
					<li><a href="javascript:;">我的订单</a></li>
					<li><a class="a1" href="#">关于我们</a></li>
					<li><a href="#">帮助中心</a></li>	
				</ul>	
			</div>
			<div class="mid">
				<div class="words"> 首页 > 帮助中心</div>
				<div class='list'>
					<div class="left">
						<li class="green">常见问题</li>
						<li>购物指南</li>
						<li>菜场接收</li>
						<li>配送方式</li>
						<li>支付方式</li>
					</div>
					<div class="right">
						<li class="lan">帮助中心</li>
						<li class="pag">
							Cook Me菜场：时刻保持新鲜... 
						</li>
						
					</div>
				</div>
			</div>
	</div>
</template>

<script>
	export default {
		name:"introduce",
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
		height:522px;
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
				margin-left:120px;
			}
			.list{
				height:384px;
				width:863px;
				background: #f6f6f6;
				margin-left:120px;
				.left{
					height:198px;
					width:228px;
					background: #dcdcdc;
					float:left;
					.green{
						font-size:18px;
						color:white;
						background: green;
					}
					li{
						line-height: 39.6px;
						text-align: center;
						font-size:16px;
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
			
		
</style>
