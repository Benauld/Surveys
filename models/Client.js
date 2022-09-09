const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema({
  title: String,
  forname: String,
  middlename: String,
  surname: String,
  image: String,
  email: String,
  status: String,
  _user: { type: Schema.Types.ObjectId, ref: "advisor" },
  dateCreated: Date,
  lastUpdated: Date,
});

mongoose.model("clients", clientSchema);
