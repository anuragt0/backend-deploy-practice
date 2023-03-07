const express = require("express");
const router = express.Router();
const User = require('../db/Models/User');

router.get('/', (req,res)=>{
    res.json({"success": true, "another": "Hey WHATUP", "ANOTHER": "how ARE you?"})
})

router.get('/getdata', async (req,res)=>{
    const allUsers = await User.find();
    res.json({"success: ": true, "data": allUsers});
})


module.exports = router;