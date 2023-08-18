const mongoose = require("mongoose");

// URL
const URI = "mongodb://127.0.0.1:27017/mern-3";

// Connection
mongoose.connect(URI);

// DataBase Managment
const ObjectDb = mongoose.connection;
ObjectDb.on("connected", () => {
  console.log("DB Connected");
});
ObjectDb.on("error", () => {
  console.log("Error on connection");
});

module.exports = mongoose
