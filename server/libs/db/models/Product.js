const mongoose = require("mongoose");
// SPU
const schema = new mongoose.Schema(
  {
    code: { type: Number },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }],
    brand: { type: mongoose.SchemaTypes.ObjectId, ref: "Brand" },
    name: { type: String },
    title: { type: String },
    subTitle: { type: String },
    coverImg: { type: String },
    thumbImg: { type: String },
    desc: { type: String },
    status: { type: Number }, // 0下架 1上架

    
    stock: { type: Number },
    price: { type: Number },
    memberPrice: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", schema, "products");
