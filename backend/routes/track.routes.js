module.exports = app => {
    const tracks= require("../controllers/track.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tracks.create);
  
    // Retrieve all Tutorials
    router.get("/", tracks.findAll);
  
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tracks.findOneById);

    // Update a Tutorial with id
    router.put("/:id", tracks.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tracks.delete);
  
    // Create a new Tutorial
    router.delete("/", tracks.deleteAll);
  
    app.use('/api/tracks', router);
  };