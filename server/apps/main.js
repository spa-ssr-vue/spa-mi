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
require("./web/route")(app);

app.set("SECRET", "h3zg0jlx34e2i9bg5ut3hgs68e5d1t0gj042ly23c");

// error handle
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    status: err.statusCode || 500,
    message: err.message || "服务器错误",
  });
});

app.listen(3008, () => {
  console.log("http://localhost:3008");
});
