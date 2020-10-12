const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const QuestionSchema = new Schema({
    subject: {
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

module.exports = Question = mongoose.model("questions", QuestionSchema);
