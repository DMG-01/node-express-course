const jwt = require("jsonwebtoken")
const CustomAPIError = require("../errors/custom-error")
const login = async (req,res)=> {
    const {username,password} = req.body

    if(!username || !password) {
      throw new CustomAPIError("please enter username and password",400)
    }
const id = new Date().getDate()

const token = jwt.sign({id,username},process.env.JWT_STRING,{expiresIn:"30d"})
    //console.log(req.body)
    res.status(200).json({msg:"user created", token:token})
}

const dashboard = async (req,res)=> {
     console.log(req.user)
    const luckyNumber = Math.floor(Math.random()*100)
    console.log
    try {
res.status(200).json({
    msg:`Hello ${req.user.username}`,
    secret:`Here is your authorized number, your secret data is ${luckyNumber}`
     })
    }catch(error) {
        throw new CustomAPIError(error,401)
    }

    
    
}

module.exports = {login,dashboard}


