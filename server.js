const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to my channel gaurav technical ");
})

app.get("/register",(req,res)=>{
    res.status(200).send("Welcome to registration page ");
})


const PORT=8000;

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});