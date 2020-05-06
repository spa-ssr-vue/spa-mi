module.exports = app => {
  require("./auth")(app);
  require("./product")(app);
  require("./cart")(app);
  // require("./init")(app);
};
