const express = require("express")

const { accountRouter } = require("./account")
const { userRouter } = require("./user")
const router = express.Router();


console.log("hip")
router.use("/user", userRouter)
router.use("/account", accountRouter)





module.exports = 
    router
