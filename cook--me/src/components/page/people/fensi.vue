<template>
    <div class="fans">
		<div class="fans-nav">
			<a href="#" @click="$router.push('/fensi')">粉丝</a>
			<a href="#" @click="$router.push('/guanzhu')">关注</a>
		</div>
		<div class="fans-section" >
			<div class="section" v-for="(items, index) in data" :key="index" >
				<div class="left">
					<div class="image" @click="another(items.usId)"><img :src="imgUrl+items.usHead" alt=""></div>
					<button @click="addAttention(items.id, items.attentionId, items.fansId, items.status)">+ 关注</button>
				</div>
				<div class="right">
					<p>{{items.usName}}</p>
					<span>粉丝</span>&nbsp; <i>{{items.usFanscount}}</i>
					<span>菜谱</span>&nbsp; <i>{{items.usBookcount}}</i>
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
        name: "fensi",
		data(){
			return{
				data : [],
				myAttention : [],
				imgUrl : "http://39.106.68.255/"
			}
		},
		methods:{
			//加关注
			addAttention(id, attention, fans, status){
				var status = status;
				if(status === 1){ //添加关注
					status = 0;
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
				}else{//取消关注
					var fansId = fans;
					var attentionId = attention;
					var status = status;
					//调取我的关注数据
					this.$axios.post("/cookme/sys/user/selectMyAttention").then(({data})=>{
						//console.log(data);
						//遍历我的关注
						for(var att in data){
							//console.log(data[att]);
							this.myAttention = data[att];
							//console.log(this.myAttention);
							if(this.myAttention.attentionId === fansId){
								status = 1;
								var id = this.myAttention.id;
								fansId = this.myAttention.attentionId;
								attentionId = this.myAttention.fansId;
								console.log(status, id, attentionId, fansId);
								//取消关注
								this.$axios.post("/cookme/sys/user/attention", {
									id,
									attentionId,
									fansId,
									status
								}).then(({data})=>{
									console.log(11111, data);
									if(data.code === 0){
										alert("取消关注成功")
									}else{
										alert(data.msg);
									}
								})
							}
						}
					})
				}
			},
			another(usId){
				var usId = usId;
				localStorage.usId = usId;
				console.log(usId);
				//跳转到他人主页
				this.$router.push({name : "anotherPerson"});
				// this.$router.push({name : "passwordLogin"});
			}
		},
		mounted(){
			//我的粉丝-关注我的人
			this.$axios.post("/cookme/sys/user/fans").then(({data})=>{
				this.data = data;
				console.log("粉丝的数据");
				console.log(data);
			})
		},
		
    }
</script>

<style scoped lang="less">
.fans{
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