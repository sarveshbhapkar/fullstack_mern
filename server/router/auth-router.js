const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("using express using router");

});


router.route("/register",(req,res)=>{
    res.status(200).send("using express using router");

});


module.exports = router;