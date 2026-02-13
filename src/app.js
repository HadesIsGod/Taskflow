const express =  require("express")
const app = express()
const cors = require("cors")
const healthRoutes = require('./routes/health.routes')
const authRouter = require('./routes/auth.routes')


//cors config

app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",")||"http://localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders:["Authorization","Content-Type"]

}))
//middlewares
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

//auth route
app.use("/api/v1/auth",authRouter)
// health route
app.use("/api/v1",healthRoutes)


app.get("/",(req,res) =>{
    res.send("Hello World")
})
app.get("/register",(req,res)=>{
    res.send("This is the Login Page")
})

module.exports = app