const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const User = require("./models/user");
const jwt = require("jsonwebtoken");



const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.vlvjh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  () => {
    console.log("Connected to the database");
  }
);

//===MIDDLEWARES===//

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(auth)

app.use(routes);

app.listen(3000);
