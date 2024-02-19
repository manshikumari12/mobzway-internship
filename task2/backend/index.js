const express = require("express")
const app = express()
const {connection} = require("./db")
const {userRouter} = require("./router/user.router")

const cors = require('cors');
app.use(express.json())
app.use(cors());
app.use("/user",userRouter)



app.listen("1111",async(req,res)=>{
try {
    await connection
    console.log("connection to db")
} catch (error) {
    console.log(error);
}


    console.log("server is running")
})