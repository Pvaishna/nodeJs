
//read get parameters in expressjs
import * as express from "express";

//create REST object
let app:any = express();

//create get request and read get parameters using req.params
//http://localhost:8082/sample/user/vaish/pwd/vaishpass (url pattern)
app.get('/sample/user/:uname/pwd/:upwd', (req:any, res:any):any=>{
    let uname = req.params.uname;
    let upwd = req.params.upwd;
    if(uname == "vaish" && upwd == "vaishpass"){
        res.status(200).json({login:"sucess!!"});
    }
    else{
        res.status(401).json({login:"failed!!"});
    }
});


//create get request and read get parameters using req.query
//http://localhost:8082/login?uname=vaish&upwd=vaishpass
// app.get('/login', (req:any, res:any):any=>{
//     let uname = req.query.uname;
//     let upwd = req.query.upwd;
//     if(uname == "vaish" && upwd == "vaishpass"){
//         res.status(200).json({login:"sucess!!"});
//     }
//     else{
//         res.status(401).json({login:"failed!!"});
//     }
// });

app.listen(8082, ()=>{
    console.log("server ready!!"); 
});
