module.exports = app => {
  const express = require("express");
  const router = express.Router({ mergeParams: true });

  router.get("/", async (req, res, next) => {
    const { type = "" } = req.query;
    let newsList = [];
    switch (type) {
      case "tag":
        const { name = "", page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;
        const tag = await Tag.findOne({ name });
        newsList = await Article.find({ tags: [tag._id] })
          .populate("author")
          .skip(Number(skip))
          .limit(Number(limit));
        break;

      case "channel":
        break;
      default:
        newsList = [];
        break;
    }
    res.send(newsList);
  });

  router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    const news = await Article.findById(id).populate("author channel tags");
    res.send(news);
  });

  app.use("/web/api/news", router);
};
