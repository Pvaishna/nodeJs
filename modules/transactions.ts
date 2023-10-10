
import * as express from "express";

let transactions:any = express.Router();

const auth1:any = (req:any, res:any, next:any):any=>{
    let allHeaders = req.headers;
    if(allHeaders.token == "expressJs"){
        next();
    }
    else{
        res.status(401).json({"auth1":"failed"});
    }
}

const auth2:any = (req:any, res:any, next:any):any=>{
    let allHeaders = req.headers;
    if(allHeaders.wish == "test"){
        next();
    }
    else{
        res.status(401).json({"auth2":"failed"});
    }
}

transactions.get("/", [auth1, auth2], (req:any, res:any):any=>{
    res.status(200).json({"message":"Welcome to Transation module!!"});
})

// transactions.get("/login", )

export default transactions;