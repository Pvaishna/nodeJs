"use strict";
exports.__esModule = true;
//import express module
var express = require("express");
//create module
var accounts = express.Router();
//create get request
accounts.get('/', function (req, res) {
    res.status(200).json({ "message": "Welcome to accounts module!!" });
});
accounts.get("/login", function (req, res) {
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    if (uname == "vaish" && upwd == "pass") {
        res.status(200).json({ "login": "sucess" });
    }
    else {
        res.status(401).json({ "json": "failed" });
    }
});
//export module
exports["default"] = accounts;
