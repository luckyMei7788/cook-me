<template>
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
</template>

<script>
	export default {
		name : "bottom",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="less">

		/* foot */
		.foot{
			width:1100px;
			min-height:106px;
			margin:0 auto;
			// background: pink;
			.foot-header{
				width:1100px;
				height:56px;
				
				.foot-header-ul{
					width:962px;
					height:56px;
					margin:0 126px;
					line-height:2;
					li{
						float:left;
						margin-right:26px;
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
				width:1100px;
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
