const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const PastpaperSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

module.exports = Pastpaper = mongoose.model("pastpapers", PastpaperSchema);
