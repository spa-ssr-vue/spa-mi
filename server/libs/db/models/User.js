const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = new mongoose.Schema(
  {
    username: { type: String },
    password: {
      type: String,
      select: false,
      set(val) {
        return val ? bcrypt.hashSync(val) : val;
      },
    },
    role: { type: Number },
    avatar: { type: String },
    phone: { type: String },
    address: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", schema, "users");
