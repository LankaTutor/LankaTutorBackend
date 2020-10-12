const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const AnswerSchema = new Schema({
    questionref: {
    type: String,
    required: true,
    },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  }
});

module.exports = Answer = mongoose.model("answers", AnswerSchema);
