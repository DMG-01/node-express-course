const products =  require("../models/product")

const getAllProductsStatic = async(req,res)=> {
const product = await products.find({name: "accent chair"})
res.status(200).json({msg:product})
}

const getAllProducts = async(req,res)=> {

    const {featured,company,name} =  req.query
    const queryObject = {}
    if(featured) {
    queryObject.featured = featured === 'true' ? true : false;
    }
    if(company) {
     queryObject.company = company
    }
    if(name) {
     queryObject.name = {$regex:name, $options:'i'}   
    }
    const product = await products.find(queryObject) 
    res.status(200).json({product, nbHits:product.length})
}


module.exports = {
    getAllProductsStatic,getAllProducts
}