const userModel = require("../model/userModel")


const register = async (req,res) =>{
    try {
        let {name, email, password} = req.body
        console.log(req.body)

        if(!name)
        return res
        .status(400)
        .send({status:false, message:"name is required"})
    
        if(!email)
        return res
        .status(400)
        .send({status:false, message:"email is required"})
    
        if(!password)
        return res
        .status(400)
        .send({status:false, message:"password is required"})
    
        let createUser = await userModel. create(req.body)
        return res.status(201).send({status:false,message:"user created",data:createUser})
    } catch (err) {
        return res.status(500).send({status:false,message:"server error",error:err.message})
    }
   
    
}

module.exports = {register}