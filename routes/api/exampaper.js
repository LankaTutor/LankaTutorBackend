const express = require("express");
const router = express.Router();

//Load Pastpaper model
const Exampaper = require("../../models/Exampaper");

router.post("/exampapers", (req, res) => {
  const dbPapers = req.body;

  Exampaper.create(dbPapers, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

router.get("/exampapers", (req, res) => {
  Exampaper.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
