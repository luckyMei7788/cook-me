<template>
	<div class="box">
		<div class="banner">
			<img class="big" src="../../static/cai-img/banner01.jpg">
			<ul class="nav">
				
					<li><a href="#">欢迎光临CookMe菜场</a></li>
				<router-link to="/order">
					<li><a href="#">我的订单</a></li>
				</router-link>
				
				<router-link to="/about-us">
					<li><a class="a1" href="#">关于我们</a></li>
				</router-link>
				
				<router-link to="/help-centor">
					<li><a href="#">帮助中心</a></li>
				</router-link>
						
			</ul>
			<input class="one" type="search" />
			<img class="small" src="../../static/cai-img/fdj.jpg">
		</div>
	</div>
</template>

<script>
	export default {
		name : "logo",
		data() {
			return {
				
			};
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
				top:86px;
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
			.small{
				width:92px;
				height:68px;
				border:1px solid green;
				position:absolute;
				top:508px;
				left:796px;
				background:rgba(255,255,255,0.5);
				
			}
			.one{
				width:409px;
				height:68px;
				border:1px solid green;
				position:absolute;
				 top:508px;
				 left:388px;
				background:rgba(255,255,255,0.5);
			}
		}
	}


</style>
