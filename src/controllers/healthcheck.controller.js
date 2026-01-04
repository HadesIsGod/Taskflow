const ApiResponse = require('../utils/api-response')
/*
const healthCheck = async(req,res,next)=>{
    try{
        const user = await getUserFromDB()
        res.status(200).json(
            new ApiResponse(200, {
                status:"ok",
                uptime: process.uptime(),
                timestamp : new Date().toISOString()
            })
        )
    }
    catch (error){
        next(err)
    }
}
*/
const asyncHandler = require("../utils/async-handler")
const healthCheck = asyncHandler(async(req,res)=>{
    res.status(200).json(new ApiResponse(200,{
        messsage:"Server is Running",
        status:"ok",
        uptime: process.uptime(),
        timestamp : new Date().toISOString()
    }))
})

module.exports = healthCheck