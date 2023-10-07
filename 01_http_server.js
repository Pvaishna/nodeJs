// http module is predefined moodule in nodeJs. so, no need to install. 
// require() is the fucntion to import the modules.
let http = require('http');

//createServer() is the function in http module, helps to create the http server.
//req and res are predefined objects in nodeJs. req object is receiving data from client application and res object is giving response to client.

let server = http.createServer((req, res)=> {
    //MIME type
    // res.writeHead(200, {'content-Type': 'text/html'});

    res.write("<h1>Welcome to http server</h1>"); //response to client application
    res.end(); //lock response object. It is must to lock after every bussiness logic
});


server.listen(8082);
console.log('server listening the port 8082.');

// const port = 8082; // Change to a different, available port number
// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });