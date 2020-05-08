module.exports = app => {
  const express = require("express");
  const router = express.Router({ mergeParams: true });

  const Order = require("../../../libs/db/models/Order");
  const OrderItem = require("../../../libs/db/models/OrderItem");
  const CartItem = require("../../../libs/db/models/CartItem");

  const authMiddleware = require("../../../libs/middleware/auth")(app);
  const hasCartMiddleware = require("../../../libs/middleware/hasCart")(app);

  router.post("/", async (req, res) => {
    const { address = {}, orderItems = [] } = req.body;
    const user = req.user;
    const cart = req.cart;
    const cartItems = await CartItem.find({
      cart: cart._id,
    });
    const selectedCartItem = cartItems.filter(item => item.selected);

    let totalCount = 0,
      totalPrice = 0;
    orderItems.forEach(item => {
      totalCount += item.count;
      totalPrice += item.count * item.price;
    });

    const order = {
      user: user._id,
      address: address._id,
      totalCount,
      totalPrice,
    };

    const od = await Order.create(order);
    for (const orderItem of orderItems) {
      let item = {
        order: od._id,
        product: orderItem.product,
        name: orderItem.name,
        price: orderItem.price,
        count: orderItem.count,
        cover: orderItem.cover,
      };
      await OrderItem.create(item);
      await CartItem.findByIdAndDelete(orderItem._id);
    }

    res.send({
      code: 0,
      message: "添加成功",
      data: od,
    });
  });

  router.get("/", async (req, res) => {
    const user = req.user;
    let order1 = await Order.find({
      user: user._id,
    }).populate("user address");
    let order2 = await Order.aggregate([
      {
        $match: { user: user._id },
      },
      {
        $lookup: {
          from: "orderItems",
          localField: "_id",
          foreignField: "order",
          as: "items",
        },
      },
    ]);
    // deep copy
    let orders1 = JSON.parse(JSON.stringify(order1));
    let orders2 = JSON.parse(JSON.stringify(order2));

    // let orders1 = Array.prototype.slice.call(order1);
    // let orders2 = Array.prototype.slice.call(order2);

    orders1.forEach((item, i) => {
      item.items = orders2[i].items;
    });

    res.send({
      code: 0,
      message: "查询成功",
      data: orders1,
    });
  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const order = await Order.findById(id);
    const data = await Order.aggregate([
      {
        $match: { _id: order._id },
      },
      {
        $lookup: {
          from: "orderItems",
          localField: "_id",
          foreignField: "order",
          as: "items",
        },
      },
    ]);
    res.send({
      code: 0,
      message: "获取成功",
      data: data[0],
    });
  });

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.send({
      code: 0,
      message: "删除成功",
    });
  });

  app.use("/web/api/orders", authMiddleware, hasCartMiddleware, router);
};
