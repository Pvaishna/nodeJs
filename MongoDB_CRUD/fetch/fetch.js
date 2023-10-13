"use strict";
exports.__esModule = true;
//import express module
var express = require("express");
//import mongodb module, used to connect mongodb database
var mongodb = require("mongodb");
//create the client
//mongodb follows client server architechture
var vaish = mongodb.MongoClient; //vaish is the client
//Create module
var fetch = express.Router();
fetch.get("/", function (req, res) {
    // vaish.connect("mongodb+srv://vaishpadre:JGNwtwvn34JRtdVk@miniprojectdb.nzphu.mongodb.net/vaish_nodejs/?retryWrites=true&w=majority",
    vaish.connect("mongodb+srv://vaishpadre:JGNwtwvn34JRtdVk@cluster0.zmt1crm.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("vaish_nodejs");
            db.collection("products").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
//export module
exports["default"] = fetch;
