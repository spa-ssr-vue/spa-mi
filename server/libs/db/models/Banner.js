const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    category: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
    tag: { type: String },
    id: { type: Number },
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
