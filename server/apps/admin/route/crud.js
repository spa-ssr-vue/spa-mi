module.exports = app => {
  const express = require("express");
  const router = express.Router({ mergeParams: true });
  const resourceMiddleware = require("./../../../libs/middleware/resource")(
    app
  );

  const Category = require("./../../../libs/db/models/Category");

  router.post("/", async (req, res, next) => {
    const item = req.body;
    const data = await req.Model.create(item);
    // const data = await crudService.create(req.Model, item);
    res.send({
      success: true,
      data,
    });
  });

  router.get("/", async (req, res, next) => {
    const { page = 1, limit = 10, operator = {} } = JSON.parse(req.query.query);
    const skip = (page - 1) * limit;
    const total = await req.Model.countDocuments();
    const data = await req.Model.find()
      .skip(skip)
      .limit(limit)
      .setOptions(operator);
    res.send({
      success: true,
      total,
      data,
    });
  });

  router.get("/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await req.Model.findOneById(id);
    res.send({
      success: true,
      data,
    });
  });

  router.put("/:id", async (req, res, next) => {
    const id = req.params.id;
    const item = req.body;
    const data = await req.Model.findByIdAndUpdate(id, item);
    res.send({
      success: true,
      data,
    });
  });

  router.delete("/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await req.Model.findByIdAndDelete(id);
    res.send({
      success: true,
      data,
    });
  });

  app.use("/admin/api/:resource", resourceMiddleware, router);
};
