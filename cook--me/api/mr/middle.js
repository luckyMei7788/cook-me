const express =require("express");
const history=require("connect-history-api-fallback");
const proxy=require("http-proxy-middlename");
const app=express();
app.use(history(
    {htmlAcceptHeaders:['text/html','application/Xhtml+xml']}
    ))
app.use("^/meirong",proxy({
    target:""
}))
app.use(80,function(){
    console.log("sunccess");

})