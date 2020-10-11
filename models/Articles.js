const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ArticlesSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = Articles = mongoose.model("articles", ArticlesSchema);
