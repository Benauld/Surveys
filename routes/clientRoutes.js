const mongoose = require("mongoose");
const Client = mongoose.model("clients");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.get("/api/clients/:id", requireLogin, async (req, res) => {
    const id = req.params.id;
    const client = await Client.findById(id);
    if (!client) res.send("no client exists with given id");
    res.send(client);
  });
  app.get("/api/clients", requireLogin, async (req, res) => {
    const clients = await Client.find({ advisor: req.user._id });
    if (!clients) res.send("no client exists with given id");
    res.send(clients);
  });
};
