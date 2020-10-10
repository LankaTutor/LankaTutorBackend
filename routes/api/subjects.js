const express = require("express");
const router = express.Router();

//Load Pastpaper model
const Subject = require("../../models/Subject");

router.post("/subjects", (req, res) => {
    const dbSubject = req.body;
  
    Subject.create(dbSubject, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  });

  router.get("/subjects", (req, res) => {
    Subject.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });
  
  module.exports = router;
  
  