const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    res.json({"success": true, "another": "Hey whatsup"})
})


module.exports = router;