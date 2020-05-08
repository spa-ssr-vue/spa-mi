const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    name: { type: String },
    phone: { type: String },
    addr: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", schema, "addresses");
