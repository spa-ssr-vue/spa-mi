const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    content: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", schema, "comments");
