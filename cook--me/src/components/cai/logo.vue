<template>
	<div class="logo-a1">
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
		<div class="logo-b">
			<!-- <img src="../../static/shopping/img/菜市场banner01-1.jpg" /> -->
			<div class="logo-b-input">
				<input type="text"  /><div class="input-div"><a href="#"><img src="../../static/shopping/img/放大镜.png" /></a></div>
			</div>
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
	body{
		width:100%;
		height:700px;
	}
	/* logo */
	.logo-a{
		width:1100px;
		height:72px;
		margin:0 auto;
		overflow: hidden;
	}
	.logoA{
		width:1100px;
		height:72px;
		background:url(../../static/shopping/img/菜市场banner01-1.jpg) no-repeat ;
		overflow:hidden;
		opacity:0.5;
	}
	.logo-nav{
		width:1100px;
		position:relative;
		top:-50px;
		left:50px;
		z-index:1;
		.logo-ul li{
			float:left;
			margin-left:66px;
			.logo-nav .logo-ul li a:nth-child(1) {
				position: relative;
				left: -74px;
			}
			a{
				font-size:20px;
				color:#1e7902;
				margin-left:27px;
			}
		}
	}

</style>
