const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("home page....");
  console.log(req.params);

  res.json({
    name: "Parth",
    College: "AKTU",
  });
});

app.get("/result/:year/:roll",(req,res)=>{
console.log(req.params);
res.send("fail...")

})
app.get("/search",(req,res)=>{
console.log(req.query);
res.send("data found in db....")

})


app.listen(port, () => {
  console.log("server is running");
});
