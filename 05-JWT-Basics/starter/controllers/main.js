const jwt = require("jsonwebtoken")
const CustomAPIError = require("../errors/custom-error")
const login = async (req,res)=> {
    const {username,password} = req.body

    if(!username || !password) {
      throw new CustomAPIError("please enter username and password",400)
    }
const id = new Date().getDate()

const token = jwt.sign({id,username},process.env.JWT_STRING,{expiresIn:"30d"})
    console.log(req.body)
    res.status(200).json({msg:"user created", token:token})
}

const dashboard = async (req,res)=> {
    const luckyNumber = Math.floor(Math.random()*100)
    console.log(req.headers)
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
throw new CustomAPIError("no token provided",401)
    }

    const token = authHeader.split(" ")[1]
    console.log(token)

    try {
const decode = jwt.decode(token,process.env.JWT_STRING)
console.log(decode)
    }catch(error) {
        throw new CustomAPIError(error,401)
    }
    res.status(200).json({
   msg:`Hello Femi`,
   secret:`Here is your authorized number, your secre data is ${luckyNumber}`
    })
    
}

module.exports = {login,dashboard}


