"use strict";
exports.__esModule = true;
//import express module.
var express = require("express");
//import body-parser module. used to read post parameters.
var bodyparser = require("body-parser");
//create rest object. used to develop REST services
var app = express();
//set the MIME Type
app.use(bodyparser.json()); //it sets that the communication lang between client and server is json
//receive form data from client and parse it (extened ex., uname, upwd, etc..)
app.use(bodyparser.urlencoded({ extended: false }));
//authorization code
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "nodeJs") {
        next();
    }
    else {
        res.status(401).json({ auth: "failed" });
    }
};
//post request
app.post('/login', [auth], function (req, res) {
    if (req.body.uname == "admin" && req.body.upwd == "admin") {
        res.status(200).json({ login: "sucess!!" });
    }
    else {
        res.status(401).json({ login: "failed!!" });
    }
});
app.listen(8082, function () {
    console.log("server started successfully!!");
});
