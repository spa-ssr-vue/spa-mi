module.exports = app => {
  const multer = require("multer");
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, __dirname + "/../../../upload");
    },
    filename: function(req, file, cb) {
      const originalName = file.originalname.split(".").shift();
      const suffix = file.originalname.split(".").pop();
      cb(null, file.fieldname + originalName + Date.now() + "." + suffix);
    }
  });

  const upload = multer({ storage });

  app.use("/admin/api/upload", upload.single("file"), (req, res, next) => {
    res.send({
      url: `http://localhost:3008/uploads/${req.file.filename}`
    });
  });
};
