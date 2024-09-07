const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    featured: {
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5,
        required:[true,"must provide a rating"]
    },
    createdAt: {
        type:Date,
        default:Date.now(),
        required:[true,"must provide a a date"]
    },
   
    name: {
        type:String,
        required:[true,"must provide an ID"],
        
    },
    price:{
        type:Number,
        required:[true,"must provide a price"]
    },
    company:{
        type:String,
        enum:{
           value: ["ikea","liddy","caressa","marcos"],
           message:"{VALUE} is not supported"
        },
        required:[true,"a company name must be provided  "]
    }   
})

module.exports = mongoose.model("products",productSchema)