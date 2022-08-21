const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Product = mongoose.model("products");

module.exports = (app) => {
  app.get("/api/products", async (req, res) => {
    const products = await Product.find().sort({ Geschäft: 1 });
    res.send(products);
  });
};
