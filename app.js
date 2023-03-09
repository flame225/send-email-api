const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const connectDB = require('./connectDb/db');
const sendMail = require("./controllers/sendMail");
dotenv.config();
''
const app = express();

app.get("/", (req,res)=>{
    res.send("i am a server")
})

app.get("/sendmail", sendMail)




const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`server on ${PORT}`);
    connectDB( );
})  