const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    order: { type: mongoose.SchemaTypes.ObjectId, ref: "Order" },
    product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
    name: { type: String },
    price: { type: Number },
    count: { type: Number },
    cover: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("OrderItem", schema, "orderItems");
