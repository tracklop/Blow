// NOTE - Imports
import express from "express";
const router = express.Router();

// SECTION[epic=routes] - Home routes

// NOTE - Imports controllers
import HomeController from "../controllers/home.controller.js";

// NOTE - Physical route
router.get("/home", HomeController.Home);

// NOTE - Exporting route
export default router;

// !SECTION
