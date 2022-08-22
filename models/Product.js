const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  Name: String,
  Geschäft: String,
  Produkttyp: String,
  image: String,
  image2: String,
  GeografischerFokus: String,
  Laufzeit: String,
  Zielrendite: String,
  Ausschüttung: String,
  Emissionsvolumen: String,
  Mindestinvestitionsvolumen: String,
  Status: String,
  Beschreibung: String,
  Entstehung: String,
  Gattung: String,
  Maße: String,
  Sonstiges: String,
  Auflage: String,
  Auktionsumsatz: String,
  IndikativerMarktwert: String,
  Anlageform: String,
  Portrait: String,
  AnleihebedingungenDoc: String,
  BIBDoc: String,
  VerbraucherinformationenDoc: String,
  dateSent: Date,
  lastUpdated: Date,
});

mongoose.model("products", productSchema);
