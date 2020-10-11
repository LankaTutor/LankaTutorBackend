const express = require("express");
const router = express.Router();

//Load Exampaper model
const Exampaper = require("../../models/Exampaper");

// router.post("/exampapers", (req, res) => {
//   const dbPapers = req.body;

//   Exampaper.create(dbPapers, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send(data);
//     }
//   });
// });

// router.get("/exampapers", (req, res) => {
//   Exampaper.find((err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });

router.post("/", (req, res) => {
  const dbPapers = req.body;

  Exampaper.create(dbPapers, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

router.get("/",async (req,res)=>{
  let findData = await Exampaper.find();
  res.json(findData);
});

 //getMaths
router.get("/Maths",async (req,res)=>{
  let findData = await Exampaper.find({subject:"Maths"});
  res.json(findData);
});

//getPhysics
router.get("/Physics",async (req,res)=>{
  let findData = await Exampaper.find({subject:"Physics"});
  res.json(findData);
});

//getChemistry
router.get("/Chemistry",async (req,res)=>{
  let findData = await Exampaper.find({subject:"Chemistry"});
  res.json(findData);
});

//getICT
router.get("/ICT",async (req,res)=>{
  let findData = await Exampaper.find({subject:"ICT"});
  res.json(findData);
});

//getBiology
router.get("/Biology",async (req,res)=>{
  let findData = await Exampaper.find({subject:"Biology"});
  res.json(findData);
});

//getOne
router.get("/:id",async (req,res)=>{
  let id = req.params.id;
  let findById = await Exampaper.findById(id,(err,exampaper)=>{
    res.json(exampaper);
  });
});


module.exports = router;