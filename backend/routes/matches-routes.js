// import express module
const express= require('express');
const router=express.Router();

// import Match Model
const Match = require("../models/match");

// Make router exportable
module.exports=router;

// business Logic: Get All Matches
router.get("/", (req, res) => {
    console.log("Here into business logic : GET ALL MATCHES");
    Match.find().then((docs) => {
      console.log("here docs", docs);
      res.json({ matches: docs, message: "Success" });
    });
  });
// business Logic: Add Match
router.post("/", (req, res) => {
    console.log("Here into business logic : post ADD MATCH", req.body);
    //   create variable match(type:Match)
    let match = new Match({
      scoreOne: req.body.scoreOne,
      scoreTwo: req.body.scoreTwo,
      teamOne: req.body.teamOne,
      teamTwo: req.body.teamTwo,
    });
  
    match.save((err, doc) => {
      console.log("Error", err);
      console.log(("Doc", doc));
      if (err) {
        res.json({ message: "Error" });
      } else {
        res.json({ message: "Added with success" });
      }
    });
  });
// business Logic: Delete Match
router.delete("/:id", (req, res) => {
    console.log("here into delete", req.params.id);
    Match.deleteOne({ _id: req.params.id }).then((result) => {
      console.log("here doc from DB", result);
      res.json({ message: "Deleted with success" });
    });
  });
// business Logic: GET  Match BY ID
router.get("/:id", (req, res) => {
    console.log("here into get match by id", req.params.id);
    Match.findOne({ _id: req.params.id }).then((doc) => {
      console.log("here doc from DB", doc);
      res.json({ match: doc });
    });
  });
// business Logic: Edit Match
router.put("/", (req, res) => {
    console.log("Here into edit match", req.body);
    Match.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
      console.log("here update reponse", updateResponse);
      if (updateResponse.modifiedCount == 1) {
        res.json({ message: "Success" });
      } else {
        res.json({ message: "Echec" });
      }
    });
  });