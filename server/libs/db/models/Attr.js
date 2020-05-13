const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    category: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
    code: { type: String },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Attr", schema, "attrs");
