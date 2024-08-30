const express = require("express")
const app = express();

const logger = require("./middleware")
const authorize = require("./authorize") 
app.use([logger,authorize])

app.get("/",(req,res)=> {
    res.send("HOME PAGE")
})

app.get("/about",(req,res)=> {
    res.send("ABOUT PAGE")
})

app.listen(300,()=> {
    console.log("listening on port 300...")
})