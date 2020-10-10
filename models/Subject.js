const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const SubjectSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  videos: {
    type: Number,
    required: true,
  },
  subunits: {
    type: Number,
    required: true,
  },
});

module.exports = Subject = mongoose.model("subjects", SubjectSchema);
