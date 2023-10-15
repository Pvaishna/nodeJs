//import fs module

const fs = require("fs");

//read data asynchronously
// fs.readFile("demo.txt", (err, result)=>{
//     if (err) throw err;
//     else{
//         console.log(result.toString());
//     }
// });

//read data synchronously
// const res = fs.readFileSync("demo.txt");
// console.log(res.toString());

//write the data asynchronously
// fs.writeFile("demo.txt", "Hello", (err, res)=>{
//     if (err) throw err;
//     else{
//         console.log("Write Operation Success");
//     }
// })

//write the data synchronoulsy
// fs.writeFileSync("demo.txt", "welcome");
// console.log("data written successfully");

//append data asynchronously
// fs.appendFile("demo.txt", "\nNodeJs", (err, data)=>{
//     if (err) throw err;
//     else{
//         console.log("data appended successfully!!");
//     }
// })

//append data synchronously
// fs.appendFileSync("demo.txt", "\nAppened Sync");
// console.log("appended data synchronously");

//open file asynchronously
fs.open("demo.txt", "r+", (err, fd)=>{
    if(err) throw err;
    else{
        console.log("file opened asyc");
        //remane.file
        fs.rename("demo.txt", "new.txt", (err, fr)=>{
            if (err) throw err;
            else{
                console.log("file renamed successfully!!");
                fs.readFile("new.txt", (err, res)=>{
                    if (err) throw err;
                    else{
                        console.log(res.toString());
                        fs.writeFile("new.txt", "\ntesting Write", (err, res)=>{
                            if (err) throw err;
                            else{
                                console.log("testing successful");
                            }
                        })
                    }
                })
            }
        })
    }
})
