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
       await connectDb(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`server is listening in port ${port}`)
         })
        
    }catch(error) {
        console.log(error)
    }
}


start()