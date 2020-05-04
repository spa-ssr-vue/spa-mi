module.exports = app => {
  const express = require("express");
  const router = express.Router({ mergeParams: true });
  const Category = require("./../../../libs/db/models/Category");

  router.get("/", async (req, res, next) => {
    const channels = await Category.find();
    res.send(channels);
  });

  router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const channel = await Channel.findById(id).populate("parentChannel");
    let channelList = [];
    if (channel.parentChannel) {
      channelList = await Channel.find({
        parentChannel: channel.parentChannel,
      });
    } else {
      channelList = await Channel.find({
        parentChannel: channel,
      });
    }

    const newsList = await Article.find({ channel: id })
      .skip(Number(skip))
      .limit(Number(limit))
      .populate("author channel");

    res.send({
      channel,
      channelList,
      newsList,
      success: true,
    });
  });

  app.use("/web/api/channels", router);
};
