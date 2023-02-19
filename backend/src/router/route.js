const express = require("express")
const route = express.Router()
const {register} = require("../controller/userController")

route.post("/register", register)




module.exports = route