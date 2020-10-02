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

//getAll
router.get("/pastpapers",async (req,res)=>{
  var findData = await Pastpaper.find();
  res.json(findData);
});

//getOne
router.get("/pastpapers/:id",async (req,res)=>{
  let id = req.params.id;
  var findById = await Pastpaper.findById(id,(err,pastpaper)=>{
    res.json(pastpaper);
  });
});



module.exports = router;
