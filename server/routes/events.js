import express from "express"

import EventsController from "../controllers/events.js"

const router = express.Router()

router.get("/", EventsController.getAllEvents)
router.get("/:location", EventsController.getEventsByLocation)
router.get("/:eventId", EventsController.getEventById)

export default router;