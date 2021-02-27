module.exports = app => {
    const tracks= require("../controllers/track.controller.js");
    const upload = require('../config/multer.config.js');
    var router = require("express").Router();
  
    router.post("/", upload.single("file"), tracks.create);
  
    router.get("/", tracks.findAll);

    router.get("/:instrumentType", tracks.findByInstrumentType);
  
    router.get("/:id", tracks.findOneById);

    router.put("/:id", tracks.update);
  
    router.delete("/:id", tracks.deleteById);
  
    router.delete("/", tracks.deleteSelected);
  
    app.use('/api/tracks', router);
  };