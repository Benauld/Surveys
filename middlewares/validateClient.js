const mongoose = require("mongoose");
const Client = mongoose.model("clients");

module.exports = async (req, res, next) => {
  const { title, forname, middlename, surname, image, email, nationality } =
    req.body;
  if (!title) {
    return res.status(422).send({ error: "Title is required" });
  }
  if (!forname) {
    return res.status(422).send({ error: "Forname is required" });
  }
  if (!surname) {
    return res.status(422).send({ error: "Surname is required" });
  }
  if (!email) {
    return res.status(422).send({ error: "Email is required" });
  }
  //if (email.isEmail().normalizeEmail()) {
  //  return res.status(422).send({ error: "Email is not valid" });
  //}
  const clients = await Client.find({ email: email });
  console.log(clients);
  if (clients.length > 0) {
    return res
      .status(422)
      .send({ error: "Client email already exists, please enter a new one" });
  }
  next();
};
