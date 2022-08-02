const express = require ("express");
const app = express();
const Routee = require("./routes/route")
app.use("/outh",Routee);
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello developers");
    res.end();
})

app.get("/data",(req,res)=>{
    res.send("hello developers, name is ravikant");
    res.end();
})
app.post("/postt",function(req,res){
    res.send("sucess");
    console.log(req.body);
})

app.listen(9090,()=>{
    console.log("server is running");
})