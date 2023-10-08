"use strict";
exports.__esModule = true;
//import express module
var express = require("express");
//create a sub module
var accounts = express.Router();
//create request
accounts.get('/', function (req, res) {
    res.status(200).json({ message: "Accounts Module!" });
});
accounts.post('/accounts', function (req, res) {
    res.status(200).json({ message: "Welcome to vaish accounts!" });
});
//Export module
exports["default"] = accounts;
