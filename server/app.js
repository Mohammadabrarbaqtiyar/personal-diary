const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const User = require("./models/user");
const jwt = require("jsonwebtoken");
const firebase = require("firebase-admin");
firebase.initializeApp({
  projectId: "virtual-diary-338407",
  appId: "1:46843948656:web:e5fa0b7540926c83968eb5",
  storageBucket: "virtual-diary-338407.appspot.com",
  apiKey: "AIzaSyBbbWRbRtIeeTsI5p1KvfPztv8ZEW6BtnY",
  authDomain: "virtual-diary-338407.firebaseapp.com",
  messagingSenderId: "46843948656",
  measurementId: "G-19DLCQJ0CV",
  webClientId: "46843948656-qb0n9a8cl9mhc43s893tnq48gl4ofhke.apps.googleusercontent.com",
  webClientSecret: "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",
});



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
