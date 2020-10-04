const express = require("express");
const router = express.Router();

//Load Pastpaper model
const Pastpaper = require("../../models/Pastpaper");

router.post("/pastpapers", (req, res) => {
  const dbPapers = req.body;

  Pastpaper.create(dbPapers, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

router.get("/pastpapers", async (req, res) => {
  var pastpapers = await Pastpaper.find();
  res.json(pastpapers);
});

module.exports = router;
