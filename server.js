const express = require("express");
const mongoose  = require("mongoose");

mongoose.connect("").
then((data)=>{
    console.log();
}).catch((err)=>{
    console.log(err);
})
const port = process.env.PORT || 3030;

const server = express();


server.get("/", (req, res)=>{
   res.send( "this app server")
});

server.listen(port, ()=>{
    console.log(`This server on port ${port}`);
})