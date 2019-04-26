<template>
	<div class="resetPassword">
		<div class="reset">
			<a href="#" @click="$router.push('/passwordLogin')"><i class="iconfont">&#xe7ec</i>返回</a>
			<h3>手 机 验 证</h3>
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
				<input type="button" class="loginButton" value="验证" @click="loginBtn"/>
				
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name : "reset-code",
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
				        /* this.$axios.post("/lh/sys/user/sendCode", {
				            usMobile
				        }).then(({data})=>{
				            if(data.R.code === 0){
				                console.log(data.R.msg);
				            }else{
								alert(data.R.msg);
							}
				        }) */ 
						 this.$axios.get("/lh/sys/user/sendCode/"+usMobile).then(({data})=>{
						 	if(data.code === 0){
						 	    console.log(data.msg);
								console.log(data)
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
			//验证码验证按钮
			loginBtn(){
				var usMobile = this.$refs.usMobile.value;
				var code = this.$refs.verifycode.value;
				//将手机号存到localStorage中
				localStorage.usMobile = usMobile;
				//手机号和密码不为空且格式正确的情况下
				if (usMobile != "" && /^1(3|4|5|7|8|9)\d{9}$/.test(usMobile)) {
				    if (code != "") {
				        //登录发送请求
						this.$axios.post("/lh/sys/user/verifyCode?usMobile="+usMobile+"&code="+code).then(({data})=>{
							//console.log(66666, data);
							if(data.code === 0){
								alert(data.msg);
								//同页面的跳转
								this.$router.push({name : "resetPassword"});
								// console.log(111111, "登陆成功");
							}else{
								alert(data.msg);
							}
						})
				    }else{
						alert("验证码不能为空");
					}
				}else{
					alert("手机号不能为空");
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
	min-height : 492px;
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
		.phone-code{
		    width: 400px;
		    margin: 66px auto 0;
			.phone-code1{
				/* width: 276px;
				height: 32px; */
				font-size: 20px;
				color: #fac371;
				margin: 36px auto 0;
				input{
				 	display: inline-block;
				    width: 280px;
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
			margin-top : 0px;
		}
		.phone-verifycode{
			margin: 32px auto 0;
			.phone-verifycode1{
				font-size: 20px;
				color: #fac371;
				width : 434px;
				margin : 0 auto;
				margin-left : 200px;
				input:nth-child(1){
					display: inline-block;
					width: 280px;
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
				margin: 76px auto 0;
				margin-left : 272px;
				font-size: 22px;
				color: #FFFFFF;
				border-radius: 12px;
			}
			p{
				width: 320px;
			    margin: 20px auto 0;
				a{
					font-size: 16px;
				    color: #fac370;
				}
			}
		}
	}
}
</style>
