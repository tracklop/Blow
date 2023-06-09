// NOTE - Imports
import express from "express";
const router = express.Router();

// SECTION[epic=routes] - Login routes

// NOTE - Imports controllers
import EventController from "../controllers/event.controller.js";

// NOTE - Physical route
router.get("/event-form", EventController.Form);

// NOTE - Private API route
router.post("/create-event", EventController.CreateEvent);
router.get("/get-events", EventController.GetAllEvents);

// NOTE - Exporting route
export default router;

// !SECTION
