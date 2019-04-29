<template>
	<div class="details">
		<form action="post">
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;昵称
				<input type="text" placeholder="请输入您的昵称" ref="usName">
				<span>七天之内只能修改一次</span>
			</p>
			<div class="person">
				<span>个人介绍</span>
				<textarea name="" id="" cols="70" rows="12" ref="usMessage"></textarea>
			</div>
			<p class="sexuality">
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性别
				
				<input type="radio" name="1" checked="checked" value="0" @click="getSex">男
				<input type="radio" name="1" value="1" @click="getSex">女
				
			</p>
			<div class="block birthday">
				<span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生日</span>
				<el-date-picker v-model="value1" type="date" placeholder="选择日期" ref="usBirthday">
				
				</el-date-picker>
			</div>
			<div class="block">
				<span class="demonstration address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地址</span>
				
				<area-select :level="2" type="all" v-model="send_search_form.selected" :data="pcaa" :placeholders="placeholders" ref="usNowhome1">
					
				</area-select>
				<el-input v-model="input" placeholder="请输入详细地址" ref="usNowhome2" class="specificAddress"></el-input>
			</div>
			
			<div class="block ">
				<span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;职业</span>
				<el-input placeholder="请输入内容" class="professional" ref="usJob" v-model="job"></el-input>
			</div>
			<div class="last">
				<input type="button" value="确定" class="userInfo" @click="userInfoBtn">
			</div>
			
		</form>
	</div>
</template>

<script>
import {AreaSelect} from "vue-area-linkage";
import {pca, pcaa} from "area-data";
import 'vue-area-linkage/dist/index.css';
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
			value: [], 
			input: '',
			job : "",
			usSex : 0,
			pca : pca,
			pcaa : pcaa,
			placeholders : ["", "", ""],
			send_search_form : {
				orderCode : "",
				itemName : "",
				orderTime : [],
				consigneeName : "",
				state : "",
				selected : []
			},
		}	
	},
	methods : {
		//获取性别
		getSex(event){//获取目标事件源
			var sex = event.target.value;
			console.log(sex);
			this.usSex = sex;
		},
		
		//个人信息提交按钮
		userInfoBtn(){
			//获取个人信息
			var usName = this.$refs.usName.value;
			var usMessage = this.$refs.usMessage.value;
			var usSex = this.usSex;//获取data中的usSex
			var usBirthday = this.$refs.usBirthday.value;
			var usNowhome1 = this.$refs.usNowhome1.value; 
			var usNowhome2 = this.$refs.usNowhome2.value; 
			var Nowhome = "";
			var phone = "";
			//数组中放对象，先遍历数组获得对象然后遍历对象取value值
			usNowhome1.forEach(function(value, index){
				var phone = value;
				for(var key in phone){
					//console.log(phone[key]);
					Nowhome += phone[key];
					console.log(Nowhome);
				}
			})
			//地址拼接
			var usNowhome = Nowhome.concat(usNowhome2);
			var usId = 1;
			var usJob = this.$refs.usJob.value;
			console.log(usNowhome);
			this.$axios.put("/cookme/sys/user/changeInfoById", {
				usId,
				usName,
				usMessage,
				usSex,
				usBirthday,
				usNowhome,
				usJob
			}).then(({data})=>{
				console.log(data);
				if(data.code === 0){
					alert("设置成功");
				}else{
					alert("设置失败")
				}
			}) 
		}
	},
	component : {
		AreaSelect : AreaSelect
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
.el-tabs__content{
	.el-tab-pane{
		border: none;
		outline: none;
	}
}
.details{
	form{
		padding-left: 40px;
		// padding-right: 40px;
		width : 1080px;
		min-height : 800px;
		margin-left : 100px;
		margin-top:20px;
		padding-top:20px;
		background:rgba(187,194,195,.3);
		color:#7d0035;
		.el-input__inner{
			 width : 200px;
			 background: none;
			 border: 1px solid #999;
			 font-size: 16px;
		}
		//input文本框中placeholder字体颜色修改
		.el-input__inner::-webkit-input-placeholder{
			color: #7d0035;
		}
		input{
			font-size: 16px;
			color: #7d0035;
		}
		p:nth-child(1){
			font-size : 30px;
			height: 50px;
			line-height: 50px;
			input{
				outline: none;
				border: 1px solid #999;
				width : 376px;
				height: 40px;
				position: relative;
				top : -6px;
				margin-left: 16px;
				background: none;
				color : #7d0035;
			}
			input::-webkit-input-placeholder{
				color : #7d0035;
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
				top : -338px;
				font-size : 30px;
			}
			textarea{
				outline: none;
				margin-left : 26px;
				background: none;
				border: 1px solid #999;
				font-size: 20px;
				color : #7d0035;
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
				top : 14px;
			}
			.professional{
				width : 200px;
			}
			.area-select-wrap{
				display: inline-block;
				background: none;
				//float: left;
				.area-select{
					display: inline-block;
					width : 200px;
					height: 40px;
					margin-left: 0;
					margin-right: 14px;
					background: none;
					border: 1px solid #999;
					.area-selected-trigger{
						color: #7d0035;
						font-size: 16px;
					}
				}	
			}
			.specificAddress{
				width: 200px;
				float: right;
				position: relative;
				top: 18px;
				left: -102px;
				.el-input__inner{
					margin-left : 60px;
				}
			}
		}
		.last{
			width: 100%;
			text-align: center;
			.userInfo{
				width : 140px;
				height: 40px;
				color:white;
				font-size:20px;
				outline: none;
				border: none;
				background: deeppink;
				border-radius: 10px;
				border: none;
				color:white;
				margin : 50px auto;
			}
		}
		
	}
}
</style>
