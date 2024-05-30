require("dotenv").config();
const express= require("express");
const router=require("./router/auth-router.js")
const app=express();
const connectDb=require("./utils/db.js");

app.use(express.json());//parsing json data from requests ,middleware


app.use("/api/auth",router)  // mount path



const PORT=8000;

connectDb().then(()=>{

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});
 
});