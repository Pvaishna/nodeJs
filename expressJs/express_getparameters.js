"use strict";
exports.__esModule = true;
//http://localhost:8082/sample/user/vaish/pwd/vaishpass (url pattern)
//read get parameters in expressjs
var express = require("express");
//create REST object
var app = express();
//create get request and read get parameters
// app.get('/sample/user/:uname/pwd/:upwd', (req:any, res:any):any=>{
//     let uname = req.params.uname;
//     let upwd = req.params.upwd;
//     if(uname == "vaish" && upwd == "vaishpass"){
//         res.status(200).json({login:"sucess!!"});
//     }
//     else{
//         res.status(401).json({login:"failed!!"});
//     }
//     // console.log(uname, upwd);
// });
app.get('/login', function (req, res) {
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    if (uname == "vaish" && upwd == "vaishpass") {
        res.status(200).json({ login: "sucess!!" });
    }
    else {
        res.status(401).json({ login: "failed!!" });
    }
});
app.listen(8082, function () {
    console.log("server ready!!");
});
