// NOTE - Imports
import express from "express";
const router = express.Router();

// SECTION[epic=routes] - Auth routes

// NOTE - Imports controllers
import AuthController from "../controllers/auth.controller.js";

// NOTE - Physical route
router.get("/", AuthController.AuthPage);

// NOTE - Private API route
router.post("/sign-up", AuthController.SignUp);
router.post("/sign-in", AuthController.SignIn);
router.post("/logout", AuthController.Logout);

// NOTE - Exporting route
export default router;

// !SECTION
