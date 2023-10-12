//import express module
import * as express from "express";

//import another two modules
import transactions from "./transactions";
import accounts from "./accounts";

//create rest object
let app:any = express();

//use transaction module
app.use('/module1',transactions);

//use accounts module
app.use('/module2', accounts);

//assign port n0.
app.listen(8082, ()=>{
    console.log("server started successfully!");
});
