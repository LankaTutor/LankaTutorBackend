const express = require("express");
const router = express.Router();

//Load Pastpaper model
const Articles = require("../../models/Articles");

router.post("/articles", (req, res) => {
  const dbPapers = req.body;

  Articles.create(dbPapers, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

router.get("/articles", (req, res) => {
  Articles.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
