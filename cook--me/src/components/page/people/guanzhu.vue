<template>
    <div class="fans">
    	<div class="fans-nav">
    		<a href="#" @click="$router.push('/fensi')">粉丝</a>
    		<a href="#" @click="$router.push('/guanzhu')">关注</a>
    	</div>
		<div class="fans-section">
			<div class="section" v-for="items in data" >
				<div class="left">
					<div class="image" @click="another(items.usId)"><img :src="imgUrl+items.usHead" alt=""></div>
					<button @click="cancelAttention(items.id, items.attentionId, items.fansId, items.status)">取 关</button>
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
    </div>
</template>

<script>
    export default {
        name: "guanzhu",
		data(){
			return{
				data : "",
				imgUrl : "http://39.106.68.255/"
			}
		},
		methods:{
			//我的关注-取消关注
			cancelAttention(id, attention, fans, status){
				var id = id;
				var attentionId = attention;
				var fansId = fans;
				var status = status;
				console.log(id, status, fansId, attentionId);
				if(status === 1){ //单方关注状态
					//取消关注
					this.$axios.post("/cookme/sys/user/attention", {
						id,
						attentionId,
						fansId,
						status
					}).then(({data})=>{
						console.log(data);
						//alert("取消关注成功");
						if(data.code === 0){
							alert("取消关注成功")
						}else{
							alert(data.msg);
						}
					})
				}else{//双方关注的状态
					status = 1;
					//取消关注
					this.$axios.post("/cookme/sys/user/attention", {
						id,
						attentionId,
						fansId,
						status
					}).then(({data})=>{
						console.log(data);
						alert("取消关注成功");
						/* if(data.code === 0){
							alert("取消关注成功")
						}else{
							alert(data.msg);
						} */
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
			//我关注的人
			this.$axios.post("/cookme/sys/user/selectMyAttention").then(({data})=>{
				console.log("我的关注数据");
				console.log(data);
				this.data = data;
			})
		}
    }
</script>

<style scoped lang="less">
.fans{
	min-height: 600px;
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
				margin-left: 30px;
				p{
					font-size : 30px;
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