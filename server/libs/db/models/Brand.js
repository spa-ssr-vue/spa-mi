const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    code: { type: Number },
    name: { type: String },
    logoImg: { type: String },
    letter: { type: String },
    desc: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Brand", schema, "brands");
