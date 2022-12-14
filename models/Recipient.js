const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});
// sub-schema of Survey so no need to register in Mongoos model
module.exports = recipientSchema;
