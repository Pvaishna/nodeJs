//import express module
import * as express from "express";

//create a sub module
let accounts:any = express.Router();

//create request
accounts.get('/', (req:any, res:any):any=>{
    res.status(200).json({message:"Accounts Module!"});
});

accounts.post('/accounts', (req:any, res:any):any => {
    res.status(200).json({message: "Welcome to vaish accounts!"});
});


//Export module
export default accounts;