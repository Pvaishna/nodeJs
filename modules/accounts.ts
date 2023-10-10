//import express module
import * as express from "express";

 //create module
 let accounts:any = express.Router();

 //create get request
 accounts.get('/', (req:any, res:any):any=>{
    res.status(200).json({"message":"Welcome to accounts module!!"});
 });

 accounts.get("/login", (req:any, res:any):any=>{
    let uname = req.query.uname;
    let upwd = req.query.upwd;
    if(uname == "vaish" && upwd == "pass"){
        res.status(200).json({"login":"sucess"});
    }
    else{
        res.status(401).json({"json":"failed"});
    }
 })

 //export module
 export default accounts;