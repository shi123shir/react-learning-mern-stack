const  mongoose  = require("mongoose");

const register  = mongoose.Schema({
    name: {
        type :String,
        required : true
    },
    email :{
        type:String,
        required : true
    },

    password: {
        type:String,
        required : true
    }
    
},{timeStamp : true})


module.exports = mongoose.model("register", register)