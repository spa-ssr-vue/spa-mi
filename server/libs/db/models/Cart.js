const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    isSelectedAll: { type: Boolean, default: false },
    totalCount: { type: Number },
    totalPrice: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", schema, "carts");
