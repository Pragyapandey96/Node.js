const http = require("http");

const fs = require("fs")

const myServer = http.createServer((req, res) => {

    // console.log(req.headers);
    // const log = `${Date.now()}:${req.url} New request Received \n`;
    // fs.appendFile("log.txt", log, (err, data) =>{
    // switch(req.url){
    //     case '/': res.end("Home Page");
    //     break;
    //     case '/about': res.end("I'm Pragya Pandey");
    //     break
    //     default:
    //         res.end("404 Not found")
    // }
    //     res.end("Hello From Server Again");
    // }); 
    if(req.url=='/'){
        res.end("hello world");
    }
    else if(req.url=='/pragya'){
       
        res.end("my name is praya pandey  ")
        console.log(data)
    }
    else{
        res.end("not-found page ")
    }
});

const port=8000;
myServer.listen(port, () => console.log("Server Started"));


