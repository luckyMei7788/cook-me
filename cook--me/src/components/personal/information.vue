<template>
	<div class="detail">
		<div class="details">
			<button @click="$router.go(-1)" class="btn"><i class="iconfont">&#xe7ec;</i>   返回</button>
			<h2><i class="iconfont">&#xeb8d;</i>设 置 个 人 中 心</h2>
			<div class="nav">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="基本信息" name="first" @click="bgcolor()" tabindex="0" aria-selected="true">
						<setting></setting>
					</el-tab-pane>
					<el-tab-pane label="设置头像" name="second" @click="bgcolor()" tabindex="-1">
						<headPortrait></headPortrait>
					</el-tab-pane>
				</el-tabs>
			</div>
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
.detail{
	width : 100%;
	height: 100%;
	background : url("../../static/syImg/timg (7).jpg");
	.details{
		width : 1200px;
		margin : 0 auto;
		overflow : hidden;
		margin-bottom : 80px;
		.btn{
			background:#999;
			color:white;
			border:none;
			width:60px;
			height:22px;
			font-size:16px;
			margin:10px 10px;
			border-radius: 2px;
			cursor: pointer;
			box-shadow: 2px 2px 2px 10px #999;
		}
		h2{
			margin-left : 100px;
			margin-top : 30px;
			font-size : 32px;
			color:brown;
			i{
				color:orange;
				font-size:36px;
				padding-right:10px;
			}
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
					color:pink;
				}
				.el-tabs__item.is-active {
					color:deeppink;
					width:150px;
					border-radius:20px;
				}
				/* .el-tabs__item.is-top:hover{
					color: #fbcf8d;
				}
				#tab-first{
					color: #fbcf8d;
				} */
				border-bottom: 3px dashed pink;

			}
		}

	}
}

</style>
