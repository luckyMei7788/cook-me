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
        R : {
			code : 0,
			msg : "手机号正确"
		}
    }) 
})

//发送验证码
app.post("/sys/user/sendCode", function(req, res){
    var usMobile = req.body.usMobile;
    res.json({
        R : {
			code : 1,
			msg : "验证码已发送",
			usMobile
		}
    })
})
// app.get(*,function(req,res){
// 	
// 	request("")
// })
//注册按钮
app.post("/sys/user/register", function(req, res){
// 	request("",function(err,response,body){
// 		res.json()
// 	})
    var usMobile = req.body.usMobile;
    var usPassword = req.body.usPassword;
    var verifyCode = req.query.verifyCode;
    res.json({
        R : {
			code : 0,
			msg : "注册成功",
			usMobile,
			usPassword,
			verifyCode
		}
    })
})

//手机号密码登录
app.post("/sys/user/login", function(req, res){
	var usMobile = req.body.usMobile;
	var usPassword = req.body.usPassword;
	res.json({
		R : {
			code : 0,
			msg : "登陆成功",
			usMobile,
			usPassword
		}
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
		R : {
			code : 0,
			msg : "验证码登录-发送验证码成功"
		}
	})
})
//验证码登录
app.post("/sys/user/mobileLogin", function(req, res){
	var usMobile = req.body.usMobile;
	var verifyCode = req.body.verifyCode;
	res.json({
		R : {
			code : 0,
			msg : "登录成功"
		}
	})
})

//重置密码
app.post("/sys/user/resetPwd", function(req, res){
	var usMobile = req.body.usMobile;
	var usPassword = req.body.usPassword;
	res.json({
		R : {
			code : 0,
			msg : "重置密码成功",
			usMobile,
			usPassword
		}
	})
})
//重置密码-验证码验证
app.post("/sys/user/verifyCode", function(req, res){
	var usMobile = req.body.usMobile;
	var verifyCode = req.body.verifyCode;
	res.json({
		R : {
			code : 0,
			msg : "验证成功",
			usMobile,
		}
	})
})


//***************************************shopping*****************************************
app.post("/sys/user/selectCommodityDetails",function (req,res) {
	console.log(req.body);
	res.json({
		product:{
			"productId":1,
			"productName":"金针菇",
			"price":5,
			"unit":"g",
			"sales":16,
			"merit":"1、金针菇氨基酸的含量非常丰富，高于一般菇类，尤其是赖氨酸的含量特别高，赖氨酸具有促进儿童智力发育的功能。\n" +
				"2、金针菇，不仅可以预防和治疗肝脏病，而且也适合高血压患者、肥胖者和中老年人食用，这主要是因为它是一种高钾低钠食品[2]\n" +
				"3、金针菇可抑制血脂升高，降低胆固醇，防治心脑血管疾病。食用金针菇具有抵抗疲劳、抗菌消炎、消除重金属盐类物质、抗肿瘤的作用。\n" +
				"⒋ 金针菇可抑制血脂升高，降低胆固醇，防治心脑血管疾病；\n" +
				"⒌ 食用金针菇具有抵抗疲劳，抗菌消炎、[3]。\n" +
				"⒍经常食用金针菇，不仅可以预防和治疗肝脏病及胃、肠道溃疡，而且也适合高血压患者、肥胖者和中老年人食用，这主要是因为它是一种高钾低钠食品。\n" +
				"7.金针菇营养成分十分丰富，如蛋白质、维生素B1、B2等，具有利湿热、宽胸、利尿、止血、下乳的功效，并且治产后乳汁不下，用金针菇炖瘦猪肉食用，极有功效。\n",
		},
		product:{
			"productId":2,
			"productName":"A",
			"price":5,
			"unit":"g",
			"sales":16,
			"merit":"1、金针菇氨基酸的含量非常丰富，高于一般菇类，尤其是赖氨酸的含量特别高，赖氨酸具有促进儿童智力发育的功能。\n" +
				"2、金针菇，不仅可以预防和治疗肝脏病，而且也适合高血压患者、肥胖者和中老年人食用，这主要是因为它是一种高钾低钠食品[2]\n" +
				"3、金针菇可抑制血脂升高，降低胆固醇，防治心脑血管疾病。食用金针菇具有抵抗疲劳、抗菌消炎、消除重金属盐类物质、抗肿瘤的作用。\n" +
				"⒋ 金针菇可抑制血脂升高，降低胆固醇，防治心脑血管疾病；\n" +
				"⒌ 食用金针菇具有抵抗疲劳，抗菌消炎、[3]。\n" +
				"⒍经常食用金针菇，不仅可以预防和治疗肝脏病及胃、肠道溃疡，而且也适合高血压患者、肥胖者和中老年人食用，这主要是因为它是一种高钾低钠食品。\n" +
				"7.金针菇营养成分十分丰富，如蛋白质、维生素B1、B2等，具有利湿热、宽胸、利尿、止血、下乳的功效，并且治产后乳汁不下，用金针菇炖瘦猪肉食用，极有功效。\n",
		},
		ok:1,
		msg:"获取数据库商品信息成功"
	})
})
app.post("/sys/user/myshopcar",function (req,res) {
	res.json({
		"list": [
			{
				"productId":"1",
				"carId":"1",
				"usId":"123456789",
				"productName": "金针菇",
				"price": "6",
				"carCount":"2",
			},
			{
				"productId":"2",
				"carId":"2",
				"usId":"123456789",
				"productName": "A1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
				"price": "6",
				"carCount":"2",
			},
		],
		ok:1,
		msg:"用户添加了商品"
	})
})
app.post("/sys/user/shopcardel",function(req,res){
	res.json({
		R:{
			code:0,
			msg:"进行删除成功"
		}
	})
})
app.post("/sys/user/shopcar",function(req,res){
	res.json({
		R:{
			code:0,
			msg:"商品的添加修改成功"
		}
	})
})

