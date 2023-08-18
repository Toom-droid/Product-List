const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

// Connection
const connection = require("./connection");

// User Model
const UserModel = require("./models/product");

// Create Server
const app = express();

// Settings
app.set("port", process.env.PORT || 5000);

const isDevelopment = process.env.NODE_ENV !== "production";

// Middlewares
app.use(express.json());

// Routes
app.use("/api/products", require("./routes/product.routes"));

// Start Server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
  console.log(`http://localhost:${app.get("port")}`);
});
