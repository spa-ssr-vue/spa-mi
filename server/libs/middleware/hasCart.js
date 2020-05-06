module.exports = config => {
  const Cart = require("../db/models/Cart");

  return async (req, res, next) => {
    const user = req.user;
    let cart = await Cart.findOne({ user: user._id });
    if (!cart) {
      cart = await Cart.create({ user: user._id });
    }
    req.cart = cart;
    await next();
  };
};
