// import express module
const express = require("express");


// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");




// sportDB: la base de donnée
mongoose.connect("mongodb://localhost:27017/sportDB");

const matchesRoutes = require("./routes/matches-routes");

const playersRoutes = require("./routes/players-routes");

const teamsRoutes = require("./routes/teams-routes");

const userRoutes = require("./routes/users-routes");



// creates express application
const app = express();

// import path module
const path = require("path");
app.use("/images", express.static(path.join("backend/images")));

// Configure Body Parser
// Send response with JSON Format
app.use(bodyParser.json());
// Parse object attributes from Request
app.use(bodyParser.urlencoded({ extended: true }));

// Security Configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});



// Every Req(path starts by "/matches") will be dispatched to matchesRoutes
app.use("/matches", matchesRoutes);
// Every req(path starts by "/players") will be dispatched to playersRoutes
app.use("/players", playersRoutes);
// Every req(path starts by "/teams") will be dispatched to teamsRoutes
app.use("/teams", teamsRoutes);
// Every req(path starts by "/users") will be dispatched to usersRoutes
app.use("/users", userRoutes);

// app is importable from another files
module.exports = app;
