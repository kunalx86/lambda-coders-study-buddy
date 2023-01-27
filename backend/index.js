require("dotenv").config();
const cors = require("cors");

const mongoose = require("mongoose");

const express = require("express");

const app = express();

const { MONGODB_URI } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  // To remove CROS (cross-resource-origin-platform) problem
  res.setHeader("Access-Control-Allow-Origin", "*"); // to allow all client we use *
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS,GET,POST,PUT,PATCH,DELETE"
  ); //these are the allowed methods
  res.setHeader("Access-Control-Allow-Headers", "*"); // allowed headers (Auth for extra data related to authoriaztiom)
  next();
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(PORT);
    console.log("Server Started!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
