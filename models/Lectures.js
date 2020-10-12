const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const LectureSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  videoNum: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
});

module.exports = Lecture = mongoose.model("lectures", LectureSchema);
