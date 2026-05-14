const Students=  require("../model/StudentModel")
import { FindOperators } from './../node_modules/mongodb/src/bulk/common';

// add student

const addStudent=(req , res)=>{
   try{
     const {name,rollno,branch,phone,email,address}=req.body;

    const newStudent={
     name: name,
     rollno: rollno,
     branch: branch,
     phone: phone,
     email: email,
     address: address,
    };  
    Students.insertOne(newStudent);
    res.status(200).json({message:"Student Added Successfully"})
}
catch(error){
    res.status(500).json({message:error.message})
    console.log(error);
    
 }
   }


// get all student
// get student based on ID
// delete student
// update studentDetails
// update only phoneNo





module.exports=addStudent;