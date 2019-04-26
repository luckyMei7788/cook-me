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
				<div class="box">
					
					<img src="../../static/cai-img/mango.jpg">
					<span>芒果</span>
					<span>&nbsp2.50</span>	
				</div>
				<div class="box">
					<img src="../../static/cai-img/番茄.jpg">
					<span>番茄</span>
					<span>&nbsp2.50</span>	
				</div>
				<div class="box">
					<img src="../../static/cai-img/山鸡蛋.jpg">
					<span>山鸡蛋</span>
					<span>&nbsp2.50</span>
				</div>
				<div class="box">
					<img src="../../static/cai-img/前腿肉.jpg">
					<span>前腿肉</span>
					<span>&nbsp2.50</span>		
				</div>
				<div class="box">
					<img src="../../static/cai-img/红赤豆.jpg">
					<span>红赤豆</span>
					<span>&nbsp2.50</span>	
				</div>
				<div class="box">
					<img src="../../static/cai-img/莲子.jpg">
					<span>莲子</span>
					<span>&nbsp2.50</span>	
				</div>
			</div>
		</div>
		<div class="list-One two">
			<div class="sortName">
				<img src="../../static/cai-img/1.jpg">
				今日特惠
				<img src="../../static/cai-img/1.jpg">
			</div>
			<div class="picWall">
				<div class="box">
					
					<img src="../../static/cai-img/mango.jpg">
					<span>芒果</span>
					<span>&nbsp2.50</span>	
				</div>
				<div class="box">
					<img src="../../static/cai-img/番茄.jpg">
					<span>番茄</span>
					<span>&nbsp2.50</span>	
				</div>
				<div class="box">
					<img src="../../static/cai-img/山鸡蛋.jpg">
					<span>山鸡蛋</span>
					<span>&nbsp2.50</span>
				</div>
				<div class="box">
					<img src="../../static/cai-img/前腿肉.jpg">
					<span>前腿肉</span>
					<span>&nbsp2.50</span>		
				</div>
				<div class="box">
					<img src="../../static/cai-img/红赤豆.jpg">
					<span>红赤豆</span>
					<span>&nbsp2.50</span>	
				</div>
				<div class="box">
					<img src="../../static/cai-img/莲子.jpg">
					<span>莲子</span>
					<span>&nbsp2.50</span>	
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
				
			};
		}
	}
</script>

<style scoped lang="less">

	div{
		.list-One{
			/* margin-top: 31px; */
			width:1106px;
			height:435px;
			margin:0 auto;
			border: 1px solid #1e7902;
			
			.sortName{
				height:62px;
				width:1106px;
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
						height:230px;
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
					}
				}
			} 
		}
		.two{
			margin-top : 30px;
		}
	}
	
	
	
	
</style>
