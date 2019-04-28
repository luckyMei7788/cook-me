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
    res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST,OPTIONS");
    next();
})

/*****************注册手机号失焦验证手机号是否存在*************************/
app.post("*", function(req, res){
	var body = req.body;
	var path = req.getContextPath()
	console.log(path);
	var url = "http://39.106.68.255:8080"+path;
	console.log(url);
    //URL请求的地址，第二个参数-回调，err报错信息，responseText返回信息，body返回所有信息
    request({
		url,
		body
	}, function(err, responseText,body){
        if(!err && responseText.statusCode === 200){
            let obj = JSON.parse(responseText);
			console.log(obj);
            res.json({
                obj
            })
        }else{
			console.log("error");
		}
    })
})

/***************发送验证码******************/
// app.post("/sys/user/sendCode", function(req, res){
// 	
//     var url ="http://127.0.0.1/sys/user/sendCode";
//     //URL请求的地址，第二个参数-回调，err报错信息，responseText返回信息，body返回所有信息
//     request(url, function(err, responseText,body){
//         if(!err && responseText.statusCode === 200){
//             let obj = JSON.parse(responseText);
//             res.json({
//                 obj
//             })
//         }
//     })
// })
// 

app.get("*", function(req, res){
	var body = req.query;
	request({
		body
	},function(err, responseText, body){
		if(!err && responseText.statusCode === 200){
		    let obj = JSON.parse(responseText);
		    res.json({
		        obj
		    })
		}else{
			console.log("error");
		}
	})
})
app.listen(8080, function(){
	console.log("success");
})
