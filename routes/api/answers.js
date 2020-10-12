const express = require("express");
const router = express.Router();

//Load Pastpaper model
const Answer = require("../../models/Answer");

router.post("/", (req, res) => {
  const dbAnswers = req.body;

  Answer.create(dbAnswers, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});



//getOne
router.get("/:id",async (req,res)=>{
  let id = req.params.id;
  let findById = await Answer.findById(id,(err,answer)=>{
    res.json(answer);
  });
});


module.exports = router;
