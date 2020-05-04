const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    type: { type: String, enum: ["Product", "Comment"] },
    object: { type: mongoose.SchemaTypes.ObjectId, refPath: "type" },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Action", schema, "actions");
