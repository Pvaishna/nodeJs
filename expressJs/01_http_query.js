//import http module
let http = require('http');

//import predefined url module in nodeJs. used to read query parameters.
let url = require("url");

//create server
let server = http.createServer((req,res)=> {
    //set MIME Type. 
    //communication lang between client and server called as MIME.
    res.writeHead(200, {'Content-Type': 'text/html'});

    let obj = url.parse(req.url, true).query;

    if(obj.uname == "ashokit" && obj.upwd == "ashokit"){
        res.write("<h1>login successful</h1");
    }
    else{
        res.write("<h1>login failed</h1>");
    }
    res.end();
});

server.listen(8082);
console.log("This is for query reading");