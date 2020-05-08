module.exports = app => {
  const express = require("express");
  const router = express.Router({ mergeParams: true });

  const Cart = require("./../../../libs/db/models/Cart");
  const CartItem = require("./../../../libs/db/models/CartItem");

  const authMiddleware = require("./../../../libs/middleware/auth")(app);
  const hasCartMiddleware = require("./../../../libs/middleware/hasCart")(app);

  router.post("/", async (req, res) => {
    const { productId = "", product = null, count = 1 } = req.body;
    const cart = req.cart;

    const cartItem = await CartItem.findOne({ product: productId });
    if (cartItem) {
      cartItem.count += count;
      await cartItem.save();
    } else {
      const item = {
        cart: cart._id,
        product: productId,
        name: product.name,
        price: product.price,
        cover: product.cover,
      };
      await CartItem.create(item);
    }

    res.send({
      code: 0,
      message: "添加成功",
      data: {},
    });
  });

  router.get("/", async (req, res) => {
    // update cart
    let totalCount = 0,
      totalPrice = 0,
      isSelectedAll = false,
      selectedCartItems = [];
    const cart = req.cart; // get cart doc from hasCart middleware
    const cartItems = await CartItem.find({
      cart: cart._id,
    }); // get cartItems in the cart
    isSelectedAll = cartItems.every(dic => dic.selected); // is selectedAll ?
    selectedCartItems = cartItems.filter(dic => dic.selected); // get selected cartItem

    selectedCartItems.forEach(
      doc => (totalPrice += (doc.count || 0) * (doc.price || 0))
    ); // cal selected price
    cartItems.forEach(doc => (totalCount += doc.count || 0)); // cal total count(selected or unselected)

    // update
    cart.totalCount = totalCount || 0;
    cart.totalPrice = totalPrice || 0;
    cart.isSelectedAll = isSelectedAll;
    await cart.save();

    const ret = await Cart.aggregate([
      { $match: { _id: cart._id } },
      {
        $lookup: {
          from: "cartItems",
          localField: "_id",
          foreignField: "cart",
          as: "items",
        },
      },
    ]);

    res.send({
      code: 0,
      message: "查询成功",
      data: ret[0],
    });
  });

  router.put("/selected/selectedAll", async (req, res) => {
    const cart = req.cart;
    const cartItems = await CartItem.find({
      cart: cart._id,
    });
    if (cart.isSelectedAll) {
      cartItems.forEach(async item => {
        item.selected = false;
        await item.save();
      });
    } else {
      cartItems.forEach(async item => {
        item.selected = true;
        await item.save();
      });
    }

    res.send({
      code: 0,
      message: "修改成功",
    });
  });

  router.put("/selected/:id", async (req, res) => {
    const { id } = req.params; // get cartItem id
    const cartItem = await CartItem.findById(id);
    cartItem.selected = !cartItem.selected;
    await cartItem.save(); // db action

    res.send({
      code: 0,
      message: "修改成功",
      // data: cart,
    });
  });

  router.put("/count/:id", async (req, res) => {
    const { id } = req.params;
    const { count = 0 } = req.body;
    const cartItem = await CartItem.findById(id);
    cartItem.count += count;
    cartItem.save();

    res.send({
      code: 0,
      message: "修改成功",
    });
  });

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await CartItem.findByIdAndDelete(id);
    res.send({
      code: 0,
      message: "删除成功",
    });
  });

  app.use("/web/api/carts", authMiddleware, hasCartMiddleware, router);
};
