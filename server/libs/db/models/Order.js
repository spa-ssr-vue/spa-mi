const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
    address: { type: String },
    description: { type: String },
    payment: { type: Number },
    paymentType: { type: Number },
    status: { type: Number }, // 0未处理 1已完成 2已取消
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", schema, "orders");
