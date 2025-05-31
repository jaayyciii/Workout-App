import express from "express";
import { loginUser, signupUser } from "../controllers/userController.js";
const router = express.Router();

// Login and Signup routes
router.post("/login", loginUser);
router.post("/signup", signupUser);

export default router;
