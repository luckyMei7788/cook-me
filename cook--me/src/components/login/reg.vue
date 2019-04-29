<template>
    <div class="section">
        <div class="reg">
            <div class="regNav">
                <h3>新用户注册</h3>
                <a href="#" @click="$router.push('/passwordLogin')">已有账户，去登录<i class="iconfont">&#xe8ee</i></a>
            </div>
            <form action="post">
                <div class="phonePassWord">
                    <h3 class="first hint-input"><input type="text" ref="usMobile" placeholder="请输入手机号" @focus="hintMssage" @blur="hidePhone" @input="changePhone"/></h3>
                    <p v-show="isShow" class="hint">* 手机号长度11位，以13/14/15/16/17/18/19开头</p>
                    <p class="judge" v-show="showError">请输入正确手机号</p>
                </div>
                <div class="phonePassWord">
                    <h3 class=" hint-input"><input type="password" placeholder="请输入密码" @focus="showPassword" @blur="hidePassword" ref="usPassword" @input="changePassword"/></h3>
                    <p class="hint" v-show="isPassword">* 密码由4到16位(字母，数字，下划线)组成</p>
                    <p class="judge" v-show="isError">密码格式错误</p>
                </div>
                <div class="phonePassWord">
                    <h3 class="first hint-input"><input type="password" placeholder="确认密码" @blur="confirmPassword" ref="confirmNum" @input="reEnterPassword"/></h3>
                    <p class="judge" v-show="isConfirm">密码不一致</p>
                </div>
                <div class="authCode">
                    <input type="text" placeholder="请输入验证码" ref="verifyCode"/>
                    <input type="button" value="获取验证码"  @click="getCode"/>
                </div>
                <div class="agreement">
                    <input type="checkbox" v-model="isChecked"/>
                    <p>我已阅读且同意，<a href="#"><router-link to="userAgreement">《CookMe》用户协议</router-link></a> (点击用户协议跳转到用户协议界面)</p>
                </div>
                <div class="regButton">
                    <input type="button" class="regButton" value="注册" @click="regButton"/>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    export default {
        name: "reg",
        data() {
            return {
                isShow: false, //手机号提示信息
                showError: false, //手机号错误提示信息
                isPassword: false, //密码提示信息
                isError: false,//密码错误信息
                isConfirm: false, //密码确认
                isChecked : true
            }

        },
        methods: {
            // 手机文本框得焦事件
            hintMssage() {
                this.isShow = !this.isShow;
            },
            // 手机文本框失焦事件
            hidePhone() {
                this.isShow = !this.isShow;
                var usMobile = this.$refs.usMobile.value;
				console.log(usMobile);
                if (usMobile != "") {
                    if (/^1(3|4|5|7|8|9)\d{9}$/.test(usMobile)) {
                        //手机号后台验证
                        this.$axios.post("/cookme/sys/user/selectMobile", {
                            usMobile
                        }).then(({data})=>{
							console.log(data);
							if(data.code === 0){
								console.log("手机号可用")
							}else{
								alert(data.msg);
							}
                        })
						
                    } else {
                        //console.log(111111, usMobile);
                        this.showError = !this.showError;
                    }
                }
            },
            // 密码文本框得焦事件
            showPassword() {
                this.isPassword = !this.isPassword;
            },
            //密码文本框失焦事件
            hidePassword() {
                this.isPassword = !this.isPassword;
                var usPassword = this.$refs.usPassword.value;
                if (usPassword != "") {
                    if (/^[a-zA-Z0-9_]{4,16}$/.test(usPassword)) {
                        return usPassword;
                    } else {
                        this.isError = !this.isError;
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
                        this.isConfirm = !this.isConfirm;
                    }
                }
            },
            //发送验证码按钮的点击事件
            getCode() {
                //发送验证码只需要判断手机号符合规则即可
                var usMobile = this.$refs.usMobile.value;
                if (usMobile != "") {
                    if (/^1(3|4|5|7|8|9)\d{9}$/.test(usMobile)) {
                        /* this.$axios.get("/lh/sys/user/sendCode",{
							params : {usMobile}
						}).then(({data})=>{
                            console.log(data.msg);
                            if(data.code === 0){
                                //alert(data.msg);
                                console.log("测试测试测试");
                            }else{
                                alert(data.msg);
                            }
                        }) */  
						this.$axios.get("/cookme/sys/user/sendCode/"+usMobile).then(({data})=>{
							if(data.code === 0){
							    alert(data.msg);
							}else{
							    alert(data.msg);
							}
						})
						
                    } else {
                        this.showError = !this.showError;
                    }
                }else{
					alert("手机号不能为空");
				}
            },
            //注册按钮
            regButton(){
                var usMobile = this.$refs.usMobile.value; //手机号
                var usPassword = this.$refs.usPassword.value; //密码
				var confirmNum = this.$refs.confirmNum.value; //确认密码 
                var code = this.$refs.verifyCode.value; //验证码
				if (usMobile != "") { //手机号不能为空
                    if (/^1(3|4|5|7|8|9)\d{9}$/.test(usMobile)) {//手机号符合正则表达式
                        if (usPassword!= "") {//密码不为空
                            if (/^[a-zA-Z0-9_]{4,16}$/.test(usPassword)) {//密码符合规则
                                if (confirmNum != "") {//确认密码不为空
                                    if (usPassword === confirmNum) {
										if(code !=""){
											if(this.isChecked === true){
											    //注册信息的提交-地址栏传参数+json
											    this.$axios.post("/cookme/sys/user/register/"+code, {
											        usMobile,
											        usPassword,
											    }).then(({data})=>{
                                                    console.log(data);
                                                    if(data.code === 0){
                                                        alert(data.msg);
                                                        //注册成功跳转到密码登陆界面
								                        this.$router.push({name : "passwordLogin"});
                                                    }else{
                                                        alert(data.msg);
                                                    }
											    })
											}else{
											    alert("请认真阅读《CookMe用户协议》并勾选同意");
											}
										}else{
											alert("验证码不能为空");
										}
                                    } else {
                                        this.isConfirm = true;
                                    }
                                }else{
									alert("请确认密码");
								}
                            } else {
                                this.isError = true;
                            }
                        }else{
							alert("密码不能为空");
						}
                    } else {
                        this.showError = true;
                    }
                }else{
					alert("手机号不能为空");
				}
                
            },
            //手机号文本框的实时监控
            changePhone(){
                if (this.$refs.usMobile.value != "") {
                    if (/^1(3|4|5|7|8|9)\d{9}$/.test(this.$refs.usMobile.value)) {
                        this.showError = false;
                        //console.log(2222, this.$refs.usMobile.value);
                    }
                }
            },
            //密码文本框实时监控
            changePassword(){
                if (this.$refs.usPassword.value != "") {
                    if (/^[a-zA-Z0-9_]{4,16}$/.test(this.$refs.usPassword.value)) {
                        this.isError = false;
                        //console.log(this.$refs.passwordNum.value);
                    }
                }
            },
			//确认密码文本框的实时监控
			reEnterPassword(){
				var confirmNum = this.$refs.confirmNum.value;
				if(confirmNum != "" && this.$refs.usPassword.value === confirmNum) {
                    console.log("密码一致");
                    this.isConfirm = false;
				}
			}
        },
        mounted() {
           // console.log(this.$refs.usMobile)
        }
    }
