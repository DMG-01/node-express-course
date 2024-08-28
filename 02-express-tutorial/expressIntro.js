const express = require("express")

const app = express()

app.listen(5000,()=> {
    console.log("server listening on port 5000")

    app.get("/",(req,res)=> {
        res.send("HOME PAGE")
        console.log("page refreshed")
    })

    app.get("/about",(req,res)=> {
        res.send("ABOUT PAGE") 
    })

    app.all("*",(req,res)=> {
        res.status(404).send("<h1>LMAO,WEDONT HAVE THIS PAGE O</h1>")
    })
})