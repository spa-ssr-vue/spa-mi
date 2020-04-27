const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  res.send("OK!");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
