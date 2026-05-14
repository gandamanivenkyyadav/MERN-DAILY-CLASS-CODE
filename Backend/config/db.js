const mongoose=require("mongoose");

const connection=async()=>{
    mongoose.connect("mongodb://localhost:27017/Poojaaaa");
    console.log("DB connected successfully");
    
}

module.exports=connection;

setTimeout(() => {
    
}, timeout);


