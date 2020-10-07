const express = require("express");
const router = express.Router();

//Load Pastpaper model
const Pastpaper = require("../../models/Pastpaper");

router.post("/", (req, res) => {
  const dbPapers = req.body;

  Pastpaper.create(dbPapers, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

router.get("/",async (req,res)=>{
  let findData = await Pastpaper.find();
  res.json(findData);
});

 //getMaths
router.get("/Maths",async (req,res)=>{
  let findData = await Pastpaper.find({subject:"Maths"});
  res.json(findData);
});

//getPhysics
router.get("/Physics",async (req,res)=>{
  let findData = await Pastpaper.find({subject:"Physics"});
  res.json(findData);
});

//getChemistry
router.get("/Chemistry",async (req,res)=>{
  let findData = await Pastpaper.find({subject:"Chemistry"});
  res.json(findData);
});

//getICT
router.get("/ICT",async (req,res)=>{
  let findData = await Pastpaper.find({subject:"ICT"});
  res.json(findData);
});

//getBiology
router.get("/Biology",async (req,res)=>{
  let findData = await Pastpaper.find({subject:"Biology"});
  res.json(findData);
});

//getOne
router.get("/:id",async (req,res)=>{
  let id = req.params.id;
  let findById = await Pastpaper.findById(id,(err,pastpaper)=>{
    res.json(pastpaper);
  });
});



// router.get('/Maths',async(req, res)=>{
//   Pastpaper.find({subject: "Maths"}, function(err, pastpaper) 
//   {
//      if (err)
//      {
//          res.send(err);
//      }
//      console.log(pastpaper);
//      res.json(pastpaper);
 
//   });
//  });
 

// db.collection.find()

module.exports = router;
