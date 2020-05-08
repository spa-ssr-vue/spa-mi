const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
    address: { type: mongoose.SchemaTypes.ObjectId, ref: "Address" },
    description: { type: String },
    totalCount: { type: Number },
    totalPrice: { type: Number },
    payment: { type: Number },
    paymentType: { type: Number },
    status: { type: Number, default: 0 }, // 0未处理 1已完成 2已取消
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", schema, "orders");
