<template>
	<div class="login-password">
		<div class="password-left">
			<img src="../../static/login/img/cook.png" alt="">
		</div>
		<div class="password-right2">
			<div class="passwordNav">
				<h3>登录</h3>
				<a href="#" @click="$router.push('/reg')">还没有账号,去注册<i class="iconfont">&#xe8ee</i></a>
			</div>
			<form action="post">
				<div class="phone-code">
					<p class="phone-code1">手机号&nbsp;&nbsp;<input type="text" placeholder="请输入手机号" ref="usMobile" @blur="hidePhone" @input="changePhone"></p>
					<p class="hint-code" v-show="showError">请输入正确的手机号</p>
				</div>
				<div class="phone-verifycode">
					<p class="phone-verifycode1">
						验证码&nbsp;
						<input type="text" placeholder="验证码" ref="verifycode">
						<input type="button" value="获取验证码" @click="getCode">
					</p>
					<p class="hint-code-last" v-show="codeError">请输入验证码</p>
				</div>
				<div class="login-code">
					<input type="button" class="loginButton" value="登录" @click="loginBtn"/>
					<p>
						<a href="#" class="verification-code" @click="$router.push('/passwordLogin')">密码登录<i class="iconfont">&#xe8ee</i></a>
					</p>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name : "login-by-code",
		data() {
			return {
				showError: false,//手机号错误提示信息
				codeError: false//验证码错误信息
			}
		},
		methods : {
			//手机号失焦事件
			hidePhone(){
				var usMobile = this.$refs.usMobile.value;
				if (usMobile != "") {
				    if (/^1(3|4|5|7|8|9)\d{9}$/.test(usMobile)) {
						console.log("手机号格式正确");
				    } else {
				        //console.log(111111, phoneNumber);
				        this.showError = true;
				    }
				}
			},
			//手机号文本框实时监控
			changePhone(){
			    if (this.$refs.usMobile.value != "") {
			        if (/^1(3|4|5|7|8|9)\d{9}$/.test(this.$refs.usMobile.value)) {
			            this.showError = false;
			            //console.log(2222, this.$refs.phoneNumber.value);
			        }
			    }
			},
			//获取验证码的点击事件
			getCode(){
				var usMobile = this.$refs.usMobile.value;
				if (usMobile!= "") {
				    if (/^1(3|4|5|7|8|9)\d{9}$/.test(usMobile)) {
				        //alert("验证码");
				        this.$axios.post("http://127.0.0.1/sys/user/findMobile", {
				            usMobile
				        }).then(({data})=>{
				            if(data.code === 0){
				                alert(data.msg)
				            }else{
								alert(data.msg);
							}
				        })   
				    } else {
				        this.showError = true;
				    }
				}else{
					alert("手机号不能为空");
				}
			},
			//登录按钮
			loginBtn(){
				var usMobile = this.$refs.usMobile.value;
				var verifycode = this.$refs.verifycode.value;
				//手机号和密码不为空且格式正确的情况下
				if (usMobile != "" && /^1(3|4|5|7|8|9)\d{9}$/.test(usMobile)) {
				    if (verifycode != "") {
				        //登录发送请求
						this.$axios.post("http://127.0.0.7/sys/user/mobileLogin", {
							usMobile,
							verifycode
						}).then(({data})=>{
							console.log(66666, data);
							if(data.code === 0){
								alert(data.msg);
								//登录成功跳转首页
								this.$router.push({name : "home"});
							}else{
								alert(data.msg);
							}
						})
				    }else{
						alert("验证码不能为空");
					}
				}else{
					alert("请输入正确的手机号");
				}
			}
		}
	}
</script>

<style lang="less">
body{
        width : 100%;
		height: 100%;
        //min-height : 580px;
        background : url("../../static/login/img/background.png") no-repeat;
        background-size : 100% 100%;
    }
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
	.password-right2{
		width : 50%;
		height : 496px;
		float : right;
		//background : greenyellow;
		margin-top :50px;
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
			.phone-code{
			    width: 400px;
			    margin: 86px auto 0;
				.phone-code1{
					/* width: 276px;
					height: 32px; */
					font-size: 20px;
					color: #fac371;
					margin: 36px auto 0;
					input{
					 	display: inline-block;
					    width: 234px;
					    height: 32px;
					    outline: none;
					    background: none;
					    font-size: 16px;
					    border: 1px solid #d5d5d5;
					 }
				} 
			}
			.hint-code{
				font-size: 14px;
			    line-height: 30px;
			    color: #fc5252;
			    margin-left: 72px;
			}
			.phone-verifycode{
				margin: 32px auto 0;
				.phone-verifycode1{
					font-size: 20px;
					color: #fac371;
					width : 400px;
					margin : 0 auto;
					input:nth-child(1){
						display: inline-block;
						width: 234px;
						height: 32px;
						outline: none;
						background: none;
						font-size: 16px;
						border: 1px solid #d5d5d5;
					}
					input:nth-child(2){
						width: 80px;
						height: 24px;
						outline: none;
						border: none;
						background: #fac370;
						color: #FFFFFF;
						border-radius: 6px;
						font-size: 14px;
					}
				}
				.hint-code-last{
					margin-left : 136px;
					font-size: 14px;
				    line-height: 30px;
				    color: #fc5252;
				}
			}
			.login-code{
				input{
					border: none;
					outline: none;
					background: #fac200;
					width: 234px;
					height: 36px;
					line-height: 36px;
					margin-left : 136px;
					margin-top : 76px;
					font-size: 22px;
					color: #FFFFFF;
					border-radius: 12px;
				}
				p{
					width: 320px;
				    margin: 32px auto 0;
					a{
						font-size: 16px;
					    color: #fac370;
					}
				}
			}
		}
	}
}

</style>