</script>

<style lang="less">
    body{
        width : 100%;
		height: 100%;
        background : url("../../static/login/img/background.png") no-repeat;
        background-size : 100% 100%;
    }
    a{
        text-decoration: none ;
    }
    li{
        list-style: none;
    }
    /* 注册板块的内容 */
    .section .reg{
        width : 800px;
		min-height: 580px;
        margin : 80px auto 0;
        background: rgba(252, 248, 233, 0.8);
        overflow: hidden;
        /* 注册导航 */
        .regNav{
            width : 700px;
            height : 50px;
            line-height: 50px;
            margin : 20px auto 0;
            border-bottom: 1px solid #c7c7c7;
            h3{
                float: left;
                font-size: 26px;
                color: #000000;
            }
            a{
                float: right;
                font-size : 16px;
                color : #ffc000;
            }
        }
        /* 注册内容 */
        form{
            margin : 0 auto;
            h3{
                width : 320px;
                margin : 28px auto 0;
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
                font-size: 14px;
                color: #000000;
                width : 320px;
                margin : 12px auto;
            }
            .judge{
                font-size: 14px;
                color: #f40813;
                width : 320px;
                margin : 0 auto 12px;
                //display: none;
            }
            /* 验证码 */
            .authCode{
                width : 320px;
                height : 36px;
                margin : 28px auto 0;
                border-bottom: 1px solid #d6d5cd;
                input:nth-child(1){
                    border: none;
                    outline: none;
                    background: none;
                    display: inline-block;
                    float: left;
                    font-size: 16px;
                    color: #b3292f;
                }
                input:nth-child(2){
                    width : 80px;
                    height: 24px;
                    font-size: 14px;
                    color : #FFFFFF;
                    border : none;
                    border-radius: 6px;
                    outline: none;
                    background: #fac200;
                    display: inline-block;
                    float: right;
					cursor: pointer;
                }
            }
            .agreement{
                height : 36px;
                line-height: 36px;
                margin-top : 20px;
                margin-left : 240px;
                input{
                    display: inline-block;
                    float: left;
                    margin-top : 12px;
                    margin-right: 10px;
                }
                p{
                    float: left;
                    font-size : 14px;
                    color : #000;
                    a{
                        color : #fac200;
                    }
                    a:hover{
                        text-decoration: underline;
                    }
                }
            }
            /* 注册按钮 */
            .regButton{
                width : 320px;
                height : 66px;
                margin : 20px auto 0;
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
					cursor: pointer;
                }
            }
        }
    }





</style>