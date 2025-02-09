const express = require("express");
const router = express.Router();
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

// Create a new event (POST)
router.post("/events", createEvent);

// Get all events (GET)
router.get("/events", getAllEvents);

// Get an event by ID (GET)
router.get("/events/:id", getEventById);

// Update an event (PUT)
router.put("/events/:id", updateEvent);

// Delete an event (DELETE)
router.delete("/events/:id", deleteEvent);

router.post("");

module.exports = router;
