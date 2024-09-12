require('dotenv').config();
require('express-async-errors');
const auth = require("./routes/auth")
const jobRouter = require("./routes/jobs")
const authentication =  require("./middleware/authentication")
const connectDB = require("./db/connect")
const express = require('express');
const app = express();



// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

// extra packages

// routes

app.get('/', (req, res) => {
  res.send('jobs api');
});

app.use("/api/v1/auth",auth)
app.use("/api/v1/jobRouter",authentication,jobRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