app.post("/sys/alipay/pay",function(req,res){
	res.json({
		R:{
			code:0,
			result:"<form name=\"punchout_form\" method=\"post\" action=\"https://openapi.alipaydev.com/gateway.do?charset=utf-8&method=alipay.trade.page.pay&sign=FNkVzrHtBJC0%2Bj8nB7DSRWIuprbDSkB3nhNfJTH45fZihkMzBKUdnbmNN8UlB8h0YiR03fwFtf1f7hlEHDgjs67beKJuYmiaQWdfuuwM%2FKfhZmOhlXBSI823ObRKjQxI%2BKiPr1XfAOjS03mG4d%2FKsHQOjXkUS6mmQkoGFLMkLTyRNbsyAKbjF%2B%2F9oHu8Hm4xQWwhNqFtLJ1gIomZxOjPxYP2lVSWnuALu8uk27oiAW6ROCYioPpeSxM6YFrzXCg2dzK4x1qg0oknRnaYDXLR8vcx4QQuI5RdkAmN0Xik6CFB5vKOR0lsjmDlAhyJNZffCo%2BEUYEwa51TILFnjJ9iZQ%3D%3D&return_url=http%3A%2F%2Fs24293p248.qicp.vip%2Fsys%2Freturn.html&notify_url=http%3A%2F%2Fs24293p248.qicp.vip%2Fsys%2Fcallback.html&version=1.0&app_id=2016092600600592&sign_type=RSA2&timestamp=2019-04-26+16%3A50%3A01&alipay_sdk=alipay-sdk-java-3.4.49.ALL&format=json\">\n" +
				"<input type=\"hidden\" name=\"biz_content\" value=\"{&quot;out_trade_no&quot;:&quot;1555636552404&quot;,&quot;total_amount&quot;:&quot;1&quot;,&quot;subject&quot;:&quot;白菜500g、香菇300g、&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}\">\n" +
				"<input type=\"submit\" value=\"立即支付\" style=\"display:none\" >\n" +
				"</form>\n" +
				"<script>document.forms[0].submit();</script>"
		}
	})
})

app.listen(80, function(){
    console.log("success");
})