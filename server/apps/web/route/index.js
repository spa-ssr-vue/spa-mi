module.exports = app => {
  require("./auth")(app);
  require("./product")(app);
  require("./cart")(app);
  require("./order")(app);
  require("./address")(app);
  require("./banner")(app);
  require("./init")(app);
};
