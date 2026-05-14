 const mongoose=require("mongoose");
import { type } from './../../node_modules/@types/whatwg-url/index.d';


 new mongoose.Schema({
    name:{ type:String, required:true},
    rollno:{type:String,unique:true},
    branch:{type:String, },
    phone:{type:Number,unique:true,required:true,length:10},
    email:{type:String,unique:true,required:true},
    address:{type:String,required:true,unique:true},
 })

const studentModel = mongoose.model('Students',studentSchema);

module.exports = studentModel;
 


