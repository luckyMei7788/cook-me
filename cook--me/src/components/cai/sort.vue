<template>
	<div>
		<!-- goodsList -->
		<div class="list-One">
			<div class="sortName">
				<img src="../../static/cai-img/1.jpg">
				今日特惠
				<img src="../../static/cai-img/1.jpg">
			</div>
			<div class="picWall">
				<div class="box" v-for="(item,index) in picUrlOne" @click="transId(index)">
					<div><img :src="JavaUrl+item.productImages" /> </div>
					<span>{{item.productName}}</span>
					<span>&nbsp;{{item.price}}</span>	
				</div>

			</div>
		</div>
		
		<div class="list-Two">
			<div class="sortName">
				<img src="../../static/cai-img/1.jpg">
				蔬菜水果
				<img src="../../static/cai-img/1.jpg">
			</div>
			<div class="picWall">
				<div class="box" v-for="(item,index) in picUrlOne" @click="transId1(index)">
					<div><img :src="JavaUrl+item.productImages" /> </div>
					<span>{{item.productName}}</span>
					<span>&nbsp;{{item.price}}</span>	
				</div>
		
			</div>
		</div>
		<div class="list-Three">
			<div class="sortName">
				<img src="../../static/cai-img/1.jpg">
				家禽肉类
				<img src="../../static/cai-img/1.jpg">
			</div>
			<div class="picWall">
				<div class="box" v-for="(item,index) in picUrlTwo" @click="transId2(index)">
					<div><img :src="JavaUrl+item.productImages" /> </div>
					<span>{{item.productName}}</span>
					<span>&nbsp;{{item.price}}</span>	
				</div>
		
			</div>
		</div>
		<div class="list-Four">
			<div class="sortName">
				<img src="../../static/cai-img/1.jpg">
				水产冻品
				<img src="../../static/cai-img/1.jpg">
			</div>
			<div class="picWall">
				<div class="box" v-for="(item,index) in picUrlThree" @click="transId3(index)">
					<div><img :src="JavaUrl+item.productImages" /> </div>
					<span>{{item.productName}}</span>
					<span>&nbsp;{{item.price}}</span>	
				</div>
		
			</div>
		</div>
		<div class="list-Five">
			<div class="sortName">
				<img src="../../static/cai-img/1.jpg">
				豆腐禽蛋
				<img src="../../static/cai-img/1.jpg">
			</div>
			<div class="picWall">
				<div class="box" v-for="(item,index) in picUrlFive" @click="transId4(index)">
					<div><img :src="JavaUrl+item.productImages" /> </div>
					<span>{{item.productName}}</span>
					<span>&nbsp;{{item.price}}</span>	
				</div>
		
			</div>
		</div>
		<div class="list-Six">
			<div class="sortName">
				<img src="../../static/cai-img/1.jpg">
				干货粮油
				<img src="../../static/cai-img/1.jpg">
			</div>
			<div class="picWall">
				<div class="box" v-for="(item,index) in picUrlSix" @click="transId5(index)">
					<div><img :src="JavaUrl+item.productImages" /> </div>
					<span>{{item.productName}}</span>
					<span>&nbsp;{{item.price}}</span>	
				</div>
		
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : "sort",
		data() {
			return {
				picUrlOne:[],
				picUrlTwo:[],
				picUrlThree:[],
				picUrlFour:[],
				picUrlFive:[],
				picUrlSix:[],
				JavaUrl:"http://39.106.68.255/"
			};	
		},
		methods:{
			transId(id){
				console.log(id);
				console.log(this.picUrlOne[id].productId);
				var id = this.picUrlOne[id].productId;
				this.$router.push({name:"green",query:{Aid:id}});
				
			},
			transId1(id){
				console.log(id);
				console.log(this.picUrlOne[id].productId);
				var id = this.picUrlOne[id].productId;
				this.$router.push({name:"green",query:{Aid:id}});

			},
			transId2(id){
				console.log(id);
				console.log(this.picUrlTwo[id].productId);
				var id = this.picUrlTwo[id].productId;
				this.$router.push({name:"green",query:{Aid:id}});

			},
			transId3(id){
				console.log(id);
				console.log(this.picUrlThree[id].productId);
				var id = this.picUrlThree[id].productId;
				this.$router.push({name:"green",query:{Aid:id}});

			},
			transId4(id){
				console.log(id);
				console.log(this.picUrlFive[id].productId);
				var id = this.picUrlFive[id].productId;
				this.$router.push({name:"green",query:{Aid:id}});

			},
			transId5(id){
				console.log(id);
				console.log(this.picUrlSix[id].productId);
				var id = this.picUrlSix[id].productId;
				this.$router.push({name:"green",query:{Aid:id}});

			}
		},
		// /sys/product/index
// 		mounted(){
// 			this.$axios.post("/cookme/sys/product/index"
// 				// price
// 			).then(({data})=>{
// 			console.log("商品渲染");
// 			 console.log(data);		
// 			})
// 		}
//菜市场首页 商品渲染
		mounted(){
			this.$axios.post("/cookme/sys/product/index"
			).then(({data})=>{
				this.picUrlOne = data.sort0;
				this.picUrlTwo = data.sort1;
				this.picUrlThree = data.sort2;
				this.picUrlFour = data.sort3;
				this.picUrlFive = data.sort4;
				this.picUrlSix = data.timeProduct;
				console.log(data);
// 				console.log(data.sort0[1].sort,data.sort1[1].sort,data.sort2[1].sort,data.sort3[1].sort,data.sort4[1].sort,data.timeProduct[1].sort);
				console.log(this.picUrlOne);
				console.log(this.picUrlTwo);
				console.log(this.picUrlThree);
				console.log(this.picUrlFour);
				console.log(this.picUrlFive);
				console.log(this.picUrlSix);
			})
		}
	
	}
</script>

<style scoped lang="less">

	div{
		.list-One , .list-Two , .list-Three , .list-Four , .list-Five ,.list-Six{
			/* margin-top: 31px; */
			width:1106px;
			overflow: hidden;
			height:435px;
			margin:0 auto;
			border: 1px solid #1e7902;
			margin-bottom : 30px;
			.sortName{
				height:62px;
				width:1104px;
				font-size: 18px;
				line-height: 62px;
				text-align: center;
				background: #8fcf7b;
			}
			.picWall{
				width : 100%;
				height : 374px;
				.box{
					width : 184px;
					height : 370px;
					background : #f6f6f6;
					float: left;
					img{
						height:210px;
						width:166px;
						margin : 24px 9px 0 ;
						vertical-align: center;
						//float:left;
					}
					span{
						display: block;
						line-height: 30px;
						text-align: center;
						margin : 10px auto 0;
						font-size: 16px;
					}
				}
			} 
		}

	
	}
	
	
	
	
</style>
