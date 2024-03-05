const events = require("../controllers/eventController");
const express = require("express");

const eventRouter = express.Router();

eventRouter.get("/", events.findAll);
eventRouter.post("/", events.create);

module.exports = app => {
  app.use("/api/events", eventRouter);
};