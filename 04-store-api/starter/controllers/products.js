const products =  require("../models/product")

const getAllProductsStatic = async(req,res)=> {
const product = await products.find({}).sort("price")
res.status(200).json({msg:product})
}

const getAllProducts = async(req,res)=> {

    const {featured,company,name,sort,fields} =  req.query
    const queryObject = {}
    if(featured) {
    queryObject.featured = featured === 'true' ? true : false;
    }
    if(company) {
     queryObject.company = company
    }
    if(name) {
     queryObject.name = {$regex:name, $options:'i'}  // i stands for upper or lowercase 
    }

    let result = products.find(queryObject) 

    //sort is used to arrange the data accoring to the model property e.g name
    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
      } else {
        result = result.sort('createdAt');
      }
      //fields are used to select what should be returned to the database from the model schema
if(fields) {
  const fieldList = fields.split(',').join(" ")
  result = result.select(fieldList)
}
    const product = await result
    res.status(200).json({product, nbHits:product.length})
}


module.exports = {
    getAllProductsStatic,getAllProducts
}