const connectDb = require("./db/databaseConnect.Js")
const express = require("express")
const app = express()
const task = require("./router/task")
require("dotenv").config()


app.use(express.json())
app.get("/hello", (req,res)=> {
    res.send("Task Manager")
})


app.use("/api/v1/tasks",task)

const port = 3000
const start = async()=> {
    try {
       // await connectDb("mongodb+srv://femi:1234@nodeexpresstut.z5tzs.mongodb.net/?retryWrites=true&w=majority&appName=nodeExpressTut"/*process.env.MONGO_URI*/)
        console.log(`server is listening in port ${port}`) 
        console.log("connected to database")
    }catch(error) {
        console.log(error)
    }
}


start()
/*
app.listen(3000,()=> {
   
})*/