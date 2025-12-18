const dotenv = require("dotenv")

dotenv.config({
    path:"./.env"
})
const express = require("express")
const app = express()
const port = process.env.PORT||5000

app.get("/",(req,res) =>{
    res.send("Hello World")
})
app.get("/register",(req,res)=>{
    res.send("This is the Login Page")
})
app.listen(port,()=>{
    console.log(`Taskflow Listening on port http://localhost:${port}`);
})
