import mongoose from "mongoose"
const connectMongoDb = async ()=>{
    try{
    await mongoose.connect(process.env.DB_URL)
console.log("Connected to mongodb")
    }catch(e){
        console.log(e)

    }
}

export default connectMongoDb