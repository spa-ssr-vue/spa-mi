module.exports = app => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true,
  });
  const mongoose = require("mongoose");
  const Category = require("./../../../libs/db/models/Category");
  const Product = require("./../../../libs/db/models/Product");
  const Banner = require("./../../../libs/db/models/Banner");

  router.get("/", async (req, res) => {
    let tag = "";
    let code = [];
    let limit = 0;
    let items = [];
    if (req.query.query) {
      const query = JSON.parse(req.query.query);
      tag = query.tag;
      code = query.code;
      limit = query.limit;
    }
    switch (tag) {
      case "category":
        items = await Category.aggregate([
          {
            $match: {
              code: { $in: code },
            },
          },
          {
            $lookup: {
              from: "products",
              localField: "_id",
              foreignField: "categories",
              as: "productList",
            },
          },
          {
            $lookup: {
              from: "banners",
              localField: "_id",
              foreignField: "category",
              as: "banner",
            },
          },
          {
            $lookup: {
              from: "banners",
              localField: "_id",
              foreignField: "category",
              as: "banner",
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

    const banner = await Banner.findOne({ product: id });

    res.send({
      code: 0,
      message: "请求成功",
      data: { product, banner },
    });
  });

  app.use("/web/api/products", router);
};
