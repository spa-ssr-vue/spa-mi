const express = require("express");
const app = express();

// parse json data and resolve frontend cors
app.use(express.json());
app.use(require("cors")());

// static file
app.use("/uploads", express.static(__dirname + "/../upload"));

// database
require("./../libs/db/db")(app);

// routes
require("./admin/route")(app);
// require("./web/route")(app);

// error handle
app.use((err, req, res, next) => {
  console.log(err.message);
  res.send({
    status: 500,
    message: "请求错误",
  });
});

app.listen(3008, () => {
  console.log("http://localhost:3008");
});
