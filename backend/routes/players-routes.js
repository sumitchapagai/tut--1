// import express module
const express =require ('express');
const router = express.Router();
// import Player Model
const Player = require("../models/player");
// make router exportable
module.exports=router;

// business Logic: Get All PLAYERS
router.get("/", (req, res) => {
    console.log("Here into business logic : GET ALL PLAYERS");
    Player.find().then((docs) => {
      console.log("here docs", docs);
      res.json({ players: docs, message: "Success" });
    });
  });
// business Logic: ADD PLAYER
router.post("/", (req, res) => {
    console.log("Here into business logic : post ADD Player", req.body);
    let player = new Player({
      name: req.body.name,
      age: req.body.age,
      number: req.body.number,
      position: req.body.position,
    });
    player.save((err, doc) => {
      console.log("Error", err);
      console.log("Doc", doc);
      if (err) {
        res.json({ message: "Error" });
      } else {
        res.json({ message: "Added player with Success" });
      }
    });
  });
// business Logic: Delete PLayer
router.delete("/:id", (req, res) => {
    console.log("here into delete", req.params.id);
    Player.deleteOne({ _id: req.params.id }).then((result) => {
      console.log(("here doc from DB ", result));
      res.json({ message: "Deleted with success" });
    });
  });
// business Logic: GET  PLAyer BY ID
router.get("/:id", (req, res) => {
    console.log("here into get player by id", req.params.id);
    Player.findOne({ _id: req.params.id }).then((doc) => {
      console.log("here doc from DB", doc);
      res.json({ player: doc });
    });
  });
// business Logic: Edit Player
router.put("/", (req, res) => {
    console.log("Here into edit player", req.body);
    Player.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
      if (updateResponse.modifiedCount == 1) {
        res.json({ message: "Success" });
      } else {
        res.json({ message: "Echec" });
      }
    });
  });