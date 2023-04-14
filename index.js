const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const route = require("./routes/route");

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(route);

mongoose.connect(process.env.DB_CONNECTION)
  .then(() => app.listen(3000, () => console.log("Server Up and running")));
