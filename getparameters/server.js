"use strict";
//http://localhost:8082/login?uname="admin"&upwd="admin"  (it will give login failed)
//http://localhost:8082/login?uname=admin&upwd=admin        (it will give login sucess)
exports.__esModule = true;
//import expres module
var express = require("express");
//create REST obj
var app = express();
//token authorization 
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === "vaishnavi") {
        next();
    }
    else {
        res.status(500).json({ auth: "failed!!" });
    }
};
//get request
app.get('/login', [auth], function (req, res) {
    if (req.query.uname == "admin" && req.query.upwd == "admin") {
        res.status(201).json({ login: "Sucess!!" });
    }
    else {
        res.status(401).json({ login: " failed!!" });
    }
});
//default request to link html file to server.ts
app.get("/", function (req, res) {
    res.sendFile("/home/vaishnavi/nodeJs/nodeJs_vaish/getparameters/index.html");
    //sendFile will open the linked file with default url.
});
app.listen(8082, function () {
    console.log("server started sucessfully!!");
});
