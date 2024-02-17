import mongoose, { connect } from 'mongoose'
import { DB_NAME } from '../constants.js'



const connectDB = async()=>{
    try{

      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  
      console.log(`\n MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);

    }

    catch(error){
      console.log(process.env.MONGODB_URI)
        console.log("Mongoosed Connection to the Database Failed Successfully!",error)
        process.exit(1)
    }
}

export default connectDB;