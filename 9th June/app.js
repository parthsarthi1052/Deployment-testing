const express=require("express");
const app=express();
const port=3000;
const fs=require("fs");
// const data=require("./data.json");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",express.static("public"));

app.get("/",(req,res)=>{
    console.log("home page...");
    
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    fs.appendFileSync("data.json",JSON.stringify(req.body)+"\n"+",","utf-8");

    res.sendFile("./god.gif",{root:"."})
    
})

app.get("/data", async (req, res) => {

    const response = await fetch("https://hayes-bands-ham-configured.trycloudflare.com/data");

    const users = await response.json();

    let html = `
    <html>
    <head>
        <title>Users</title>

        <style>
            body{
                font-family: Arial;
                background:#f4f4f4;
                padding:20px;
            }

            .card{
                background:whi;
                padding:15px;
                margin:10px;
                border-radius:10px;
                box-shadow:0 2px 5px rgba(0,0,0,0.2);
            }
        </style>

    </head>
    <body>

    <h1>User List</h1>
    `;

    users.forEach(user => {

        html += `
        <div class="card">

            <h2>${user.first_name} ${user.last_name}</h2>

            <p><b>ID:</b> ${user.id}</p>

            <p><b>Email:</b> ${user.email}</p>

            <p><b>Gender:</b> ${user.gender}</p>

            <p><b>IP:</b> ${user.ip_address}</p>

        </div>
        `;
    });

    html += `
    </body>
    </html>
    `;

    res.send(html);
});
app.get("/data",(req,res)=>{
res.send(data);
})

app.listen(port,()=>{
    console.log("server is running");
    
})