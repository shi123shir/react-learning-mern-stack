const express = require("express")
const mongoose = require("mongoose")
const route = require("./router/route")
const cors = require("cors")
const app = express()





app.use(express.json())
app.use(cors())
mongoose.set('strictQuery', true);

// db
mongoose.connect("mongodb+srv://shishir1912-DB:F85ml8mUXi1MrEKV@cluster0.2ta5zuw.mongodb.net/smallassinment",{
    useNewUrlParser: true,
}).then(()=> console.log("mongoDB is connected successfully"))
.catch((err)=> err)

app.use("/",route)

app.listen(3001, function(){
    console.log("express is running on port "+ 3001)
})
