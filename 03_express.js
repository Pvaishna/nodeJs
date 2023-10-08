"use strict";
exports.__esModule = true;
//import express module
var express = require("express");
//Create REST object
var app = express();
//app obj used to develop REST services
//GET request
app.get('/vaishGET', function (req, res) {
    res.status(200).json({ "message": "Welcome to Typescrit with nodeJs." });
});
app.listen(8082, function () {
    console.log('Server started successfully.');
});
