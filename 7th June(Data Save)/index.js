const express=require("express")
const app=express();
const port=3000;
const fs=require("fs");
// let i=0;

app.use("/public",express.static("public"));
app.use("/assets",express.static("assets"));

app.use((req,res,next)=>{
    // const timestamp=new Date();
    // console.log(timestamp);
    // const log=`client data=${req.url},${req.ip},${timestamp}\n`;
    // fs.appendFileSync("log.txt",log,"utf-8")
    next();
})

app.get("/",(req,res)=>{
    // res.write(req.ip)
res.send("home page...")
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
    
})