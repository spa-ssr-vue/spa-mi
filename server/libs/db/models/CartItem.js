const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    cart: { type: mongoose.SchemaTypes.ObjectId, ref: "Cart" },
    product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
    name: { type: String },
    isSelected: { type: Boolean, default: true },
    price: { type: Number },
    count: { type: Number },
    cover: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CartItem", schema, "cartItems");
