import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"ok bhai code chal raha hai"
    })
})

export  {registerUser}