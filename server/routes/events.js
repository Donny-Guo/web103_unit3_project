import express from "express"

import EventsController from "../controllers/events.js"

const router = express.Router()

router.get("/events", EventsController.getAllEvents)
router.get("/locations", EventsController.getAllLocations)
router.get("/events/location/:location", EventsController.getEventsByLocation)
router.get("/events/:eventId", EventsController.getEventById)

export default router;