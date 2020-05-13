const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    category: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
    product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
    color: { type: String },
    tag: { type: String },
    code: { type: Number },
    items: [
      {
        imgUrl: { type: String },
        targetUrl: { type: String },
        product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Banner", schema, "banners");
