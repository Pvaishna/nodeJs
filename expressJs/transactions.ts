//import express module
import * as express from "express";

//create sub module
//Router() is a predefined function avilable in express module. to create any sub module
let transactions:any = express.Router();



//create a REST service. i.e., GET request
transactions.get('/', (req:any, res:any):any=>{
    res.status(200).json({message:"Welcome to a transaction Module."});
});

transactions.get('/vaish', (req:any, res:any):any=>{
    res.status(200).json({message:"Welcome to vaish Transaction!"});
});



//Export module
export default transactions;