const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    parentCategory: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
      default: null,
    },
    id: { type: Number },
    name: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", schema, "categories");
