const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  type: String,
  name: String,
  quantity: Number,
  price: Number,
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
