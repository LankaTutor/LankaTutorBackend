const express = require("express");
const router = express.Router();

//Load Pastpaper model
const Question = require("../../models/Question");

router.post("/", (req, res) => {
  const dbQuestion = req.body;

  Question.create(dbQuestion, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

router.get("/",async (req,res)=>{
  let findData = await Question.find();
  res.json(findData);
});

 //getMaths
router.get("/Maths",async (req,res)=>{
  let findData = await Question.find({subject:"Maths"});
  res.json(findData);
});

//getPhysics
router.get("/Physics",async (req,res)=>{
  let findData = await Question.find({subject:"Physics"});
  res.json(findData);
});

//getChemistry
router.get("/Chemistry",async (req,res)=>{
  let findData = await Question.find({subject:"Chemistry"});
  res.json(findData);
});

//getICT
router.get("/ICT",async (req,res)=>{
  let findData = await Question.find({subject:"ICT"});
  res.json(findData);
});

//getBiology
router.get("/Biology",async (req,res)=>{
  let findData = await Question.find({subject:"Biology"});
  res.json(findData);
});

//getOne
router.get("/:id",async (req,res)=>{
  let id = req.params.id;
  let findById = await Question.findById(id,(err,pastpaper)=>{
    res.json(Question);
  });
});


module.exports = router;
