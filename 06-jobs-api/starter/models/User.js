const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    name:{
        type:string,
        required:[true, "please enter a username"],
        minlength:5,
        maxlength:25
    }
,
    email: {
        type:string,
        required:[true,"please enter an email"],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "please enter a valid email"],
        unique:true
    }
    ,
    password : {
        type:string,
        required:[true,"please enter a password"],
        minlength:5
    }
})


module.exports = mongoose.model("user",userSchem)