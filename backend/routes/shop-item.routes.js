module.exports = app => {
    const shopItems= require("../controllers/shop-item.controller.js");
    const upload = require('../config/multer.config.js');
    var router = require("express").Router();
  
    router.post("/", upload.array("files"), shopItems.create);
    router.get("/", shopItems.findAll);
    router.get("/:id", shopItems.findOneById);
    router.delete("/:id", shopItems.deleteById);
    router.delete("/", shopItems.deleteSelected);
  
    app.use('/api/shopItems', router);
  };
  