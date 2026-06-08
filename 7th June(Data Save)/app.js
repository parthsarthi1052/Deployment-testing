const express=require("express");
const app=express();
const port=3000;
const fs=require("fs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("home page1...")
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    fs.appendFileSync("data.json",JSON.stringify(req.body)+"\n","utf-8");

    res.send("user registration complete..")
    
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
    
})