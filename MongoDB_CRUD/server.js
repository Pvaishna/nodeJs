"use strict";
exports.__esModule = true;
//server.ts to collabrate custom modules
//import express module
var express = require("express");
//import cors module
var cors = require("cors");
var bodyparser = require("body-parser");
//import cstom modules
var fetch_1 = require("./fetch/fetch");
var insert_1 = require("./insert/insert");
var update_1 = require("./update/update");
var remove_1 = require("./remove/remove");
var app = express();
app.use(cors()); //enable cors policy
//set MIMEType
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/fetch", fetch_1["default"]);
app.use("/insert", insert_1["default"]);
app.use("/update", update_1["default"]);
app.use("/delete", remove_1["default"]);
app.listen(8082, function () {
    console.log("server started successfully!!");
});
