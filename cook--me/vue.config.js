module.exports={
    devServer:{
        // port:8088,
        // host:"127.0.0.1",
        open:true,
        proxy:{
            "/cookme":{// 请求的接口地址是以/ele开头的。就会走该代理。  "/admninLog"
                target:"http://39.106.68.255:8080",// 你要跨域的跨名"/admninLog"
                changeOrigin:true,// 是否要开启你的代理
                pathRewrite:{
                    "^/cookme":""
                }
            }
        }
    }
}