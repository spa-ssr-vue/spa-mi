module.exports = app => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true,
  });
  const Category = require("./../../../libs/db/models/Category");
  const Product = require("./../../../libs/db/models/Product");

  router.get("/", async (req, res) => {
    let tag = "";
    let productId = [];
    let limit = 0;
    let items = [];
    if (req.query.query) {
      const query = JSON.parse(req.query.query);
      tag = query.tag;
      productId = query.productId;
      limit = query.limit;
    }
    switch (tag) {
      case "site":
        items = await Category.aggregate([
          {
            $match: {
              id: { $in: productId },
            },
          },
          {
            $lookup: {
              from: "products",
              localField: "_id",
              foreignField: "category",
              as: "productList",
            },
          },
          {
            $addFields: {
              productList: { $slice: ["$productList", limit] },
            },
          },
        ]);
        break;

      default:
        break;
    }

    res.send({
      code: 0,
      message: "请求成功",
      data: items,
    });
  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.send({
      code: 0,
      message: "请求成功",
      data: product,
    });
  });

  app.use("/web/api/products", router);
};
