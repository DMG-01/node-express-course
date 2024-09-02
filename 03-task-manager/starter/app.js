const connectDb = require("./db/databaseConnect.Js")
const express = require("express")
const app = express()
const task = require("./router/task")


app.use(express.json())
app.get("/hello", (req,res)=> {
    res.send("Task Manager")
})


app.use("/api/v1/tasks",task)

const port = 3000
const start = async()=> {
    try {
        await connectDb()
        console.log(`server is listening in port ${port}`) 
    }catch(error) {
        console.log(error)
    }
}


start()
/*
app.listen(3000,()=> {
   
})*/