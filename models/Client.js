const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema({
  title: String,
  forname: String,
  middlename: String
  surname: String,
  subject: String,
  body: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model("surveys", surveySchema);
