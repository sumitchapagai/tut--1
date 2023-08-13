// import express module
const express = require("express");
const router = express.Router();
// import user Model
const User = require("../models/user");
// make router exportable
module.exports = router;

// import bcrypt module
const bcrypt = require("bcrypt");



// import multer module

const multer = require("multer");

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  // file Name
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});
// Business Logic: User
router.post(
  "/signup",
  multer({ storage: storage }).single("img"),
  (req, res) => {
    console.log("here into user", req.body);
    console.log("here into file", req.file);
    bcrypt.hash(req.body.password, 10).then((cryptedPwd) => {
      let url = req.protocol + "://" + req.get("host");
      console.log(("here URL", url));
      console.log("here pwd crypted", cryptedPwd);
      console.log("hereeeeeee role ",req.body.role);
      let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: cryptedPwd,
        role: req.body.role,
        avatar: url + "/images/" + req.file.filename,
      });
      user.save((err, doc) => {
        console.log("here error", err);
        console.log("here doc", doc);
        if (err) {
          res.json({ message: "Error" });
        } else {
          res.json({ message: "User Added with success" });
        }
      });
    });
  }
);

// Business Logic: Login USer
// this function returns message
// if Error email=>message : 0
// if Error pwd=>message : 1
// if success=>mesage:2
router.post("/login", (req, res) => {
  console.log("Here user", req.body);
  User.findOne({ email: req.body.email })
    .then((doc) => {
      console.log("here doc after search by email ", doc);
      if (!doc) {
        res.json({ message: "0" });
      }
      return bcrypt.compare(req.body.password, doc.password);
    })
    .then((comaperdPwd) => {
      console.log("comaperdPwd", comaperdPwd);
      if (!comaperdPwd) {
        res.json({ message: "1" });
      }
      User.findOne({ email: req.body.email }).then((doc) => {
        let user = {
          id: doc._id,
          firstName: doc.firstName,
          lastName: doc.lastName,
          role: doc.role,
        };
        res.json({ user: user, message: "2" });
      });
    });
});

// busniess logic: get user by id
router.get("/profile/:id", (req, res) => {
  console.log("here id", req.params.id);
  User.findOne({ _id: req.params.id }).then((doc) => {
    res.json({ user: doc });
  });
});
// business logic : edit profile
router.put("/editProfile", (req, res) => {
  console.log("here user", req.body);
  User.updateOne({ _id: req.body._id }, req.body).then((editResponse) => {
    res.json({ message: "edited with success" });
  });
});

module.exports = router;
