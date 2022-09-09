const mongoose = require("mongoose");

const Product = mongoose.model("products");

module.exports = (app) => {
  app.get("/api/products/:id", async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) res.send("no product exists with given id");
    res.send(product);
  });
  app.get("/api/products", async (req, res) => {
    const products = await Product.find().sort({ Geschäft: 1 });
    res.send(products);
  });
};
