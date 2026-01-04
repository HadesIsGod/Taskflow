const dotenv = require("dotenv")
dotenv.config({
    path:"./.env"
})
const app =  require("./app")
const connectDB = require("./db")



const port = process.env.PORT||5000;

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`🚀 Taskflow Listening on port http://localhost:${port}`);
    })
})
.catch((err=>{
    console.error("MongoDB conncection error",err)
    process.exit(1)
}))