const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/getPortfolioProjects",(req,res)=>{

    db.query(
        "SELECT * FROM student_projects",
        (err,result)=>{
            if(err) throw err;
            res.json(result);
        }
    );

});

app.post("/storeContact",(req,res)=>{

    const {name,email,message}=req.body;

    db.query(
        "INSERT INTO contact_requests(name,email,message) VALUES(?,?,?)",
        [name,email,message],
        (err,result)=>{
            if(err) throw err;
            res.send("Request Stored");
        }
    );

});

app.listen(5000,()=>{
    console.log("Portfolio Application Started");
});
