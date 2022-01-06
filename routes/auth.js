const router = require("express").Router();


router.get("/", (req,res)=> {
    res.send("hey its authentication route")
})

module.exports = router