const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ExampaperSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  school: {
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
  fileUrl: {
    type: String,
    required: true,
  },
});

module.exports = Exampaper = mongoose.model("exampapers", ExampaperSchema);
