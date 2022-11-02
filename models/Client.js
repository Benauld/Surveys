const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema({
  title: String,
  forname: String,
  middlename: String,
  surname: String,
  image: String,
  email: String,
  mobile: String,
  status: String,
  nationality: String,
  advisor: String,
  dateCreated: Date,
  lastUpdated: Date,
});

mongoose.model("clients", clientSchema);
