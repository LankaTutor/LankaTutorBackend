const express = require("express");
const router = express.Router();

//Load Pastpaper model
const SubUnit = require("../../models/SubUnit");

router.post("/subunits", (req, res) => {
    const dbUnit = req.body;
  
    SubUnit.create(dbUnit, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  });

  router.get("/subunits", (req, res) => {
    SubUnit.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });

  router.get("/subunits/physics", (req, res) => {
    SubUnit.find(({},{subject: 'Physics'}), (err,data)=>{
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });

  router.get("/subunits/chemistry", (req, res) => {
    SubUnit.find(({},{subject: 'Chemistry'}), (err,data)=>{
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });

  router.get("/subunits/biology", (req, res) => {
    SubUnit.find(({},{subject: 'Biology'}), (err,data)=>{
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });

  router.get("/subunits/mathematics", (req, res) => {
    SubUnit.find(({},{subject: 'Mathematics'}), (err,data)=>{
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });
  
  module.exports = router;
  
  