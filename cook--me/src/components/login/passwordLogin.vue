<template>
	<div class="login-password">
		<div class="password-left">
			<img src="../../static/login/img/cook.png" alt="">
		</div>
		<div class="password-right1">
			<div class="passwordNav">
				<h3>登录</h3>
				<a href="#" @click="$router.push('/reg')">还没有账号,去注册<i class="iconfont">&#xe8ee</i></a>
			</div>
			<form action="post">
				<div class="phoneId first">
					<p class="phone">账号&nbsp;&nbsp;<input type="text" placeholder="请输入手机号" ref="usMobile" @blur="hidePhone" @input="changePhone"></p>
					<p class="hint" v-show="showError">请输入正确的手机号</p>
				</div>
				<div class="phonePassWord">
					<p class="phone">密码&nbsp;&nbsp;<input type="password" placeholder="请输入密码" @blur="hidePassword" ref="usPassword" @input="changePassword"></p>
					<p class="hint" v-show="isError">请输入正确的密码</p>
				</div>
				<div class="login">
					<input type="button" class="loginButton" value="登录" @click="loginBtn"/>
					<p>
						<a href="#" class="verification-code" @click="$router.push('/loginByCode')">验证码登录<i class="iconfont">&#xe8ee</i></a>
						<a href="#" class="forget" @click="$router.push('/resetCode')">忘记密码</a>
					</p>
				</div>
			</form>
		</div>
	</div>

</template>

<script>
	export default {
		name : "password-login",
		data() {
			return {
				showError: false,//手机号错误提示信息
				isError: false//密码错误信息
			};
		},
		methods : {
			//手机号文本框失焦事件
			hidePhone(){
				var usMobile = this.$refs.usMobile.value;
				if (usMobile != "") {
				    if (/^1(3|4|5|7|8|9)\d{9}$/.test(usMobile)) {
						console.log("手机号格式正确");
				    } else {
				        //console.log(111111, usMobile);
				        this.showError = true;
				    }
				}
			},
			//手机号文本框实时监控
			changePhone(){
			    if (this.$refs.usMobile.value != "") {
			        if (/^1(3|4|5|7|8|9)\d{9}$/.test(this.$refs.usMobile.value)) {
			            this.showError = false;
			            //console.log(2222, this.$refs.usMobile.value);
			        }
			    }
			},
			//密码文本框失焦事件
			hidePassword() {
			    var usPassword = this.$refs.usPassword.value;
			    if (usPassword != "") {
			        if (/^[a-zA-Z0-9_]{4,16}$/.test(usPassword)) {
						console.log("密码格式正确");
			        } else {
			            this.isError = true;
			        }
			    }
			},
			//密码框实时监控
			changePassword(){
			    if (this.$refs.usPassword.value != "") {
			        if (/^[a-zA-Z0-9_]{4,16}$/.test(this.$refs.usPassword.value)) {
			            this.isError = false;
			            //console.log(this.$refs.passwordNum.value);
			        }
			    }
			},
			//登录按钮
			loginBtn(){
				var usMobile = this.$refs.usMobile.value;
				var usPassword = this.$refs.usPassword.value;
				//手机号和密码不为空且格式正确的情况下
				if (usMobile != "" && /^1(3|4|5|7|8|9)\d{9}$/.test(usMobile)) {
				    if (usPassword != "" && /^[a-zA-Z0-9_]{4,16}$/.test(usPassword)) {
				        //登录发送请求
						this.$axios.post("http://127.0.0.7/sys/user/login", {
							usMobile,
							usPassword
						}).then(({data})=>{
							if(data.code === 0){
								//console.log(data);
								alert(data.msg);
								//登录成功跳转首页
								this.$router.push({name : "home"});
								// console.log(111111, "登陆成功");
							}else{
								alert(data.msg);
							}
						})
				    }else{
						alert("密码不能为空");
					}
				}else{
					alert("请输入手机号");
				}
			}
		}
	}
</script>

<style lang="less">	
/*密码登陆模块 */
.login-password{
	width : 1064px;
	min-height : 492px;
	margin : 80px auto 0;
	background: rgba(252, 248, 233, 0.8);
	overflow: hidden;
	.password-left{
		width : 50%;
		height : 496px;
		border-right: 1px solid #c7c7c7;
		float : left;
		margin-top : 50px;
		text-align: center;
		img{
			//vertical-align: middle;
			display: block;
			width : 460px;
			height : 350px;
			margin : 74px auto 0;
		}
	}
	/* 密码登陆右侧内容 */
	.password-right1{
		width : 50%;
		height : 496px;
		float : right;
		//background : greenyellow;
		margin-top : 50px;
		/* 密码登陆头部导航 */
		.passwordNav{
			width : 448px;
			height : 42px;
			line-height: 42px;
			margin : 0 auto;
			border-bottom: 1px solid #d6d4d5;
			h3{
				float: left;
				font-size: 26px;
				color: #000000;
				padding-bottom: 20px;
			}
			a{
				float: right;
				font-size : 16px;
				color : #ffc000;
			}
		}
		form{
			 .phone{
				font-size : 20px;
				color : #fac371;
				width : 330px;
				margin : 36px auto 0;
			}
			.first{
				margin-top : 86px;
			}
			.phone{
				input{
					display: inline-block;
					width : 276px;
					height : 32px;
					outline: none;
					background: none;
					font-size: 16px;
					border : 1px solid #d5d5d5;	
				}
			}
			.hint{
				font-size : 14px;
				line-height: 24px;
				color: #fc5252;
				margin-left: 152px;
			}
			.login{
				width : 320px;
				height : 66px;
				margin : 86px auto 0; 
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
				}
				p{
					width : 320px;
					margin : 28px auto 0;
					a{
						font-size : 16px;
						color: #fac370;
					}
					.verification-code{
						float : left;
					}
					.forget{
						float : right;
					}
				}
			}
		}
	}
}
</style>



















</style>
