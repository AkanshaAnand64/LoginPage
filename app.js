const express = require("express");

require("dotenv").config();
require("./config/database").connect();

const auth = require("./middleware/auth");

const app = express();

app.use(express.json());
app.use("/", require("./routes/router"));
app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

// Logic goes here

module.exports = app;
