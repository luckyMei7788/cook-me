//封装添加数据的模块
//引入mongodb模块
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;//mongodb对象下的MongoClient方法
//const tool = require("./tool");

//封装添加微博的方法
/***
思想
	1、安装mongodb
	2、使用mongo
	3、mongoClient连接数据库
	4、获取你要操作的数据库
	5、指定你要操作的集合
	6、具体的操作：增、删、改、查	
***/
//连接mongodb数据库的函数
function _connect(callback){
	mongoClient.connect("mongodb://127.0.0.1:27017", {useNewUrlParser:true}, function(err, client){
		if(err){
			console.log("数据库连接失败");
			//console.log(111111);
		}else{
			//连接数据库成功，利用client.db方法获取需要操作的数据库
			const db = client.db("zjj-test");
			//通过回调函数返回db
			callback(db);
		}
	})
}
//插入一条数据 coll指定的集合, insertObj插入的文档, cb回调函数-server中传过来
module.exports.insertOne = function(coll, insertObj, cb){
	_connect(function(db){
		db.collection(coll).insertOne(insertObj, cb)
	})
}
//插入多条数据
module.exports.insertMany = function(coll, insertArr, cb){
	_connect(function(db){
		//指定集合，插入数据
		db.collection(coll).insertMany(insertArr, cb);
	})
}
//根据条件获得指定集合文档的数量 coll-指定的集合，whereObj-条件，cb-回调函数
module.exports.count = function(coll, whereObj, cb){
	//连接mongodb数据库，传回调函数
	_connect(function(db){
		//指定集合，根据条件查找相同数据的条数，通过回调函数将数据返回;countDocuments-统计文档的数量
		db.collection(coll).countDocuments(whereObj).then(cb)//count的语法，then()下一步，继续 
	})
}
/*********************************获取微博中的内容*******************************************************/
//获取微博中的内容，根据条件查找集合中的文档,coll集合，obj-接受参数的对象，cb回调函数server中
module.exports.find = function(coll, obj, cb){
	//obj中参数有值用自身，没值用定义的
	obj.whereObj = obj.whereObj || {};
	obj.limitNum = obj.limitNum || 0;
	obj.skipNum = obj.skipNum || 0;
	obj.sortObj = obj.sortObj || {};
	_connect(function(db){//连接数据库，得到db
		//指定集合，根据条件查找
		db.collection(coll)
		.find(obj.whereObj)
		.limit(obj.limitNum)
		.skip(obj.skipNum)
		.sort(obj.sortObj)
		.toArray(cb) //将find的方法执行完后将结果转为数组
	})
}
module.exports.find("contextLixt", {
	limitNum : 0,
	skipNum : 0,
	sortObj : {addTime:-1}
}, function(err, results){
//console.log(results);//查找的所有结果
})

//删除数据-根据id删除数据
module.exports.deleteOneById = function(coll, id, cb){
	_connect(function(db){
		db.collection(coll).deleteOne({_id:mongodb.ObjectId(id)},cb)
	})
}

//修改数据-根据id修改  upObj需要修改的内容
module.exports.updateOneById = function(coll, id, upObj, cb){
	_connect(function(db){
		db.collection(coll).updateOne({_id:mongodb.ObjectId(id)}, upObj, cb)
	})
}



/*
function connect(){
	//连接数据库
	mongoClient.connect("mongo://127.0.0.1:27017", {useNewUrlParser : true}, function(err, client){
		if(err){
			console.log("连接数据库失败")
		}else{
			//连接数据库成功后增加数据
			const db = client.db("weibo");//指定要操作的数据库
			//增加一条数据
			db.collection("contextList").insertOne({userName : "张三", context : 1}, function(err, results){
				if(err){
					console.log("插入数据失败");
				}else{
					console.log("插入数据成功")
				}
			})

			//增加多条数据
			db.collection("contextList").insertMany([{userName:"小红", context:2}, {userName:"小明", context:3}], function(err, results){
				if(err){
					console.log("插入数据失败");
				}else{
					console.log("插入数据成功")
				}
			})
		}
	})
}
*/