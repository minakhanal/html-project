
const express = require("express");
const mongoose =require("mongoose");
const app = express();


// Middlewares
app .use('/',(req,res,next))





mongoose.connect("mongodb+srv://admin:169pPFKLZ76c4Y2Z@cluster0.v6p9eka.mongodb.net/BookStore?retryWrites=true&w=majority").then(() => console .log("Connected To Database")).then(() =>{
    app.listen(5000)
}).catch((err)=> console.log(err))

//169pPFKLZ76c4Y2Z