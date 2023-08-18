const express = require("express");
const router = express.Router();

const Product = require("../models/product");

router.post("/add", async (req, res) => {
  const newProduct = new Product({
    type: req.body.type,
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
  });
  await newProduct.save();
  res.json({ ...newProduct, status: "200" });
});

router.get("/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  const products = await Product.find();
  res.json(products);
});

router.delete("/delete/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ status: "Product Deleted" });
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

router.put("/edit/:id", async (req, res) => {
  const { type, name, quantity, price } = req.body;
  const productUpdated = { type, name, quantity, price };
  await Product.findByIdAndUpdate(req.params.id, productUpdated, {
    omitUndefined: true,
  });
  res.json({ status: "Product Updated" });
});

module.exports = router;
