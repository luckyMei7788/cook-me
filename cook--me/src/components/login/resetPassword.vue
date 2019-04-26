<template>
	<div class="resetPassword">
		<div class="reset">
			<a href="#" @click="$router.push('/resetCode')"><i class="iconfont">&#xe7ec</i>返回</a>
			<h3>重 置 密 码</h3>
		</div>
		<form action="post">
		    <div class="phonePassWord">
		        <p class=" hint-input">新的密码&nbsp;&nbsp;<input type="password" placeholder="新的密码" @blur="hidePassword" ref="usPassword" @input="changePassword"/></p>
		        <p class="hint" v-show="showError">* 密码由4到16位(字母，数字，下划线)组成</p>
		    </div>
		    <div class="phonePassWord">
		        <p class="first hint-input">确认密码&nbsp;&nbsp;<input type="password" placeholder="确认密码" @blur="confirmPassword" ref="confirmNum" @input="reEnterPassword"/></p>
		        <p class="hint" v-show="isError">* 密码不一致</p>
		    </div>
		    <div class="submitButton">
		        <input type="button" value="提交" @click="resetBtn"/>
		    </div>
		</form>
	</div>
</template>

<script>
	export default {
		name : "reset-password",
		data() {
			return {
				isShow : false,
				showError: false,//密码错误信息
				isError: false//确认密码提示信息
			};
		},
		methods : {
			//重置密码框失焦事件
			hidePassword() {
			    var usPassword = this.$refs.usPassword.value;
			    if (usPassword != "") {
			        if (/^[a-zA-Z0-9_]{4,16}$/.test(usPassword)) {
			            console.log("密码格式正确");
			        } else {
			            this.showError = !this.showError;
			        }
			    }else{
					alert("密码不能为空");
				}
			},
			//密码文本框实时监控
			changePassword(){
				var usPassword = this.$refs.usPassword.value;
			    if (usPassword!= "") {
			        if (/^[a-zA-Z0-9_]{4,16}$/.test(usPassword)) {
			            this.showError = false;
			        }
			    }
			},
			//确认密码文本框失焦事件
			confirmPassword() {
			    var confirmNum = this.$refs.confirmNum.value;
			    if (confirmNum != "") {
			        if (this.$refs.usPassword.value === confirmNum) {
			            console.log("密码一致");
			        } else {
			            this.isError = true;
			        }
			    }
			},
			//确认密码的实时监控
			reEnterPassword(){
				var confirmNum = this.$refs.confirmNum.value;
				if(confirmNum != "" && this.$refs.usPassword.value === confirmNum) {
			        console.log("密码一致");
			        this.isError = false;
				}
			},
			//修改密码提交按钮的点击事件
			resetBtn(){
				var usMobile = localStorage.usMobile;
				var usPassword = this.$refs.usPassword.value;
				var confirmNum = this.$refs.confirmNum.value;
				if (usPassword != "" && /^[a-zA-Z0-9_]{4,16}$/.test(usPassword)) {
					if(confirmNum === usPassword){
						//重置密码发送请求
						this.$axios.post("/lh/sys/user/resetPwd", {
							usMobile,
							usPassword
						}).then(({data})=>{
							console.log(data);
							if(data.code === 0){
								alert(data.msg);
								//重置密码成功跳转到密码登录页面
								this.$router.push({name : "passwordLogin"});
							}else{
								alert(data.msg)
							} 
						})
					}else{
						alert("密码不一致");
					}
				}else{
					alert("密码不能为空");
				}
			}
		}
	}
</script>

<style lang="less">
body{
		width : 100%;
		min-height: 800px;
		//min-height : 580px;
		background : url("../../static/login/img/background.png") no-repeat;
		background-size : 100% 100%;
	}
.resetPassword{
	width : 800px;
	min-height : 592px;
	margin : 80px auto 0;
	background: rgba(252, 248, 233, 0.8);
	overflow: hidden;
	.reset{
		a{
			font-size : 26px;
			color : #fac370;
			.iconfont{
				font-size : 26px;
				color : #fac370;
				margin-left : 20px;
			}
		}
	}
	h3{
		font-size : 60px;
		font-weight: normal;
		color : #fac370;
		text-align: center;
		margin-top : 30px;
	}
	form{
	    margin : 0 auto;
	    p{
	        width : 420px;
	        margin : 30px auto 0;
	        input{
	             border: 1px solid #d6d5cd;
	             outline:none;
	             background: none;
	             width : 320px;
	             height : 40px;
	             margin : 0 auto ;
	             font-size: 16px;
	             color : #000000;
	        }
	    }
		.hint{
			margin-left : 280px;
			color: #fc5252;
			margin-top : 10px;
		}
		.submitButton{
			width : 320px;
			height : 66px;
			margin : 66px auto 0; 
			input{
				border: none;
				outline:none;
				background: #fac200;
				width : 320px;
				height : 36px;
				line-height: 36px;
				margin : 0 auto;
				font-size: 22px;
				color: #FFFFFF;
				border-radius: 12px;
				//margin-left : 40px;
			}
		}
		.hint-input{
			font-size : 20px;
			color : #fac371;
		}
	}
}	
  


</style>
