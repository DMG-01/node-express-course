const mongoose = require("mongoose");
const connection =
  "mongodb+srv://femi:1234@nodeexpresstut.z5tzs.mongodb.net/?retryWrites=true&w=majority&appName=nodeExpressTut";

  const connectDb = ()=> {
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}
module.exports = connectDb
