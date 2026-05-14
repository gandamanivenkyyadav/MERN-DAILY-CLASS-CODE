const addStudent= require("../controller/StudentController")
const express = require("express")
const router= express.Router();

router.post("/add-student",addStudent);

module.exports=router;