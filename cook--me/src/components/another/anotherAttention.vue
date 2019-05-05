<template>
	<div class="anotherAttention">
		<div class="fans-nav">
			<a href="#" @click="$router.push('/anotherFans')">粉丝</a>
			<a href="#" @click="$router.push('/anotherAttention')">关注</a>
		</div>
		<div class="fans-section" >
			<div class="section" v-for="item in 9">
				<div class="left">
					<div class="image"><img src="../../static/login/img/guanzhu.jpg" alt=""></div>
					<button>+ 关注</button>
				</div>
				<div class="right">
					<p>他人关注</p>
					<span>粉丝</span>&nbsp; <i>0</i>
					<span>菜谱</span>&nbsp; <i>0</i>
				</div>	
			</div>	
		</div>
		<div class="fans-bottom">
			<button>上一页</button>
			<button>下一页</button>
		</div>
	</div>
</template>

<script>
	export default {
		name:"another-attention",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.anotherAttention{
	.fans-nav{
		width: 1110px;
		margin: 50px auto;
		border-bottom : 3px dashed pink;
		a{
			font-size : 24px;
			color : #9A9895;
			display: inline-block;
			margin-left : 130px;
			margin-bottom : 30px;
		}
		a:hover{
			color : deeppink;
		}
		a:nth-child(2){
			color : deeppink;
		}
	}
	.fans-section{
		width: 1110px;
		margin: 50px auto;
		.section{
			width : 366px;
			height: 250px;
			float: left;
			margin-bottom : 50px;
			cursor: pointer;
			.left{
				width : 154px;
				height: 100%;
				float: left;
				text-align-last: center;
				.image{
					display: block;
					width : 154px;
					height: 154px;
					border-radius: 50%;
					overflow: hidden;
					img{
						width : 154px;
						height: 154px;
					}
				}
				button{
					width : 140px;
					height : 40px;
					border-radius: 20px;
					font-size : 20px;
					background: none;
					margin-top: 30px;
					border: 1px solid #000;
					outline: none;
					cursor: pointer;
				}
			}
			.right{
				float: left;
				margin-left: 20px;
				p{
					font-size : 24px;
					margin-top : 20px;
					margin-bottom : 30px;
				}
				span{
					font-size: 16px;
				}
				i{
					margin-right: 36px;
				}
			}
		}
	}
	.fans-bottom{
		text-align: center;
		clear: both;
		button{
			width : 140px;
			height: 50px;
			font-size: 20px;
			margin-right: 60px;
			margin-bottom: 100px;
			background: lightgrey;
			border-radius: 10px;
			outline: none;
			box-shadow: 0 8px 16px rgba(0,0,0,0.2);
			cursor: pointer;
		}
	}
}
</style>
