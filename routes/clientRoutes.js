const mongoose = require("mongoose");
const Client = mongoose.model("clients");
const requireLogin = require("../middlewares/requireLogin");
const validateClient = require("../middlewares/validateClient");

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
  app.post("/api/clients", requireLogin, validateClient, async (req, res) => {
    const { title, forname, middlename, surname, image, email, nationality } =
      req.body;

    const client = await Client.create({
      title: title,
      forname: forname,
      middlename: middlename,
      surname: surname,
      image: "noImage.jpg",
      email: email,
      status: "Created",
      nationality: nationality,
      advisor: req.user._id,
      dateCreated: Date.now(),
      lastUpdated: Date.now(),
    });
    res.send(client);
  });
};
