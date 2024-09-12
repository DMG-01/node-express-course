const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwtToken = require("jsonwebtoken")

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:[true, "please enter a username"],
        minlength:1,
        maxlength:25
    }
,
    email: {
        type:String,
        required:[true,"please enter an email"],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "please enter a valid email"],
        unique:true
    }
    ,
    password : {
        type:String,
        required:[true,"please enter a password"],
        minlength:5
    }
})

userSchema.pre("save",async function(next) {
const salt = await bcrypt.genSalt(10)
this.password = await bcrypt.hash(this.password,salt)
next()
})

userSchema.methods.createJWT =  function() {
    const _jwtToken =  jwtToken.sign(
        { userId: this._id, name: this.name },
        "jwtToken",
        {
          expiresIn:"30days",
        }
      )
      console.log(` your token: ${_jwtToken}`)
      return _jwtToken

}

userSchema.methods.comparePassword = async function(passwordToCheck) {
    isMatch = await bcrypt.compare(passwordToCheck,this.password)
    return isMatch
}

module.exports = mongoose.model("user",userSchema)