// import express module
const express=require ('express');
const router=express.Router();
// import team Model
const Team = require("../models/team");
// make router exportable 
module.exports=router;


// business Logic: Get All TEAMS
router.get("/", (req, res) => {
    console.log("Here into business logic : GET ALL TEAMS");
    Team.find().then((docs) => {
      console.log("here docs", docs);
      res.json({ teams: docs, message: "Success" });
    });
  });
  
  // business Logic: ADD TEAM
  router.post("/", (req, res) => {
    console.log("Here into business logic : post ADD Team", req.body);
    let team = new Team({
      name: req.body.name,
      foundation: req.body.foundation,
      stadium: req.body.stadium,
      owner: req.body.owner,
    });
    team.save((err, doc) => {
      console.log("Error", err);
      console.log(("Doc", doc));
      if (err) {
        res.json({ message: "Error" });
      } else {
        res.json({ message: "Added team with success" });
      }
    });
  });
 
  // business Logic: Delete Team
  router.delete("/:id", (req, res) => {
    console.log("here into delete", req.params.id);
    Team.deleteOne({ _id: req.params.id }).then((result) => {
      console.log(("here doc from DB ", result));
      res.json({ message: "Deleted with success" });
    });
  });
  
  // business Logic: GET  Team BY ID
  router.get("/:id", (req, res) => {
    console.log("here into get team by id", req.params.id);
    Team.findOne({ _id: req.params.id }).then((doc) => {
      console.log("here doc from DB", doc);
      res.json({ team: doc });
    });
  });
  
  // business Logic: Edit Team
  router.put("/", (req, res) => {
    console.log("Here into edit team", req.body);
    Team.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
      if (updateResponse.modifiedCount == 1) {
        res.json({ message: "Success" });
      } else {
        res.json({ message: "Echec" });
      }
    });
  });