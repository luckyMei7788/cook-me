<template>
	<div class="details">
		<!-- <h2>设 置 个 人 中 心</h2>
		<div class="nav">
			<a href="#">基本信息</a>
			<a href="#">设置头像</a>
		</div> -->
		<form action="post">
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;昵称
				<input type="text" placeholder="请输入您的昵称">
				<span>七天之内只能修改一次</span>
			</p>
			<div class="person">
				<span>个人介绍</span>
				<textarea name="" id="" cols="70" rows="12"></textarea>
			</div>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性别
				
				<input type="radio" name="1" checked="checked">男
				<input type="radio" name="1">女
				
			</p>
			<div class="block birthday">
				<span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生日</span>
				<el-date-picker v-model="value1" type="date" placeholder="选择日期">
				
				</el-date-picker>
			</div>
			<div class="block">
				<span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地址</span>
				<el-select v-model="value5" multiple placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" >
					</el-option>	
				</el-select>
							
				<el-select v-model="value11" multiple collapse-tags style="margin-left: 20px;" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-input v-model="input" placeholder="请输入内容" class="address"></el-input>
			</div>
			<div class="block ">
				<span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;职业</span>
				<el-input v-model="input" placeholder="请输入内容" class="professional"></el-input>
			</div>
			<div class="last">
				<input type="button" value="确定" class="userInfo">
			</div>
			
		</form>
	</div>
</template>

<script>

export default {
	name : "setting",
	data() {
		return {
			pickerOptions: {
				disabledDate(time) {
					return time.getTime() > Date.now();
				}
			},
			value1: '',
			options : [],
			/* options: [{
				  value: '选项1',
				  label: '黄金糕'
			}, {
				  value: '选项2',
				  label: '双皮奶'
			}, {
				  value: '选项3',
				  label: '蚵仔煎'
			}, {
				  value: '选项4',
				  label: '龙须面'
			}, {
				  value: '选项5',
				  label: '北京烤鸭'
			}], */
			value5: [],
			value11: [],
			input: ''
		}
	},
	methods : {
		//地址的获取
		
	},
	
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
	/* width : 1200px;
	background: rgba(252, 248, 233, 0.8);
	margin : 0 auto;
	overflow : hidden;
	h2{
		margin-left : 100px;
		margin-top : 30px;
		font-size : 32px;
	}
	.nav{
		margin-left : 100px;
		a{
			display: inline-block;
			margin : 96px 0;
			margin-right : 180px;
			font-size : 30px;
			color : #000000;
		}
		a:nth-child(1){
			color : #fbcf8d;
		}
		a:nth-child(2):hover{
			color : #fbcf8d;
		}
	} */
	form{
		width : 1000px;
		min-height : 800px;
		margin-left : 100px;
		//margin-bottom: 60px;
		background: rgba(252, 248, 233, 0.8)!important;
		.el-input__inner{
			 width : 220px;
			 background: none;
			 border: 1px solid #000000;
			 font-size: 16px;
			 
		}
		//input文本框中placeholder字体颜色修改
		.el-input__inner::-webkit-input-placeholder{
			color: #000000;
		}
		input{
			font-size: 16px;
			color: #000000;
		}
		p:nth-child(1){
			font-size : 30px;
			height: 50px;
			line-height: 50px;
			input{
				outline: none;
				border: 1px solid #000000;
				width : 376px;
				height: 40px;
				position: relative;
				top : -6px;
				margin-left: 16px;
				background: none;
			}
			input::-webkit-input-placeholder{
				color : #000000;
			}
			span{
				font-size: 18px;
				position: relative;
				top : -4px;
				margin-left: 10px;
			}
		}
		.person{
			margin-top : 50px;
			span{
				position: relative;
				top : -156px;
				font-size : 30px;
			}
			textarea{
				outline: none;
				margin-left : 26px;
				background: none;
				border: 1px solid #000000;
				font-size: 20px;
			}
		}
		p:nth-child(3){
			font-size : 30px;
			input{
				width: 24px;
				height: 24px;
				margin: 70px 0 0;
				position: relative;
				top : 6px;
			}
			
			input:nth-child(1){
				margin-left: 70px;
			}
			input:nth-child(2){
				margin-left: 150px;
			}
		}
		.birthday{
			margin-top : 50px;
			line-height: 47px;
			.demonstration{
				font-size : 30px;
				margin-right : 22px;
				position: relative;
				top : 6px;
			}
		}
		.block{
			margin-top : 50px;
			.demonstration{
				font-size : 30px;
				margin-right : 22px;
				position: relative;
				top : 6px;
			}
			.address{
				width : 220px;
				margin-left : 20px;
			}
			.professional{
				width : 220px;
			}
		}
		.last{
			width: 100%;
			text-align: center;
			.userInfo{
				width : 120px;
				height: 40px;
				outline: none;
				background: none;
				border: 1px solid #000000;
				margin : 50px auto;
			}
		}
		
	}
}
</style>
