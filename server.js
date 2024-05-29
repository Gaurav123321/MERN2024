const express= require("express");
const router=require("./router/auth-router.js")
const app=express();

app.use(express.json());//parsing json data from requests ,middleware


app.use("/api/auth",router)  // mount path



const PORT=8000;

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});