const express = require("express");
const router = express.Router();
const User = require('../../databases/mongodb/models/User');

router.get('/', (req,res)=>{
    res.json({"success": true, "another": "Hey whatsup"})
})
router.post('/post', (req,res)=>{

    const data = req.body;
    res.send(data);
})

router.get('/getdata', async (req,res)=>{
    const allUsers = await User.find();
    res.json({"success: ": true, "data": allUsers});
})


module.exports = router;