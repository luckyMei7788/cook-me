module.exports={
    devServer:{
        // port:8088,
        // host:"127.0.0.1",
        open:true,
        proxy:{
            "/cookme":{
                target:"http://39.106.68.255:8080",
                changeOrigin:true,
                pathRewrite:{
                    "^/cookme":"/"
                }
            }
        }
    }
}
