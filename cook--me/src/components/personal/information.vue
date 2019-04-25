<template>
	<div class="details">
		<h2>设 置 个 人 中 心</h2>
		<div class="nav">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="基本信息" name="first" @click="bgcolor()" tabindex="0" aria-selected="true">
					<setting></setting>
				</el-tab-pane>
				<el-tab-pane label="设置头像" name="second" @click="bgcolor()" tabindex="-1">
					<headPortrait></headPortrait>
				</el-tab-pane>
			</el-tabs>
			
			<!-- <a href="#" to="/setting">基本信息</a>
			<a href="#" to="/headPortrait">设置头像</a> -->
		</div>

	</div>
</template>

<script>
	import setting from "./setting.vue";
	import headPortrait from "./headPortrait.vue";
	export default {
		name : "information",
		data() {
			return {
				activeName: 'first',
			}
		},
		methods: {
			handleClick(tab, event) {
				//console.log(tab, event);
			},
			bgcolor(){
				//console.log(event.target)
				console.log(111)
			}
		},
		components : {
			setting,
			headPortrait
		}
	}
</script>

<style lang="less">
*{
	margin : 0;
	padding : 0;
}
a{
	text-decoration: none ;
}
li{
	list-style: none;
}
i{
	font-style: normal;
}
.details{
	width : 1200px;
	background: rgba(252, 248, 233, 0.8);
	margin : 0 auto;
	overflow : hidden;
	margin-bottom : 80px;
	h2{
		margin-left : 100px;
		margin-top : 30px;
		font-size : 32px;
	}
	.nav{
		.el-tabs__active-bar{
			height : 0px;
		}
		.el-tabs__nav-wrap::after{
			height: 0px;
		}
		.el-tabs__nav-scroll{
			.el-tabs__item.is-top{
				display: inline-block;
				margin:96px 0 50px 100px;
				font-size : 30px;
				//color: #000000;
			}
			.el-tabs__item:hover {
				color: #fbcf8d;
			}
			.el-tabs__item.is-active {
				color: #fbcf8d;
			}
			/* .el-tabs__item.is-top:hover{
				color: #fbcf8d;
			}
			#tab-first{
				color: #fbcf8d;
			} */
			
		}
	}
}
</style>
