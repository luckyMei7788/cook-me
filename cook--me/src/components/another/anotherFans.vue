<template>
	<div class="anotherFans">
		<div class="fans-nav">
			<a href="#" @click="$router.push('/anotherFans')">粉丝</a>
			<a href="#" @click="$router.push('/anotherAttention')">关注</a>
		</div>
		<div class="fans-section" >
			<div class="section" v-for="item in fansInfo">
				<div class="left">
					<div class="image"><img :src="imgUrl+item.usHead" alt=""></div>
					<button >+ 关注</button>
					<!-- <button @click="addAttention(item.id, item.attentionId, item.fansId, item.status)">+ 关注</button> -->
				</div>
				<div class="right">
					<p>{{item.usName}}</p>
					<span>粉丝</span>&nbsp; <i>{{item.usFanscount}}</i>
					<span>菜谱</span>&nbsp; <i>{{item.usBookcount}}</i>
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
		name:"another-fans",
		data() {
			return {
				fansInfo : "",
				imgUrl : "http://39.106.68.255/"
			};
		},
		methods:{
			//查看别人的主页-加关注
			/* addAttention(id, attention, fans, status){
				var status = status;
				if(status === 1){ //添加关注
					var id = id;
					var fansId = attention;
					var attentionId = fans;
					console.log(status, fansId, attentionId);
					//添加关注
					this.$axios.post("/cookme/sys/user/attention", {
						attentionId,
						fansId,
						status
					}).then(({data})=>{
						//console.log(data);
						alert("添加关注成功");
					})
				}
			} */
		},
		mounted() {
			//页面加载后渲染粉丝信息
			var usId = localStorage.usId;
			this.$axios.get("/cookme/sys/user/selectOtherFans?usId="+usId).then(({data})=>{
				console.log(data);
				this.fansInfo = data;
			})
		}
	}
</script>

<style lang="less">
.anotherFans{
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
		a:nth-child(1){
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
