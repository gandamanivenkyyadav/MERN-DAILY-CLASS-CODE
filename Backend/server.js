const express=require("express")
const app=express();
const PORT=4000
const connection  = require('./config/db');
app.use(express.json());
connection();

 const  StudentRouter= require("./routers/StudentRouter");

app.use("/students",StudentRouter);

app.listen(PORT, ()=>{
    console.log("server running on port:",port);
    
})
 