const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    pid: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
      default: null,
    },
    code: { type: Number },
    name: { type: String },
    desc: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", schema, "categories");
