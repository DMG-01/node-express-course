const StatusCodes = require("http-status-codes")
const   {BadRequestError, UnauthenticatedError} = require("../errors")
const bcrypt = require("bcryptjs")
const User = require("../models/User")


const signUp = async(req,res)=> {
    const user = await User.create({ ...req.body })
    const token = await user.createJWT()

   res.status(StatusCodes.CREATED).json({
    user:{name:user.name},
    token:token})
}


const login = async (req,res)=> {
    const {email,password} = req.body

    if(!email||!password) {
        throw new BadRequestError("please pass in email or password")
    }

    const user = await User.findOne({email})
    if(!user) {
        throw new UnauthenticatedError("please put in valid email and password")
    }
   const isPassword = await user.comparePassword(password)
   if(!isPassword) {
    throw new  UnauthenticatedError("please put in valid password")
   }
   const token = await user.createJWT()
    res.status(StatusCodes.OK).json({
        user: {
            userName:user.name
        },
        token
    })
}

module.exports = {login,signUp}