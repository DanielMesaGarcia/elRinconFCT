const db = require("../models");
const Event = db.event;


exports.findAll = (req, res) => {
    Event.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving all Events"
      })
    })
  };
  
  exports.create = (req, res) => {
    const event = {
        eventName: req.body.eventName,
        eventDescription: req.body.eventDescription,
        activityType: req.body.activityType,
        eventDate: req.body.eventDate,
        eventTime: req.body.eventTime,
        eventLocation: req.body.eventLocation,
        userExperienceLevel: req.body.userExperienceLevel,
        eventMaxAtendees: req.body.eventMaxAtendees,
        eventAtendees: req.body.eventAtendees,
      }
    
    Event.create(event).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Event"
      })
    });
  };
  
  