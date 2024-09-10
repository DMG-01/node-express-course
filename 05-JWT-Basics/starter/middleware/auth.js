const jwt  = require("jsonwebtoken")
const CustomAPIError =  require("../errors/custom-error")

const authentication = async (req,res,next) => {
    const authHeader = req.headers.authorization
    if(!authHeader) {
        throw new CustomAPIError("No token provided",401)
    }
    if(!authHeader.startsWith("Bearer ")) {
        throw new CustomAPIError("Invalid Token")
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.decode(token,process.env.JWT_SECRET)
        const {id,username} =  decoded
        req.user = {id,username}
        next()
    }catch(error) {
        throw new CustomAPIError("unauthorized route",401)
    }

    
}

module.exports = authentication