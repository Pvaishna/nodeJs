"use strict";
exports.__esModule = true;
var express = require("express");
var transactions = express.Router();
var auth1 = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token == "expressJs") {
        next();
    }
    else {
        res.status(401).json({ "auth1": "failed" });
    }
};
var auth2 = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.wish == "test") {
        next();
    }
    else {
        res.status(401).json({ "auth2": "failed" });
    }
};
transactions.get("/", [auth1, auth2], function (req, res) {
    res.status(200).json({ "message": "Welcome to Transation module!!" });
});
// transactions.get("/login", )
exports["default"] = transactions;
