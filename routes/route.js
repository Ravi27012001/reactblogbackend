const express = require("express");
const Router = express.Router();
const Bollywood = require("../allData/bollywood");
const Fitness = require("../allData/fitness");
const All = require("../allData/all")
Router.get("/api",(req,res)=>{
    res.send("hello i coming from route");
    // res.end();
})
Router.route("/bollywood").get(Fitness,Bollywood);
Router.route("/fitness").get(Fitness);
Router.route("/data").get(All);
module.exports = Router;