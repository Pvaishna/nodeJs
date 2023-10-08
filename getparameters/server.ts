//http://localhost:8082/login?uname="admin"&upwd="admin"  (it will give login failed)
//http://localhost:8082/login?uname=admin&upwd=admin        (it will give login sucess)

//import expres module
import * as express from "express";

//create REST obj
let app:any = express();

//token authorization 
let auth = (req:any, res:any, next:any):any=>{
    let allHeaders = req.headers;
    if(allHeaders.token === "vaishnavi"){
        next();
    }
    else{
        res.status(500).json({auth: "failed!!"});
    }
};

//get request or authentication code
app.get('/login', [auth], (req:any, res:any):any=>{
    if(req.query.uname == "admin" && req.query.upwd == "admin"){

        res.status(201).json({login: "Sucess!!"});
    }
    else{
        res.status(401).json({login: " failed!!"});
    }
});

//default request to link html file to server.ts
app.get("/", (req:any, res:any):any=>{
    res.sendFile("/home/vaishnavi/nodeJs/nodeJs_vaish/getparameters/index.html");
    //sendFile will open the linked file with default url.
});

app.listen(8082, ()=> {
    console.log("server started sucessfully!!");
})
