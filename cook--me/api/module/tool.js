//封装一个获取当前事件的函数
module.exports.getNowTime = function(){
	var nowTime = new Date();
	var timeStr = nowTime.getFullYear().toString() +"-"+
				(nowTime.getMonth()+1).toString().padStart(2, "0") +"-"+ //不足两位，前端以零补全
				nowTime.getDate().toString().padStart(2, "0") +" "+
				nowTime.getHours().toString().padStart(2, "0") +":"+
				nowTime.getMinutes().toString().padStart(2, "0") +":"+
				nowTime.getSeconds().toString().padStart(2, "0");
	return timeStr;
}

//封装send发送数据的函数
module.exports.send = function(res, ok=-1, msg="失败"){ //初始化参数
	res.json({
		ok,
		msg
	})
}