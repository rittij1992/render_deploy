const express = require("express");
const mongoose  = require("mongoose");

mongoose.connect("mongodb+srv://rittijmazumder:iam-rittij1992@cluster0.rwttnzo.mongodb.net/new_db").
then((data)=>{
    console.log("database connected");
}).catch((err)=>{
    console.log(err);
})
const port = process.env.PORT || 3030;

const server = express();


server.get("/", (req, res)=>{
   res.send( "this app server")
});

server.get("/roles", async (req, res)=> {
    const roleSchema = new mongoose.Schema({
        name: {
            type: String,
            enum: ["admin", "customer"],
            default: "customer"
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    })
    
    const Role = mongoose.model("Role", roleSchema);

    const data = await Role.find();
    res.json({data});
})

server.get("/new", (req, res)=>{
    res.send( "this is new page")
 });

server.listen(port, ()=>{
    console.log(`This server on port ${port}`);
})