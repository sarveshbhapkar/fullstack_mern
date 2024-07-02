const express = require('express');

const app =express();

app.get("/",(req,res)=>{
    res.status(200).send("this is server file");

})

const port = 5000;

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);
});
