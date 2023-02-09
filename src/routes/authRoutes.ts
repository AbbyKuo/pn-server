import express from "express";
import * as authController from "../controllers/auth";
import { verifyJWT } from "../middleware/verifyJWT";

const router = express.Router();

//sign up
router.post("/register", authController.register);
//login
router.post("/login", authController.login);
//refresh
router.get("/refresh", authController.refresh);
//logout
router.post("/logout", authController.logout);

export default router;
