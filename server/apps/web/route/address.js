module.exports = app => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true,
  });

  const authMiddleware = require("./../../../libs/middleware/auth")();
  const Category = require("../../../libs/db/models/Category");
  const Product = require("../../../libs/db/models/Product");
  const Address = require("../../../libs/db/models/Address");

  router.get("/", async (req, res) => {
    const user = req.user;
    let page = 0,
      limit = 0,
      skip = 0;
    if (req.query.query) {
      const { page1 = 1, limit1 = 4 } = req.query.query;
      page = page1;
      limit = limit1;
      skip = (page1 - 1) * limit1;
    }

    const addresses = await Address.find({ user: user._id })
      .skip(skip)
      .limit(limit);

    res.send({
      code: 0,
      message: "请求成功",
      data: addresses,
    });
  });

  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const address = await Address.findByIdAndUpdate(id, data);

    res.send({
      code: 0,
      message: "请求成功",
      data: address,
    });
  });

  app.use("/web/api/addresses", authMiddleware, router);
};
