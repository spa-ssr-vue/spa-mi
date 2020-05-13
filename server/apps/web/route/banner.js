module.exports = app => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true,
  });
  const Category = require("../../../libs/db/models/Category");
  const Product = require("../../../libs/db/models/Product");
  const Banner = require("../../../libs/db/models/Banner");

  router.get("/:code", async (req, res) => {
    const { code = 0 } = req.params;
    const banner = await Banner.findOne({ code: Number(code) }).populate(
      "product"
    );
    res.send({
      code: 0,
      message: "请求成功",
      data: banner,
    });
  });

  app.use("/web/api/banners", router);
};
