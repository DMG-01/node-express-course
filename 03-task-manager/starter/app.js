const express = require("express")
const app = express()
const task = require("./router/task")


app.use(express.json())
app.get("/hello", (req,res)=> {
    res.send("Task Manager")
})


app.use("/api/v1/tasks",task)

const port = 3000
app.listen(3000,()=> {
   console.log(`server is listening in port ${port}`) 
})