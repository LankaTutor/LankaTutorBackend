const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const SubUnitSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  subunit: {
    type: String,
    required: true,
  },
  videos: {
    type: Number,
    required: true,
  },
});

module.exports = SubUnit = mongoose.model("subunits", SubUnitSchema);
