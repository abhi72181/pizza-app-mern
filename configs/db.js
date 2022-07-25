const mongoose=require("mongoose")

module.exports=()=>{
    const url=process.env.MONGO_URI
    return mongoose.connect(url)
}
