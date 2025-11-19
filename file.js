const fs = require("fs")

// Sync... Blocking req
//fs.writeFileSync('./test.txt','Hello world')

//Async..... Non blocking req
// fs.writeFile("./test.txt", "Hello World",(error) => {})


    //Blocking....
//const result = fs.readFileSync("./contacts.txt", "utf-8")
//console.log(result);


// Non Blocking....
// fs.readFile("./contacts.txt", "utf-8",(err, result) => {
//     if(err){
//         console.log("Error", err);
        
//     } else{
//         console.log(result);
        
//     }
// });

// Async does not return anything it always expect a callback , but Sync return result 

//fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", `${Date.now()}Hey there\n` );

fs.cpSync('./test.txt', './copy.txt');       // create a new file of name copy.txt and the content of test.txt are copied in this new file

fs.unlinkSync("./copy.txt");             // to delete a file

//console.log(fs.statSync('./test.txt'));

fs.mkdirSync("my-docs/a/b", {recursive: true});




// Default Thread Pool Size = 4
//Max?? - 8 core cpu then 8 is the maximum Thread Pool size


const os = require("fs");
console.log(os.cpus().length);
