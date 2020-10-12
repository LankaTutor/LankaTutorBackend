const express = require("express");
const router = express.Router();

//Load Pastpaper model
const Lecture = require("../../models/Lectures");

router.post("/", (req, res) => {
  const dbLecture = req.body;

  Lecture.create(dbLecture, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

router.get("/",async (req,res)=>{
  let findData = await Lecture.find();
  res.json(findData);
});

 //getMaths
router.get("/Maths",async (req,res)=>{
  let findData = await Lecture.find({subject:"Mathematics"});
  res.json(findData);
});

//getPhysics
router.get("/Physics",async (req,res)=>{
  let findData = await Lecture.find({subject:"Physics"});
  res.json(findData);
});

//getChemistry
router.get("/Chemistry",async (req,res)=>{
  let findData = await Lecture.find({subject:"Chemistry"});
  res.json(findData);
});

//getICT
router.get("/ICT",async (req,res)=>{
  let findData = await Lecture.find({subject:"ICT"});
  res.json(findData);
});

//getBiology
router.get("/Biology",async (req,res)=>{
  let findData = await Lecture.find({subject:"Biology"});
  res.json(findData);
});

//getOne
router.get("/:id",async (req,res)=>{
  let id = req.params.id;
  let findById = await Lecture.findById(id,(err, lecture)=>{
    res.json(lecture);
  });
});


module.exports = router;
