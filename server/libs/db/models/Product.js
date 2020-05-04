const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    id: { type: Number },
    category: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
    name: { type: String },
    title: { type: String },
    cover: { type: String },
    description: { type: String },
    stock: { type: Number },
    price: { type: Number },
    memberPrice: { type: Number },
    status: { type: Number }, // 0下架
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", schema, "products");
