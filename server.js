"use strict";
exports.__esModule = true;
//import express module
var express = require("express");
//import another two modules
var transactions_1 = require("./transactions");
var accounts_1 = require("./accounts");
//create rest object
var app = express();
//use transaction module
app.use('/module1', transactions_1["default"]);
//use accounts module
app.use('/module2', accounts_1["default"]);
//assign port n0.
app.listen(8082, function () {
    console.log("server started successfully!");
});
