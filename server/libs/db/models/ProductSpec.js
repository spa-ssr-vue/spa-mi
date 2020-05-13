const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    code: { type: Number },
    product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
    specs: [{ type: mongoose.SchemaTypes.ObjectId, ref: "AttrValue" }],
    stock: { type: Number },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ProductSpec", schema, "productSpecs");
