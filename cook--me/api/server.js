const express = require('express');
const db = require('./module/db');
const bodyParser = require('body-parser');
const request = require("request");
const app = express();
app.use(bodyParser.json());
/************设置跨域**********************************/
app.all("*", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST. OPTIONS");
    next();
})

/***************发送验证码******************/
// app.post("/sys/user/selectMobile", function(req, res){
//     var context = req.body.context;
//     var url ="http://127.0.0.1/sys/user/selectMobile";
//     //URL请求的地址，第二个参数-回调，err报错信息，responseText返回信息，body返回所有信息
//     request(url, function(err, responseText,body){
//         if(!err && responseText.statusCode === 200){
//             let obj = JSON.parse(body);
//             res.json({
//                 obj,
//                 phoneId
//             })
//         }
//     })
// })

//发送手机号
app.post("/sys/user/selectMobile", function(req, res){
    var usMobile = req.body.usMobile;
    res.json({
        code : 0,
        msg : "手机号正确"
    }) 
})

//发送验证码
app.post("/sys/user/sendCode", function(req, res){
    var usMobile = req.body.usMobile;
    res.json({
        code : 1,
        msg : "验证码已发送",
        usMobile
    })
})
//注册按钮
app.post("/sys/user/register", function(req, res){
    var usMobile = req.body.usMobile;
    var usPassword = req.body.usPassword;
    var verifyCode = req.query.verifyCode;
    res.json({
        code : 0,
        msg : "注册成功",
        usMobile,
        usPassword,
        verifyCode
    })
})

//手机号密码登录
app.post("/sys/user/login", function(req, res){
	var usMobile = req.body.usMobile;
	var usPassword = req.body.usPassword;
	res.json({
		code : 0,
		msg : "登陆成功",
		usMobile,
		usPassword
	})
})
//手机号验证码登录-手机号验证
/* app.post("/sys/user/selectMobile", function(req, res){
	var usMobile = req.body.usMobile;
	var verifyCode = req.body.verifyCode;
	res.json({
		code : 0,
		msg : "验证码发送成功"
	})
}) */

//验证码登录-获取手机号
app.post("/sys/user/findMobile", function(req, res){
	var usMobile = req.body.usMobile;
	res.json({
		code : 0,
		msg : "验证码登录-发送验证码成功"
	})
})
//验证码登录
app.post("/sys/user/mobileLogin", function(req, res){
	var usMobile = req.body.usMobile;
	var verifyCode = req.body.verifyCode;
	res.json({
		code : 0,
		msg : "登录成功"
	})
})

//重置密码
app.post("/sys/user/resetPwd", function(req, res){
	var usMobile = req.body.usMobile;
	var usPassword = req.body.usPassword;
	res.json({
		code : 0,
		msg : "重置密码成功",
		usMobile,
		usPassword
	})
})
//重置密码-验证码验证
app.post("/sys/user/verifyCode", function(req, res){
	var usMobile = req.body.usMobile;
	var verifyCode = req.body.verifyCode;
	res.json({
		code : 0,
		msg : "验证成功",
		usMobile,
	})
})


app.listen(80, function(){
    console.log("success");
})