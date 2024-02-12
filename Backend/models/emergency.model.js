import mongoose,{Schema} from 'mongoose';



const emergencySchema = new Schema({

    email:{
        type:String,
        required:true, 
        unique:true, 
        lowercase:true,
        trim:true,
        index:true,
    },

    fullName : {
        type:String, 
        trim:true,
        index:true,
    },

    location : {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    }


})

export const Emergency = mongoose.model("Emergency",emergencySchema)
