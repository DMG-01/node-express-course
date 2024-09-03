const mongoose = require("mongoose");

  const connectDb = (URI)=> {
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    socketTimeoutMS: 45000, 
  connectTimeoutMS: 30000,
    useUnifiedTopology: true,
  })
}
module.exports = connectDb
