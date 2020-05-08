const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    category: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
    product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
    tag: { type: String },
    id: { type: Number },
    items: [
      {
        imgUrl: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Banner", schema, "banners");
