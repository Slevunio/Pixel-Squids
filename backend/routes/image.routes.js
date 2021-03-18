module.exports = app => {
    const images= require("../controllers/image.controller.js");
    const upload = require('../config/multer.config.js');
    var router = require("express").Router();
  
    router.post("/", upload.single("file"), images.create);
    router.get("/:id", images.findAllByObjectId);
    router.delete("/:id", images.deleteAllByObjectId);
  
    app.use('/api/images', router);
  };
  