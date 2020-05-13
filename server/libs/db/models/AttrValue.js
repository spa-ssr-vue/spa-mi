const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    attr: { type: mongoose.SchemaTypes.ObjectId, ref: "Attr" },
    code: { type: String },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AttrValue", schema, "attrValues");
