require("dotenv").config()
require("express-async-errors")
//async errors


const express = require("express")
 const app = express()

 const connectDb = require("./db/connect")

 const productsRouter = require("./routes/products")
const notFoundMiddleWare = require("./middleware/not-found")
const errorMiddleWare = require("./middleware/error-handler")

//middleqare
app.use(express.json())

//route

app.get("/",(req,res)=> {
    res.send("<h1>STORE API</h1> <a href='/api/v1/products'>products routes</a>")
})

// product route

app.use("/api/v1/products", productsRouter)
app.use(notFoundMiddleWare)
app.use(errorMiddleWare)

const port = process.env.PORT || 3000
const start = async()=> {
    try {
       await connectDb(process.env.MONGO_URI)
       app.listen(port,console.log("server listening on port " + port))
    }
    catch(error) {
console.log(error)
    }
       
}
 

start()


