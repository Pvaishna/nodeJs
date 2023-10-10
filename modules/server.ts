//encapsulate transaction, accounts and card module in main module

//import all modules
import * as express from "express";
import accounts from "./accounts";
import transactions from "./transactions";
import cards from "./cards";

//create REST object
let app:any = express();

//use all modules
app.use("/accounts", accounts);
app.use("/transactions", transactions);
app.use("/cards", cards);

app.listen(8082, ()=>{
    console.log("server started");
});

//http://localhost:8082/accounts
//http://localhost:8082/accounts/login

//http://localhost:8082/transactions  (token,wish)
//http://localhost:8082/cards
